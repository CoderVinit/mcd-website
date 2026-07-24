"use client";
import React, { useState } from "react";
import DepartmentCard, { Department } from "./DepartmentCard";
import DepartmentModal from "./DepartmentModal";
import {
  Award01Icon,
  Building05Icon,
  UserMultiple02Icon,
  PromotionIcon,
  Target03Icon,
  ComputerPhoneSyncIcon,
  BookOpen02Icon,
  UserGroup02Icon,
} from "@hugeicons/core-free-icons";

const departments: Department[] = [
  {
    title: "Athlete Development",
    description: "Training, nutrition, and psychological support for elite and emerging athletes.",
    icon: Award01Icon,
    bgClass: "bg-dept-orange",
    textClass: "text-white",
    linkText: "View Details",
    href: "#",
    responsibilities: [
      "Strategic implementation of athlete development initiatives across the state.",
      "Strategic implementation of athlete development initiatives across the state.",
      "Strategic implementation of athlete development initiatives across the state.",
      "Strategic implementation of athlete development initiatives across the state."
    ],
    leader: {
      name: "Dr. A. Sharma",
      role: "Head Of Department",
      image: "https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779088819_Isawanda.jpg"
    }
  },
  {
    title: "Sports Infrastructure",
    description: "Planning, construction, and maintenance of stadiums, courts, and training facilities.",
    icon: Building05Icon,
    bgClass: "bg-dept-blue",
    textClass: "text-white",
    linkText: "View Details",
    href: "#",
    responsibilities: [
      "Strategic implementation of athlete development initiatives across the state.",
      "Strategic implementation of athlete development initiatives across the state.",
      "Strategic implementation of athlete development initiatives across the state.",
      "Strategic implementation of athlete development initiatives across the state."
    ],
    leader: {
      name: "Dr. A. Sharma",
      role: "Head Of Department",
      image: "https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779088819_Isawanda.jpg"
    }
  },
  {
    title: "Youth Affairs",
    description: "Youth empowerment programs, leadership training, and cultural exchanges.",
    icon: UserMultiple02Icon,
    bgClass: "bg-dept-teal",
    textClass: "text-white",
    linkText: "View Details",
    href: "#",
    responsibilities: [
      "Strategic implementation of youth empowerment programs and community welfare.",
      "Organizing leadership development workshops and training courses.",
      "Coordinating state and national youth exchange conferences.",
      "Empowering grassroots youth organizations and local community groups."
    ],
    leader: {
      name: "Smt. P. Lyngdoh",
      role: "Head of Youth Welfare",
      image: "https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779088819_Isawanda.jpg"
    }
  },
  {
    title: "Event Management",
    description: "Organizing state, national, and international sports tournaments.",
    icon: PromotionIcon,
    bgClass: "bg-dept-pink",
    textClass: "text-white",
    linkText: "View Details",
    href: "#",
    responsibilities: [
      "Planning and organizing major state, national, and international tournaments.",
      "Coordinating logistics, schedules, venues, and accommodation for participants.",
      "Partnering with sports federations to host national level games.",
      "Managing scheduling, marketing, and sponsorships for sports leagues."
    ],
    leader: {
      name: "Shri K. Sangma",
      role: "Chief of Events",
      image: "https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779096343_Wailadmiki.png"
    }
  },
  {
    title: "Talent Scouting",
    description: "Identifying and nurturing grassroots talent across all 12 districts.",
    icon: Target03Icon,
    bgClass: "bg-dept-red",
    textClass: "text-white",
    linkText: "View Details",
    href: "#",
    responsibilities: [
      "Conducting systematic talent identification trials across all districts.",
      "Nurturing and training selected young athletes in state academies.",
      "Running advanced sports testing and metrics evaluation for youth candidates.",
      "Coordinating with schools to support grassroot athletic growth."
    ],
    leader: {
      name: "Dr. M. Choudhury",
      role: "Head of Talent Scouting",
      image: "https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779088935_Richard.jpg"
    }
  },
  {
    title: "Digital Operations",
    description: "Managing the Unified Sports Portal, data analytics, and digital services.",
    icon: ComputerPhoneSyncIcon,
    bgClass: "bg-dept-sky",
    textClass: "text-white",
    linkText: "Learn More",
    href: "#",
    responsibilities: [
      "Maintaining and enhancing functionality of the Unified Sports Portal.",
      "Implementing database analytics for registered athletes and coaches.",
      "Streamlining online event registration and infrastructure booking.",
      "Providing IT support for governing bodies and virtual sports leagues."
    ],
    leader: {
      name: "Shri A. Dey",
      role: "Chief Technology Officer",
      image: "https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779096444_Shakil.png"
    }
  },
  {
    title: "Coaching Development",
    description: "Certification, upskilling, and workshops for sports coaches and referees.",
    icon: BookOpen02Icon,
    bgClass: "bg-dept-purple",
    textClass: "text-white",
    linkText: "View Details",
    href: "#",
    responsibilities: [
      "Conducting training clinics and certification seminars for sports coaches.",
      "Offering workshops for referee upskilling and rules updates.",
      "Coordinating with national sports authorities for accredited license programs.",
      "Promoting physical education and coaching standards across institutes."
    ],
    leader: {
      name: "Shri S. K. Marak",
      role: "Director of Coaching",
      image: "https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779088331_Dikki.jpg"
    }
  },
  {
    title: "Community Sports",
    description: "Promoting fitness, indigenous sports, and mass participation campaigns.",
    icon: UserGroup02Icon,
    bgClass: "bg-dept-green",
    textClass: "text-white",
    linkText: "View Details",
    href: "#",
    responsibilities: [
      "Promoting mass fitness and public wellness campaigns.",
      "Supporting and organizing traditional and indigenous sports programs.",
      "Arranging community sports meets and recreational sports tournaments.",
      "Facilitating local club activities and sports gear distribution."
    ],
    leader: {
      name: "Smt. J. Shylla",
      role: "Head of Community Sports",
      image: "https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779088819_Isawanda.jpg"
    }
  },
];

export default function DepartmentsAndWings() {
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);

  return (
    <section className="w-full bg-white py-12 px-4 md:py-[100px] md:px-[64px]">
      <div className="w-full max-w-[1312px] mx-auto flex flex-col gap-[80px]">
        {/* Header (Title & Subtitle) */}
        <div className="w-full flex flex-col gap-3 text-center">
          <h2 className="font-satoshi text-[32px] sm:text-[48px] lg:text-[60px] font-bold text-navy-dark leading-[120%] tracking-tight">
            Departments & Operational Wings
          </h2>
          <p className="font-dm-sans text-sm sm:text-base lg:text-lg text-gray-500 max-w-[883px] mx-auto">
            Supporting athlete development, infrastructure, and sports administration through specialized divisions.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-[24px] w-full">
          {departments.map((dept, index) => (
            <DepartmentCard 
              key={index} 
              department={dept} 
              onViewDetails={() => setSelectedDept(dept)}
            />
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {selectedDept && (
        <DepartmentModal 
          department={selectedDept} 
          onClose={() => setSelectedDept(null)} 
        />
      )}
    </section>
  );
}
