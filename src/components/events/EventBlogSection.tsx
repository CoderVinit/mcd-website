"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import BlogCard from "./BlogCard";
import { blogPostsData } from "@/data/blogPosts";

export default function EventBlogSection() {
  const featuredBlog = blogPostsData[0];
  const blogPosts = blogPostsData.slice(1);

  return (
    <section className="w-full bg-[#FFFFFF] font-dm-sans py-[60px] px-4 md:py-[100px] md:px-[64px]">
      <div className="w-full max-w-[1312px] mx-auto flex flex-col gap-[60px] md:gap-[80px] lg:gap-[100px]">
        
        {/* ─── Featured Blog Post Section ─── */}
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-[80px] lg:h-[400px]">
          {/* Left: Image Container */}
          <div className="w-full lg:w-[560px] h-[340px] lg:h-full relative rounded-[32px] overflow-hidden shadow-sm shrink-0 group">
            <Image
              src={featuredBlog.image}
              alt={featuredBlog.title}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              priority
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
          </div>

          {/* Right: Content Container */}
          <div className="flex-1 flex flex-col justify-center gap-[24px] lg:h-[324px] my-auto">
            <div className="flex flex-col gap-3">
              {/* Badges */}
              <div className="flex gap-2.5 items-center">
                <span className={`px-3 py-1 rounded-[6px] text-[12px] font-bold font-satoshi uppercase tracking-wider ${featuredBlog.scopeColor.bg} ${featuredBlog.scopeColor.text}`}>
                  {featuredBlog.scope}
                </span>
                <span className={`px-3 py-1 rounded-[6px] text-[12px] font-bold font-satoshi uppercase tracking-wider ${featuredBlog.statusColor.bg} ${featuredBlog.statusColor.text}`}>
                  {featuredBlog.status}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-satoshi font-bold text-[28px] md:text-[36px] lg:text-[40px] text-gray-900 leading-[130%] tracking-[0%]">
                {featuredBlog.title}
              </h2>
            </div>

            {/* Excerpt */}
            <p className="text-gray-500 font-dm-sans text-base md:text-lg font-medium leading-[150%]">
              {featuredBlog.excerpt}
            </p>

            {/* Read More Link */}
            <div>
              <Link
                href={`/events/blog/${featuredBlog.id}`}
                className="inline-flex items-center gap-2 text-purple-500 font-dm-sans font-semibold text-base hover:underline hover:opacity-90 active:scale-98 transition-all bg-transparent border-none p-0 cursor-pointer"
              >
                Read More
                <HugeiconsIcon icon={ArrowRight01Icon} size={14} strokeWidth={3.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* ─── Latest Blogs Heading & Grid ─── */}
        <div className="flex flex-col gap-8 md:gap-10 w-full">
          <h3 className="font-satoshi font-bold text-[24px] md:text-[32px] text-black leading-[150%]">
            Latest Blogs
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
