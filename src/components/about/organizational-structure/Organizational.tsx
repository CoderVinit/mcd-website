import React from 'react'
import Image from '@/components/common/ImageWithLoader';
import { HugeiconsIcon } from '@hugeicons/react';
import { Call02Icon, PrinterIcon } from '@hugeicons/core-free-icons';

interface StructureNode {
  role: string;
  name: string;
  telephone: string;
  fax: string;
  message: string;
  image: string;
}

const structureData: StructureNode[] = [
  {
    role: 'Chief Minister of Meghalaya',
    name: 'Congrad k. sangma',
    telephone: '+91 832 2419840',
    fax: '+91 832 2419846',
    message: 'I sincerely thank our member federations for their confidence and support. This trust reflects our shared commitment to strengthening canoeing across Asia and advancing the sport through unity, integrity, and excellence.',
    image: 'https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779096208_sangma.png',
  },
  {
    role: 'Sports & Youth Affairs',
    name: 'Shri. Dikki D. Shira, MCS',
    telephone: '+91 832 2419420',
    fax: '+91 832 2419422',
    message: 'I sincerely thank our member federations for their confidence and support. This trust reflects our shared commitment to strengthening canoeing across Asia and advancing the sport through unity, integrity, and excellence.',
    image: 'https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779088331_Dikki.jpg',
  },
  {
    role: 'Director',
    name: 'Shri. Sandeep Jacques, IAS',
    telephone: '+91 832 2419510',
    fax: '+91 832 2419512',
    message: 'I sincerely thank our member federations for their confidence and support. This trust reflects our shared commitment to strengthening canoeing across Asia and advancing the sport through unity, integrity, and excellence.',
    image: '/images/athlete-directory/three.jpeg',
  },
  {
    role: 'Deputy Director',
    name: 'Shri. John Doe',
    telephone: '+91 832 2419610',
    fax: '+91 832 2419612',
    message: 'I sincerely thank our member federations for their confidence and support. This trust reflects our shared commitment to strengthening canoeing across Asia and advancing the sport through unity, integrity, and excellence.',
    image: '/images/athlete-directory/four.jpeg',
  },
  {
    role: 'Assistant Director',
    name: 'Shri. John Doe',
    telephone: '+91 832 2419710',
    fax: '+91 832 2419712',
    message: 'I sincerely thank our member federations for their confidence and support. This trust reflects our shared commitment to strengthening canoeing across Asia and advancing the sport through unity, integrity, and excellence.',
    image: '/images/athlete-directory/two.jpeg',
  },
  {
    role: 'Sports Officer (HQ)',
    name: 'Shri. John Doe',
    telephone: '+91 832 2419810',
    fax: '+91 832 2419812',
    message: 'I sincerely thank our member federations for their confidence and support. This trust reflects our shared commitment to strengthening canoeing across Asia and advancing the sport through unity, integrity, and excellence.',
    image: '/images/athlete-directory/six.jpg',
  },
];



const Organizational = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-10 lg:py-[100px] lg:px-[64px] flex flex-col gap-10 sm:gap-16 lg:gap-20">
        
        {/* Title / Description */}
        <div className="w-full text-center flex flex-col gap-4">
          <h2 className="text-[32px] sm:text-[44px] lg:text-[60px] font-bold text-navy-dark leading-[120%] font-satoshi tracking-[0.02em]">
            Building Meghalaya&apos;s Sports Ecosystem
          </h2>
          <p className="text-[15px] sm:text-[16px] lg:text-[18px] font-medium leading-[150%] text-gray-500 font-dm-sans max-w-[769px] mx-auto">
            Connecting leadership, departments, and grassroots sports development across the state.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative w-full max-w-[1200px] mx-auto flex flex-col gap-10">
          
          {/* Vertical dashed line */}
          <div 
            className="absolute left-[11px] top-6 bottom-6 w-[2px] z-0"
            style={{
              backgroundImage: 'linear-gradient(to bottom, #98A2B3 50%, rgba(255,255,255,0) 0%)',
              backgroundSize: '2px 20px',
              backgroundRepeat: 'repeat-y',
            }}
          ></div>

          {structureData.map((node, index) => (
            <div key={index} className="w-full flex flex-col relative z-10">
              
              {/* Top Row: Timeline dot + Role Title */}
              <div className="flex items-center gap-3">
                {/* Timeline dot with horizontal connector */}
                <div className="relative flex items-center shrink-0">
                  <div className="w-[24px] h-[24px] rounded-full border-2 border-purple-500 bg-white flex items-center justify-center z-10 relative">
                    <div className="w-[10px] h-[10px] rounded-full bg-purple-500"></div>
                  </div>
                  <div className="w-[16px] sm:w-[24px] h-[2px] bg-purple-500"></div>
                </div>

                {/* Role Title */}
                <h3 className="font-satoshi font-bold text-base sm:text-[20px] text-navy-dark leading-[120%] tracking-[0.02em]">
                  {node.role}
                </h3>
              </div>

              {/* Bottom Row: Card */}
              <div className="ml-[52px] sm:ml-[60px] mt-3">
                <div className="w-full bg-white rounded-2xl pr-4 pl-3 py-3 sm:pr-6 sm:py-3 sm:pl-3 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow duration-300">
                  {/* Photo */}
                  <div className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] rounded-2xl sm:rounded-2xl overflow-hidden relative shrink-0">
                    <Image
                      src={node.image}
                      alt={node.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Information Details */}
                  <div className="flex-1 flex flex-col gap-4 justify-center">
                    {/* Top Row: Name + Contact */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <span className="font-satoshi font-bold text-base sm:text-[20px] text-navy-dark leading-[120%]">
                        {node.name}
                      </span>
                      
                      {/* Contact Info */}
                      <div className="flex flex-row flex-wrap items-center gap-4 text-[13px] sm:text-[14px] text-gray-500 font-dm-sans">
                        <div className="flex items-center gap-1.5">
                          <HugeiconsIcon icon={Call02Icon} size={16} className="text-gray-500" />
                          <span className="font-semibold text-gray-500">Telephone:</span>
                          <span className="text-gray-900 font-medium">{node.telephone}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <HugeiconsIcon icon={PrinterIcon} size={16} className="text-gray-500" />
                          <span className="font-semibold text-gray-500">Fax:</span>
                          <span className="text-gray-900 font-medium">{node.fax}</span>
                        </div>
                      </div>
                    </div>

                    {/* Biography / Message */}
                    <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[160%] text-gray-500 font-normal font-satoshi m-0">
                      {node.message}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>

      </section>
  )
}

export default Organizational