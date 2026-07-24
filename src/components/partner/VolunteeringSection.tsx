"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDown01Icon,
  ArrowRight02Icon,
  FavouriteIcon,
  UserMultiple02Icon,
  Award05Icon,
} from "@hugeicons/core-free-icons";
import showSweetAlert from "@/components/SweetAlert/SweetAlert";
import VolunteerOpportunities from "./VolunteerOpportunities";



type VolunteerFormValues = {
  fullName: string;
  email: string;
  phoneNumber: string;
  district: string;
  availability: string;
  experience: string;
  agreeToTerms: boolean;
};

export default function VolunteeringSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<VolunteerFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      district: "",
      availability: "",
      experience: "",
      agreeToTerms: false,
    },
    mode: "onSubmit",
  });

  const districts = [
    "East Khasi Hills",
    "West Khasi Hills",
    "South West Khasi Hills",
    "Eastern West Khasi Hills",
    "Ri-Bhoi",
    "East Jaintia Hills",
    "West Jaintia Hills",
    "East Garo Hills",
    "West Garo Hills",
    "South Garo Hills",
    "North Garo Hills",
    "South West Garo Hills",
  ];

  const onSubmit = async (values: VolunteerFormValues) => {
    // Simulate API Submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    showSweetAlert({
      type: "success",
      title: "Registration Submitted",
      text: `Thank you for registering as a volunteer, ${values.fullName}! Our youth development team will review your application and contact you within 2 business days.`,
    });

    reset();
  };

  return (
    <div className="w-full flex flex-col">
      {/* Top Section: Become A Volunteer (Gray/100 Background) */}
      <section className="w-full bg-gray-100 py-[100px] px-4 md:px-[64px] flex flex-col gap-[80px]">
        {/* Banner Header */}
        <div className="flex flex-col gap-4 text-center">
          <h2 className="font-satoshi text-[48px] md:text-[60px] font-bold text-black leading-[120%] tracking-tight max-w-[570px] mx-auto">
            Become A Volunteer
          </h2>
          <p className="font-dm-sans text-gray-500 text-base md:text-lg font-medium leading-[150%] max-w-[512px] mx-auto text-center">
            Join our community of passionate volunteers making a difference in
            sports and youth development
          </p>
        </div>

        {/* Form and Why Volunteer Columns */}
        <div className="max-w-[1200px] w-full mx-auto flex flex-col xl:flex-row gap-6 items-start justify-between">
          {/* Left Column: Form */}
          <div className="w-full xl:w-[776px] h-auto xl:h-[735px] bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <h3 className="font-satoshi text-2xl font-bold text-navy-dark leading-tight">
                Volunteer Registration Form
              </h3>
              <p className="font-dm-sans text-gray-400 text-sm font-normal">
                Fill Out The Form Below And We'll Get Back To You Within 2
                Business Days
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-10"
            >
              {/* Row 1: Full Name & Email */}
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-satoshi text-sm font-medium text-gray-900 leading-[150%] flex items-center">
                      Full Name <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Full Name"
                      className={`font-dm-sans w-full px-3 h-10 rounded-lg border bg-white text-sm text-gray-500 leading-[150%] placeholder-gray-400 focus:outline-none transition-all focus:border-purple ${
                        errors.fullName ? "border-red-500" : "border-[#D1D5DB]"
                      }`}
                      {...register("fullName", {
                        required: "Full name is required",
                      })}
                    />
                    {errors.fullName && (
                      <span className="text-red-500 text-xs font-medium">
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-satoshi text-sm font-medium text-gray-900 leading-[150%] flex items-center">
                      Email Address <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      className={`font-dm-sans w-full px-3 h-10 rounded-lg border bg-white text-sm text-gray-500 leading-[150%] placeholder-gray-400 focus:outline-none transition-all focus:border-purple ${
                        errors.email ? "border-red-500" : "border-[#D1D5DB]"
                      }`}
                      {...register("email", {
                        required: "Email address is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs font-medium">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone Number & District */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-satoshi text-sm font-medium text-gray-900 leading-[150%] flex items-center">
                      Phone Number <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter Phone Number"
                      className={`font-dm-sans w-full px-3 h-10 rounded-lg border bg-white text-sm text-gray-500 leading-[150%] placeholder-gray-400 focus:outline-none transition-all focus:border-purple ${
                        errors.phoneNumber
                          ? "border-red-500"
                          : "border-[#D1D5DB]"
                      }`}
                      {...register("phoneNumber", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: "Please enter a valid 10-digit phone number",
                        },
                      })}
                    />
                    {errors.phoneNumber && (
                      <span className="text-red-500 text-xs font-medium">
                        {errors.phoneNumber.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-satoshi text-sm font-medium text-gray-900 leading-[150%] flex items-center">
                      District <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative w-full flex items-center">
                      <select
                        className={`font-dm-sans w-full px-3 h-10 rounded-lg border bg-white text-sm text-gray-500 leading-[150%] appearance-none pr-10 focus:outline-none focus:border-purple ${
                          errors.district ? "border-red-500" : "border-[#D1D5DB]"
                        }`}
                        {...register("district", {
                          required: "Please select a district",
                        })}
                      >
                        <option value="">Select District</option>
                        {districts.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 pointer-events-none text-gray-500 flex items-center">
                        <HugeiconsIcon icon={ArrowDown01Icon} size={16} />
                      </div>
                    </div>
                    {errors.district && (
                      <span className="text-red-500 text-xs font-medium">
                        {errors.district.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 3: Availability */}
                <div className="flex flex-col gap-2">
                  <label className="font-satoshi text-sm font-medium text-gray-900 leading-[150%] flex items-center">
                    Availability <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="relative w-full flex items-center">
                    <select
                      className={`font-dm-sans w-full px-3 h-10 rounded-lg border bg-white text-sm text-gray-500 leading-[150%] appearance-none pr-10 focus:outline-none focus:border-purple ${
                        errors.availability
                          ? "border-red-500"
                          : "border-[#D1D5DB]"
                      }`}
                      {...register("availability", {
                        required: "Please select your availability",
                      })}
                    >
                      <option value="">Select your Availability</option>
                      <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Weekends Only">Weekends Only</option>
                      <option value="Events Only">Events Only</option>
                    </select>
                    <div className="absolute right-3 pointer-events-none text-gray-500 flex items-center">
                      <HugeiconsIcon icon={ArrowDown01Icon} size={16} />
                    </div>
                  </div>
                  {errors.availability && (
                    <span className="text-red-500 text-xs font-medium">
                      {errors.availability.message}
                    </span>
                  )}
                </div>

                {/* Row 4: Previous Experience */}
                <div className="flex flex-col gap-2">
                  <label className="font-satoshi text-sm font-medium text-gray-900 leading-[150%] flex items-center">
                    Previous Volunteering Experience (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe any previous volunteering or relevant experience..."
                    className="font-dm-sans w-full px-3 py-2.5 rounded-lg border border-[#D1D5DB] bg-white text-sm text-gray-500 leading-[150%] placeholder-gray-400 focus:outline-none focus:border-purple resize-none"
                    {...register("experience")}
                  />
                </div>
              </div>

              {/* Row 5: Consent Checkbox */}
              <div className="flex flex-col gap-2">
                <label className="flex gap-3 items-start cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded-sm text-purple focus:ring-purple border-gray-300 mt-1 cursor-pointer"
                    {...register("agreeToTerms", {
                      required: "You must agree to the terms to submit",
                    })}
                  />
                  <span className="font-satoshi text-xs sm:text-sm text-black font-medium leading-[150%]">
                    I agree to the terms and conditions and consent to DSYA
                    contacting me regarding volunteer opportunities
                  </span>
                </label>
                {errors.agreeToTerms && (
                  <span className="text-red-500 text-xs font-medium">
                    {errors.agreeToTerms.message}
                  </span>
                )}
              </div>

              {/* Row 6: Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#753FC9] text-white font-satoshi font-semibold text-base hover:opacity-90 transition-all cursor-pointer disabled:opacity-50 h-[56px]"
                >
                  {isSubmitting ? "Submitting..." : "Submit Registration"}
                  <HugeiconsIcon icon={ArrowRight02Icon} size={24} />
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Why Volunteer */}
          <div className="w-full xl:w-[400px] h-auto xl:h-[735px] bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col gap-8 shrink-0">
            <h3 className="font-satoshi text-lg font-bold text-black leading-[120%] tracking-tight">
              Why Volunteer With DSYA?
            </h3>

            <div className="flex flex-col justify-between h-full">
              {/* Item 1 */}
              <div className="flex flex-col items-start gap-6">
                <div className="w-15 h-15 rounded-xl bg-dept-red text-white flex items-center justify-center shrink-0">
                  <HugeiconsIcon icon={FavouriteIcon} size={32} />
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="font-satoshi text-[20px] font-bold text-gray-900 leading-[120%]">
                    Make an Impact
                  </h4>
                  <p className="font-satoshi text-gray-600 text-base leading-[150%] font-normal">
                    Professional development opportunities and structured career
                    progression
                  </p>
                </div>
              </div>

              <div className="w-full border-t-[1px] border-gray-200"/>
              {/* Item 2 */}
              <div className="flex flex-col items-start gap-6">
                <div className="w-15 h-15 rounded-xl bg-dept-blue text-white flex items-center justify-center shrink-0">
                  <HugeiconsIcon icon={UserMultiple02Icon} size={32} />
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="font-satoshi text-[20px] font-bold text-gray-900 leading-[120%]">
                    Build Connections
                  </h4>
                  <p className="font-satoshi text-gray-600 text-base leading-[150%] font-normal">
                    Network with like-minded individuals and sports
                    professionals
                  </p>
                </div>
              </div>

              <div className="w-full border-t-[1px] border-gray-200"/>

              {/* Item 3 */}
              <div className="flex flex-col items-start gap-6">
                <div className="w-15 h-15 rounded-xl bg-dept-teal text-white flex items-center justify-center shrink-0">
                  <HugeiconsIcon icon={Award05Icon} size={32} />
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="font-satoshi text-[20px] font-bold text-gray-900 leading-[120%]">
                    Gain Experience
                  </h4>
                  <p className="font-satoshi text-gray-600 text-base leading-[150%] font-normal">
                    Develop skills in event management, coordination, and
                    community engagement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section: Volunteer Opportunities (White Background) */}
      <VolunteerOpportunities />
    </div>
  );
}
