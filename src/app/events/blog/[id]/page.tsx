"use client";

import React, { use } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft02Icon, Calendar03Icon, Location06Icon } from "@hugeicons/core-free-icons";
import { blogPostsData } from "@/data/blogPosts";
import PageBanner from "@/components/common/PageBanner";

export default function EventBlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();

  const blogId = parseInt(id);
  const post = blogPostsData.find((p) => p.id === blogId);

  if (!post) {
    return (
      <main className="w-full bg-[#FFFFFF] py-[100px] px-4 text-center">
        <h1 className="font-satoshi text-2xl font-bold text-gray-900">Blog post not found</h1>
        <button
          onClick={() => router.push("/events/blog")}
          className="mt-6 inline-flex items-center gap-2 py-3 px-6 bg-purple-500 text-white rounded-xl font-bold hover:opacity-90 active:scale-95 transition-all cursor-pointer"
        >
          Return to Blog
        </button>
      </main>
    );
  }

  return (
    <main>
      <PageBanner
        title="EVENT BLOG"
        watermarkText="EVENT BLOG"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: "Event Blog", href: "/events/blog" },
          { label: post.title },
        ]}
      />

      <section className="w-full bg-[#FFFFFF] font-dm-sans py-[60px] px-4 md:py-[100px] md:px-[64px]">
        <div className="w-full max-w-[1312px] mx-auto flex flex-col gap-[60px] md:gap-[80px] lg:gap-[100px]">
          
          {/* Back Button & Event Header Wrapper */}
          <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-[40px] lg:h-[488px]">
            {/* Back Button */}
            <div>
              <button
                onClick={() => router.push("/events/blog")}
                className="inline-flex items-center gap-[8px] py-3 pr-6 pl-[18px] border border-gray-300 rounded-[12px] bg-white text-gray-500 font-satoshi font-bold text-base hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
              >
                <HugeiconsIcon icon={ArrowLeft02Icon} size={24} strokeWidth={2} />
                Back
              </button>
            </div>

            {/* Event Header block */}
            <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-[80px] lg:h-[400px]">
              {/* Left: Image Container */}
              <div className="w-full lg:w-[560px] h-[340px] lg:h-full relative rounded-[32px] overflow-hidden shadow-sm shrink-0 group">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  priority
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              {/* Right: Content Container */}
              <div className="flex-1 flex flex-col justify-center gap-[40px] h-fit my-auto">
                <div className="flex flex-col gap-3">
                  {/* Badges */}
                  <div className="flex gap-2.5 items-center">
                    <span className={`px-3 py-1 rounded-lg text-sm font-semibold font-dm-sans tracking-wider ${post.scopeColor.bg} ${post.scopeColor.text}`}>
                      {post.scope}
                    </span>
                    <span className={`px-3 py-1 rounded-lg text-sm font-semibold font-dm-sans tracking-wider ${post.statusColor.bg} ${post.statusColor.text}`}>
                      {post.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-satoshi font-bold text-[28px] md:text-[36px] lg:text-[40px] text-gray-900 leading-[130%] tracking-[0%]">
                    {post.title}
                  </h2>
                </div>

                {/* Spacing details */}
                <div className="flex flex-col gap-4">
                  {/* Date */}
                  <div className="flex items-center gap-4 text-gray-700 font-satoshi text-base font-medium">
                    <div className="w-[44px] h-[44px] bg-gray-100 rounded-xl flex items-center justify-center shrink-0 text-gray-500">
                      <HugeiconsIcon icon={Calendar03Icon} size={20} strokeWidth={2} />
                    </div>
                    <span className="text-gray-900">{post.startDate} - {post.endDate}</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4 text-gray-700 font-satoshi text-base font-medium">
                    <div className="w-[44px] h-[44px] bg-gray-100 rounded-xl flex items-center justify-center shrink-0 text-gray-500">
                      <HugeiconsIcon icon={Location06Icon} size={20} strokeWidth={2} />
                    </div>
                    <span className="text-gray-900">{post.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Event Details Section */}
          <div className="flex flex-col gap-6 w-full max-w-[1200px] mx-auto">
            <h3 className="font-satoshi font-bold text-[20px] md:text-2xl text-black leading-[150%] tracking-tight">
              Event Details
            </h3>

            <div className="flex flex-col gap-5 max-w-[1200px]">
              {post.paragraphs.map((para, index) => (
                <p key={index} className="font-dm-sans text-gray-500 text-base md:text-lg leading-[160%] font-medium">
                  {para}
                </p>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
