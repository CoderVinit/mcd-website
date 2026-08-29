 pipeline {
     agent {
        label 'mcd-staging'
    }
    environment {
        AWS_ACCOUNT_ID = credentials('ACCOUNT_ID')
        AWS_REGION = "ap-south-1"
        IMAGE_REPO_NAME = "mcd-frontend-website-staging"
        IMAGE_TAG = "latest"
        REPOSITORY_URI = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${IMAGE_REPO_NAME}"
        IMAGE_NAME = "${REPOSITORY_URI}:${IMAGE_TAG}"
    }
    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }
        stage('Logging into AWS ECR') {
            steps {
                script {
                    // Log into AWS ECR
                    sh """aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${REPOSITORY_URI}"""
                }
            }
        }

        stage('Cloning Git') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/server_testing_env']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'khelotech1', url: 'https://khelotech1@bitbucket.org/HostAssrm/mcd_frontend_website.git']]])
            }
        }

         stage('Copy env file') {
            steps {
                withCredentials([file(credentialsId: 'MCD_FRONTEND_ENV_UAT', variable: 'SECRET_ENV_FILE')]) {
                    sh 'cp $SECRET_ENV_FILE .env'
                }
            }
        }


        stage('Building Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${IMAGE_REPO_NAME}:${IMAGE_TAG}")
        
                }
            }
        }

        // Push container to ECR
        stage('Pushing to ECR') {
            steps {
                script {
                    // Tag the Docker image
                    sh """docker tag ${IMAGE_REPO_NAME}:${IMAGE_TAG} ${REPOSITORY_URI}:${IMAGE_TAG}"""

                    // Push the Docker image to ECR
                    sh """docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${IMAGE_REPO_NAME}:${IMAGE_TAG}"""
                }
            }
        }
    stage("Remove Old Version") {
    steps {
        sh """
            docker rm -f mcd_frontend_website_staging || true
            docker compose down --remove-orphans || true
        """
    }
}

stage("Start Container") {
    steps {
        script {
            sh """
                docker compose down || true
                docker compose pull
                docker compose up -d --force-recreate
            """
        }
    }
}
        stage('Clean up workspace') {
            steps {
                cleanWs()
                script {
                    echo 'Workspace cleaned up.'
                    sh 'docker system prune -f'
                    echo 'Unused Docker resources cleaned up.'
                    sh 'docker image prune -f' // Fixed typo: "inage" → "image"
                    echo 'Unused Docker images cleaned up.'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo 'Pipeline run succeeded.'
        }
        failure {
            echo 'Pipeline run failed.'
        }
    }
}