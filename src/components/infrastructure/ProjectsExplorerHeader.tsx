import React from 'react';

export default function ProjectsExplorerHeader() {
  return (
    <div className="w-full flex flex-col gap-4">
      <span className="font-dm-sans font-bold text-[14px] leading-[150%] tracking-[0.04em] text-purple">
        Projects
      </span>
      <h2 className="font-satoshi font-bold text-[32px] sm:text-[44px] lg:text-[60px] leading-[120%] tracking-[0] text-navy-dark w-full max-w-[644px]">
        Building Champions,<br />Building Communities
      </h2>
      <p className="font-dm-sans font-medium text-[15px] sm:text-[16px] lg:text-[18px] leading-[150%] tracking-[0] text-gray-500 w-full max-w-[732px]">
        Discover How The Government Of Meghalaya Is Transforming Grassroots Sports Through Strategic Investments In Facilities, Events, And District-Level Competitions.
      </p>
    </div>
  );
}
