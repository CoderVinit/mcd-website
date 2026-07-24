"use client";

import React from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { BlogPost } from "@/data/blogPosts";
import { useRouter } from "next/navigation";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const router = useRouter();
  return (
    <div className="w-full bg-[#FFFFFF] border border-[#EAECF0] rounded-[12px] flex flex-col justify-between hover:shadow-[0_8px_16px_rgba(16,24,40,0.04)] hover:-translate-y-0.5 transition-all duration-300 group h-auto lg:h-[428px]">
        {/* Image wrapper */}
        <div className="relative w-full h-[200px] rounded-t-[12px] overflow-hidden shrink-0 cursor-pointer" onClick={()=>{
          router.push(`/events/blog/${post.id}`)
        }}>

          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 384px"
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
      </div>

      <div className="p-[24px] flex flex-col justify-between flex-1 gap-[32px]">
        <div className="flex flex-col gap-[12px]">
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
          <h4 className="font-satoshi font-bold text-[18px] md:text-[20px] text-gray-900 leading-[120%] tracking-tight line-clamp-2">
            {post.title}
          </h4>

          {/* Excerpt */}
          <p className="text-gray-600 font-satoshi text-sm md:text-base font-normal leading-[150%] line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        {/* Read More Link */}
        <div className="flex items-center">
          <Link
            href={`/events/blog/${post.id}`}
            className="inline-flex items-center gap-2 text-purple-500 font-dm-sans font-semibold text-base hover:underline hover:opacity-90 active:scale-98 transition-all bg-transparent border-none p-0 cursor-pointer"
          >
            Read More
            <HugeiconsIcon icon={ArrowRight01Icon} size={14} strokeWidth={3.5} />
          </Link>
        </div>
      </div>


      {/* Read More Link */}
      
    </div>
  );
}
