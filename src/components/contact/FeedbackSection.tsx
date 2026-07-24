"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Location01Icon,
  Call02Icon,
  Mail02Icon,
  Clock01Icon,
  ArrowRight02Icon,
  ArrowDown01Icon,
  InformationCircleIcon,
  HelpSquareIcon,
} from "@hugeicons/core-free-icons";
import showSweetAlert from "@/components/SweetAlert/SweetAlert";

type FeedbackFormValues = {
  fullName: string;
  email: string;
  phoneNumber: string;
  category: string;
  subject: string;
  message: string;
};

export default function FeedbackSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FeedbackFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      category: "",
      subject: "",
      message: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (values: FeedbackFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    showSweetAlert({
      type: "success",
      title: "Thank You!",
      text: "Your feedback has been successfully submitted. We will review it shortly.",
    });

    reset();
  };

  const categories = [
    "General Enquiry",
    "Website Feedback",
    "Sports Schemes",
    "Venues & Infrastructure",
    "Tournaments & Events",
    "Others",
  ];

  return (
    <section className="w-full bg-[#F3F4F6] py-[60px] px-4 md:py-[100px] md:px-[64px] font-dm-sans">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[60px] md:gap-[80px] lg:gap-[100px]">
        {/* Main Grid: Form + Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Left Column: Form Card */}
          <div className="lg:col-span-2 bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 flex flex-col gap-10 h-full">
            <div className="flex flex-col gap-2">
              <h2 className="font-satoshi text-lg md:text-[24px] font-bold text-navy-dark leading-[120%]">
                Send us a Message
              </h2>
              <p className="font-dm-sans text-gray-500 text-xs md:text-sm font-normal leading-[150%]">
                Fill Out The Form Below And We'll Get Back To You Within 2
                Business Days.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-10 flex-grow"
            >
              <div className="flex flex-col gap-6 flex-grow">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="fullName"
                      className="font-satoshi text-sm font-medium text-gray-900 flex items-center leading-[150%]"
                    >
                      Full Name <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Enter Full Name"
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-gray-800 text-sm focus:outline-none transition-all ${
                        errors.fullName
                          ? "border-red-500 focus:ring-1 focus:ring-red"
                          : "border-gray-200 focus:border-purple"
                      }`}
                      {...register("fullName", {
                        required: "Full name is required",
                      })}
                    />
                    {errors.fullName && (
                      <span className="text-red-500 text-xs mt-1 font-medium">
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="font-satoshi text-sm font-medium text-gray-900 flex items-center leading-[150%]"
                    >
                      Email Address <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter Email Address"
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-gray-800 text-sm focus:outline-none transition-all ${
                        errors.email
                          ? "border-red-500 focus:ring-1 focus:ring-red"
                          : "border-gray-200 focus:border-purple"
                      }`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-1 font-medium">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone & Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phoneNumber"
                      className="font-satoshi text-sm font-medium text-gray-900 flex items-center leading-[150%]"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phoneNumber"
                      type="text"
                      placeholder="Enter Phone Number"
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-gray-800 text-sm focus:outline-none transition-all border-gray-200 focus:border-purple`}
                      {...register("phoneNumber")}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="category"
                      className="font-satoshi text-sm font-medium text-gray-900 flex items-center leading-[150%]"
                    >
                      Message Category{" "}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="category"
                        className={`w-full px-4 py-3 rounded-xl border bg-white text-gray-800 text-sm focus:outline-none transition-all appearance-none pr-10 cursor-pointer ${
                          errors.category
                            ? "border-red-500"
                            : "border-gray-200 focus:border-purple"
                        }`}
                        {...register("category", {
                          required: "Please select a category",
                        })}
                      >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500 flex items-center">
                        <HugeiconsIcon icon={ArrowDown01Icon} size={16} />
                      </div>
                    </div>
                    {errors.category && (
                      <span className="text-red-500 text-xs mt-1 font-medium">
                        {errors.category.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 3: Subject */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="font-satoshi text-sm font-medium text-gray-900 flex items-center leading-[150%]"
                  >
                    Subject <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Brief subject line"
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-gray-800 text-sm focus:outline-none transition-all ${
                      errors.subject
                        ? "border-red-500 focus:ring-1 focus:ring-red"
                        : "border-gray-200 focus:border-purple"
                    }`}
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                  />
                  {errors.subject && (
                    <span className="text-red-500 text-xs mt-1 font-medium">
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                {/* Row 4: Message */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-satoshi text-sm font-medium text-gray-900 flex items-center leading-[150%]"
                  >
                    Message <span className="text-red-500 ml-1">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Describe your enquiry in detail..."
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-gray-800 text-sm focus:outline-none transition-all ${
                      errors.message
                        ? "border-red-500 focus:ring-1 focus:ring-red"
                        : "border-gray-200 focus:border-purple"
                    }`}
                    {...register("message", {
                      required: "Message content is required",
                    })}
                  />
                  {errors.message && (
                    <span className="text-red-500 text-xs mt-1 font-medium">
                      {errors.message.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 px-8 py-4 rounded-xl bg-purple text-white font-semibold text-sm hover:opacity-90 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <HugeiconsIcon icon={ArrowRight02Icon} size={16} />
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Info Cards */}
          <div className="flex flex-col gap-4">
            {/* Card 1: Main Office Details */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col gap-8">
              <h3 className="font-satoshi text-lg font-bold text-navy-dark leading-[120%] tracking-tight">
                Main Message
              </h3>

              <div className="flex flex-col gap-6">
                {/* Location */}
                <div className="flex gap-3 items-start">
                  <div className="text-purple shrink-0 mt-0.5">
                    <HugeiconsIcon icon={Location01Icon} size={18} className="text-purple" />
                  </div>
                  <p className="text-sm text-gray-900 font-normal">
                    Third Secretariat Building, Lower Lachumiere, Shillong,
                    Meghalaya, India – 793001
                  </p>
                </div>

                {/* Phone */}
                <div className="flex gap-3 items-center">
                  <div className="text-purple shrink-0">
                    <HugeiconsIcon
                      icon={Call02Icon}
                      size={18}
                      className="text-purple"
                    />
                  </div>
                  <a
                    href="tel:+919876543210"
                    className="text-sm text-gray-900 font-normal"
                  >
                    +91 98765 43210
                  </a>
                </div>

                {/* Email */}
                <div className="flex gap-3 items-center">
                  <div className="text-purple shrink-0">
                    <HugeiconsIcon icon={Mail02Icon} size={18} className="text-purple" />
                  </div>
                  <a
                    href="mailto:contact@example.com"
                    className="text-sm text-gray-900 font-normal"
                  >
                    contact@example.com
                  </a>
                </div>

                {/* Timings */}
                <div className="flex gap-3 items-start">
                  <div className="text-purple shrink-0 mt-0.5">
                    <HugeiconsIcon icon={Clock01Icon} size={18} className="text-purple" />
                  </div>
                  <div className="text-sm text-gray-900 font-normal">
                    <div>Mon-Fri: 10:00 AM - 04:30 PM</div>
                    <div>Sat: 10:00 AM - 01:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Department Directory */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col gap-8">
              <h3 className="font-satoshi text-lg font-bold text-black leading-[120%]">
                Department Directory
              </h3>

              <div className="flex flex-col gap-4">
                {/* Director's Office */}
                <div className="flex flex-col gap-2 pb-4 border-b border-gray-100">
                  <h4 className="font-satoshi text-base font-medium text-gray-900 leading-[150%]">
                    Director's Office
                  </h4>
                  
                  <a
                    href="tel:+913642501000"
                    className="font-satoshi flex flex-col text-sm text-gray-500 font-normal leading-[160%]"
                  >
                    <p>+91 364 250 1000</p>
                    <p>Director@Dsyameghalaya.Gov.In</p>
                  </a>
                </div>

                {/* Athlete Welfare */}
                <div className="flex flex-col gap-1 pb-4 border-b border-gray-100">
                  <h4 className="font-satoshi text-base font-medium text-gray-900 leading-[150%]">
                    Athlete Welfare
                  </h4>
                  <a
                    href="tel:+913642501001"
                    className="font-satoshi flex flex-col text-sm text-gray-500 font-normal leading-[160%]"
                  >
                    <p>+91 364 250 1001</p>
                    <p>Athletes@Dsyameghalaya.Gov.In</p>
                  </a>
                </div>

                {/* Infrastructure */}
                <div className="flex flex-col gap-1 pb-4">
                  <h4 className="font-satoshi text-base font-medium text-gray-900 leading-[150%]">
                    Infrastructure
                  </h4>
                  <a
                    href="tel:+913642501002"
                    className="font-satoshi flex flex-col text-sm text-gray-500 font-normal leading-[160%]"
                  >
                    <p>+91 364 250 1002</p>
                    <p>Infrastructure@Dsyameghalaya.Gov.In</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner: Have a Grievance? */}
        <div className="bg-gray-800 rounded-[24px] p-10 text-white flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <HugeiconsIcon icon={HelpSquareIcon} size={32} className="text-purple-300" />
              <div className="flex flex-col gap-2">
                <h3 className="font-satoshi text-xl md:text-2xl font-bold leading-[120%]">
                  Have a Grievance?
                </h3>
                <p className="font-dm-sans text-gray-300 text-sm md:text-base font-normal">
                  For Formal Complaints Or Grievances Related To DSYA Services,
                  Please Use Our Dedicated Grievance Portal For Proper Tracking
                  And Resolution.
                </p>
              </div>
            </div>
          </div>

          <div>
            <Link
              href="/contact/grievance-handling"
              className="inline-flex items-center gap-2 py-4 pl-10 pr-[34px] bg-white text-gray-900 font-bold text-sm rounded-xl hover:bg-gray-100 transition-all cursor-pointer whitespace-nowrap"
            >
              Go to Grievance
              <HugeiconsIcon icon={ArrowRight02Icon} size={24} color="currentColor"/>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
