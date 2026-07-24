"use client";

import Image from "@/components/common/ImageWithLoader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import showSweetAlert from "@/components/SweetAlert/SweetAlert";

type FormValues = {
  email: string;
};

export default function ForgotPasswordContent() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const emailRegex = useMemo(() => /^\S+@\S+\.\S+$/, []);
  const phoneRegex = useMemo(() => /^[6-9]\d{9}$/, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { email: "" },
    mode: "onSubmit",
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    try {
      // TODO: wire up API call to send reset code
      showSweetAlert({
        type: "success",
        title: "Code Sent!",
        text: `A reset code has been sent to ${values.email}.`,
        onConfirm: () =>
          router.push(
            `/forgot-password/verify?email=${encodeURIComponent(values.email)}`
          ),
      });
    } catch {
      showSweetAlert({
        type: "error",
        title: "Error!",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white p-4 gap-4">
      {/* LEFT IMAGE */}
      <div className="relative hidden lg:flex flex-1 min-h-[calc(100vh-2rem)]">
        <Image
          src="/images/signup/signup_banner.jpeg"
          alt="Sports background"
          fill
          className="object-cover rounded-3xl"
          priority
        />
      </div>

      {/* RIGHT PANEL */}
      <div className="flex flex-1 items-center justify-center bg-white px-8 py-12">
        <div className="w-[434px] flex flex-col gap-6">
          {/* Logo + Portal Name */}
          <div className="flex w-full flex-col items-center gap-[9.73px]">
            <div className="flex items-center gap-2 p-2 bg-white rounded-xl">
              <Image src="/logo/MCD/MCOD.png" alt="MCOD Logo" width={54} height={54} className="w-[54px] h-[54px] object-contain" unoptimized />
              <span className="text-gray-400 font-light text-xl select-none">/</span>
              <Image src="/logo/MCD/SITDS.png" alt="SITDS Logo" width={54} height={54} className="w-[54px] h-[54px] object-contain" unoptimized />
            </div>
            <div className="flex flex-col items-center gap-[3.24px]">
              <h2 className="font-dm-sans w-[310px] text-center text-[25.95px] font-bold uppercase leading-[120%] tracking-normal text-black">
                Unified Sports Portal
              </h2>
              <p className="font-dm-sans text-[12.97px] font-semibold text-purple">
                Government Of Meghalaya
              </p>
            </div>
          </div>

          {/* Heading + subtitle */}
          <div className="flex w-full flex-col gap-2">
            <h1 className="font-satoshi text-[28px] font-medium leading-[120%] tracking-normal text-gray-900">
              Forgot your password?
            </h1>
            <p className="font-satoshi text-base font-normal leading-[150%] tracking-normal text-gray-500">
              Enter your registered email or phone number and we&apos;ll send
              you a code to reset it.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-3"
          >
            {/* Email / Phone Number */}
            <div className="flex w-full flex-col gap-1">
              <label className="font-satoshi text-sm font-medium leading-[150%] tracking-normal text-navy">
                Email / Phone Number
              </label>
              <input
                placeholder="Enter Email / Phone Number"
                className="font-satoshi w-full h-10 rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-sm leading-[150%] tracking-normal text-gray-900 outline-none transition placeholder:text-sm placeholder:font-normal placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                {...register("email", {
                  required: "Email or Phone number is required",
                  validate: (value) => {
                    if (emailRegex.test(value) || phoneRegex.test(value))
                      return true;
                    return "Enter a valid email address or 10-digit mobile number";
                  },
                })}
              />
              {errors.email?.message ? (
                <p className="text-xs font-medium text-red-500">
                  {errors.email.message}
                </p>
              ) : null}
            </div>

            {/* Send Reset Code + Back to Login */}
            <div className="flex w-full flex-col gap-3">
              <button
                type="submit"
                disabled={isLoading}
                className="font-satoshi flex w-full items-center justify-center gap-2 h-10 rounded-lg bg-purple px-5 text-sm font-medium leading-[150%] tracking-normal text-gray-50 transition hover:bg-purple-dark disabled:opacity-70"
              >
                {isLoading ? "Sending..." : "Send Reset Code"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
