"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AlertSquareIcon,
  ArrowDown01Icon,
  ArrowRight02Icon,
  InformationCircleIcon,
} from "@hugeicons/core-free-icons";
import showSweetAlert from "@/components/SweetAlert/SweetAlert";

type GrievanceFormValues = {
  fullName: string;
  email: string;
  phoneNumber: string;
  district: string;
  category: string;
  subject: string;
  description: string;
  expectedResolution: string;
  declaration: boolean;
};

export default function GrievanceSection() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<GrievanceFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      district: "",
      category: "",
      subject: "",
      description: "",
      expectedResolution: "",
      declaration: false,
    },
    mode: "onSubmit",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        showSweetAlert({
          type: "error",
          title: "File Too Large",
          text: "The selected file exceeds the 5MB size limit.",
        });
        return;
      }
      setSelectedFile(file);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const onSubmit = async (values: GrievanceFormValues) => {
    // Simulate submission API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Generate a random tracking number
    const trackingNum = "GRV" + Math.floor(100000 + Math.random() * 900000);

    showSweetAlert({
      type: "success",
      title: "Grievance Submitted Successfully",
      text: `Thank you for bringing this to our attention. Your tracking number is: ${trackingNum}. You will receive updates within 7 working days.`,
    });

    reset();
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

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

  const categories = [
    "Sports Facilities & Infrastructure",
    "Athlete Scholarship & Schemes",
    "Coaching & Training",
    "Event Management & Tournaments",
    "Administrative Issues",
    "Others",
  ];

  return (
    <section className="w-full bg-gray-100 py-[100px] px-4 md:px-[64px] font-dm-sans">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[60px]">
        {/* Top Info Banner Card */}
        <div className="bg-purple-100 flex rounded-[24px] p-10 border border-[#753FC9]/15 gap-4 max-w-[1000px] w-full mx-auto shadow-sm">
          <HugeiconsIcon
            icon={AlertSquareIcon}
            size={32}
            className="text-purple-500"
          />

          <div className="flex flex-col gap-3">
            <h3 className="font-satoshi text-2xl font-bold text-purple-900 leading-[120%]">
              Grievance Redressal Information
            </h3>
            <p className="font-dm-sans text-purple-500 text-sm md:text-base leading-[150%] font-normal">
              This Portal Is For Formal Grievances Related To DSYA Services,
              Athlete Welfare, Facilities, Schemes, Or Administrative Matters.
              For General Enquiries, Please Use The Contact Us Form Instead.
            </p>
            <p className="font-dm-sans text-purple-500 text-sm md:text-base leading-[150%] font-normal">
              You Will Receive A Unique Tracking Number Upon Submission. All
              Grievances Are Reviewed Within 7 Working Days.
            </p>
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-[24px] p-8 max-w-[1000px] w-full mx-auto shadow-sm border border-gray-100 gap-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-10"
          >
            {/* Section 1: Personal Information */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-[6px] h-[24px] bg-purple-500 rounded-full" />
                <h3 className="font-satoshi text-base font-bold text-black">
                  Personal Information
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="fullName"
                    className="font-satoshi text-sm font-medium text-gray-900 flex items-center"
                  >
                    Full Name <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Enter Full Name"
                    className={`font-dm-sans w-full px-4 py-3 rounded-xl border bg-white text-gray-500 text-sm focus:outline-none transition-all ${
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
                    className="font-satoshi text-sm font-medium text-gray-900 flex items-center"
                  >
                    Email Address <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter Email Address"
                    className={`font-dm-sans w-full px-4 py-3 rounded-xl border bg-white text-gray-500 text-sm focus:outline-none transition-all ${
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phoneNumber"
                    className="font-satoshi text-sm font-medium text-gray-900 flex items-center"
                  >
                    Phone Number <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="phoneNumber"
                    type="text"
                    placeholder="Enter Phone Number"
                    className={`font-dm-sans w-full px-4 py-3 rounded-xl border bg-white text-gray-500 text-sm focus:outline-none transition-all ${
                      errors.phoneNumber
                        ? "border-red-500 focus:ring-1 focus:ring-red"
                        : "border-gray-200 focus:border-purple"
                    }`}
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9+() -]+$/,
                        message: "Invalid phone number",
                      },
                    })}
                  />
                  {errors.phoneNumber && (
                    <span className="text-red-500 text-xs mt-1 font-medium">
                      {errors.phoneNumber.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="district"
                    className="font-satoshi text-sm font-medium text-gray-900 flex items-center"
                  >
                    District <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="district"
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-gray-500 text-sm focus:outline-none transition-all appearance-none pr-10 cursor-pointer ${
                        errors.district
                          ? "border-red-500"
                          : "border-gray-200 focus:border-purple"
                      }`}
                      {...register("district", {
                        required: "Please select a district",
                      })}
                    >
                      <option value="">Select District</option>
                      {districts.map((dist) => (
                        <option key={dist} value={dist}>
                          {dist}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500 flex items-center">
                      <HugeiconsIcon icon={ArrowDown01Icon} size={16} />
                    </div>
                  </div>
                  {errors.district && (
                    <span className="text-red-500 text-xs mt-1 font-medium">
                      {errors.district.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full border-t border-gray-100" />

            {/* Section 2: Grievance Details */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-[6px] h-[24px] bg-purple-500 rounded-full" />
                <h3 className="font-satoshi text-base font-bold text-black">
                  Grievance Details
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="category"
                    className="font-satoshi text-sm font-medium text-gray-900 flex items-center"
                  >
                    Grievance Category{" "}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-gray-500 text-sm focus:outline-none transition-all appearance-none pr-10 cursor-pointer ${
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

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="font-satoshi text-sm font-medium text-gray-900 flex items-center"
                  >
                    Subject <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Brief title of your grievance"
                    className={`font-dm-sans w-full px-4 py-3 rounded-xl border bg-white text-gray-500 text-sm focus:outline-none transition-all ${
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
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="description"
                  className="font-satoshi text-sm font-medium text-gray-900 flex items-center"
                >
                  Description <span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  id="description"
                  rows={5}
                  placeholder="Provide complete details of your grievance including dates, locations and any relevant information..."
                  className={`font-dm-sans w-full px-4 py-3 rounded-xl border bg-white text-gray-500 text-sm focus:outline-none transition-all ${
                    errors.description
                      ? "border-red-500 focus:ring-1 focus:ring-red"
                      : "border-gray-200 focus:border-purple"
                  }`}
                  {...register("description", {
                    required: "Description is required",
                  })}
                />
                {errors.description && (
                  <span className="text-red-500 text-xs mt-1 font-medium">
                    {errors.description.message}
                  </span>
                )}
              </div>

              {/* Supporting Documents Upload */}
              <div className="flex flex-col gap-2">
                <label className="font-satoshi text-sm font-medium text-gray-900 flex items-center">
                  Supporting Documents (Optional)
                </label>
                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] bg-gray-100 rounded-xl shadow-sm border border-gray-150 flex items-center justify-center text-gray-400 shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 17H15M9 13H15M9 9H12M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2 items-start">
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={triggerFileSelect}
                        className="h-8 px-4 flex items-center justify-center rounded-[8px] border border-purple-500 bg-[#F4EEFD] text-purple-500 font-satoshi font-semibold text-xs hover:opacity-90 transition-all cursor-pointer whitespace-nowrap"
                      >
                        Browse
                      </button>
                      <span className="font-satoshi text-sm text-gray-900 font-normal truncate max-w-[250px]">
                        {selectedFile ? selectedFile.name : "No File Chosen"}
                      </span>
                    </div>
                    <span className="font-satoshi text-xs text-gray-500 font-normal italic">
                      File Supported: PDF, JPG & JPEG max 5MB
                    </span>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.jpg,.jpeg"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="expectedResolution"
                  className="font-satoshi text-sm font-medium text-gray-900 flex items-center"
                >
                  Expected Resolution
                </label>
                <textarea
                  id="expectedResolution"
                  rows={4}
                  placeholder="Describe what resolution or action you expect from DSYA..."
                  className="font-dm-sans w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-500 text-sm focus:outline-none transition-all"
                  {...register("expectedResolution")}
                />
              </div>
            </div>
            
            <div className="h-px w-full bg-gray-100"/>

            {/* Declaration Checkbox */}
            <div className="flex flex-col gap-2">
              <label className="flex gap-3 items-start cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded-sm text-purple focus:ring-purple border-gray-300 mt-1 cursor-pointer"
                  {...register("declaration", {
                    required: "You must accept the declaration to submit",
                  })}
                />
                <span className="font-satoshi text-xs sm:text-sm text-black font-medium leading-[150%]">
                  I declare that the information provided above is true and
                  correct to the best of my knowledge. I understand that
                  providing false information may result in rejection of this
                  grievance.
                </span>
              </label>
              {errors.declaration && (
                <span className="text-red-500 text-xs mt-1 font-medium">
                  {errors.declaration.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 px-8 py-4 rounded-xl bg-purple text-white font-satoshi font-medium text-base hover:opacity-90 transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Grievance"}
                <HugeiconsIcon icon={ArrowRight02Icon} size={24} strokeWidth={1.5}/>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
