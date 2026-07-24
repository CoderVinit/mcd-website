import LoginComponent from '@/components/login/LoginComponent'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense>
      <LoginComponent />
    </Suspense>
  )
}

export default page