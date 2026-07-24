import React from "react";
import Image from "@/components/common/ImageWithLoader";

const leaders = [
    {
      name: "Shri Conrad K. Sangma",
      role: "Hon'ble Chief Minister, Government of Meghalaya",
      image: "https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779096208_sangma.png",
    },
    {
      name: "Shri Wailadmiki Shylla",
      role: "Hon'ble Minister of Sports & Youth Affairs, Government of Meghalaya",
      image: "https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779096343_Wailadmiki.png",
    },
    {
      name: "Dr. Vijay Kumar D, IAS",
      role: "Commissioner & Secretary, Government of Meghalaya",
      image: "https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779096379_vijay.png",
    },
    {
      name: "Dr. Shakil P. Ahmed, IAS",
      role: "Chief Secretary, Government of Meghalaya",
      image: "https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779096444_Shakil.png",
    },
    {
      name: "Smt. Isawanda Laloo, IAS",
      role: "Secretary, Government of Meghalaya",
      image: "https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779088819_Isawanda.jpg",
    },
    {
      name: "Shri Richard Yanthan, IAS",
      role: "Joint Secretary, Government of Meghalaya",
      image: "https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779088935_Richard.jpg",
    },
    {
      name: "Shri Dikki D. Shira, MCS",
      role: "Director, Sports & Youth Affairs, Government of Meghalaya",
      image: "https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779088331_Dikki.jpg",
    }
];

export default function MeetOurLeadersSection() {
  return (
    <section className="w-full bg-gray-50 px-[16px] py-[40px] md:px-[32px] md:py-[60px] lg:px-[64px] lg:py-[100px] flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col xl:flex-row xl:items-start gap-[32px] md:gap-[40px] xl:gap-[80px]">
        {/* Header */}
        <div className="flex flex-col gap-[8px] shrink-0 xl:sticky xl:top-[120px]">
          <span className="font-dm-sans font-bold text-[12px] md:text-[14px] leading-[150%] tracking-[0.04em] text-purple">
            Organisational Structure
          </span>
          <h2 className="font-satoshi font-bold text-[28px] md:text-[40px] lg:text-[60px] leading-[120%] text-navy-dark">
            Meet Our
            <br />
            Leaders
          </h2>
        </div>

        {/* Leaders Grid */}
        <div className="flex-1 grid grid-cols-2 gap-[12px] md:gap-[24px]">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="flex flex-col gap-[12px] md:gap-[16px] w-full max-w-[430px]"
            >
              <div className="relative w-full h-[280px] sm:h-[360px] md:h-[430px] lg:h-[510px] rounded-[8px] md:rounded-[12px] overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-[4px] md:gap-[8px] px-0 md:px-[16px]">
                <h3 className="font-satoshi font-bold text-[14px] md:text-[18px] lg:text-[24px] leading-[120%] tracking-[0.01em] text-navy">
                  {leader.name}
                </h3>
                <p className="font-dm-sans font-normal text-[11px] md:text-[13px] lg:text-[14px] leading-[150%] text-gray-500">
                  {leader.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
