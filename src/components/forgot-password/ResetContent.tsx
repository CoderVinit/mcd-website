"use client";

import Image from "@/components/common/ImageWithLoader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { HugeiconsIcon } from "@hugeicons/react";
import { ViewOffIcon, ViewIcon } from "@hugeicons/core-free-icons";
import showSweetAlert from "@/components/SweetAlert/SweetAlert";
import { colors } from "@/theme/colors";

type FormValues = {
  password: string;
  confirmPassword: string;
};

export default function ResetContent() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const passwordRegex = useMemo(
    () =>
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9"'&/])[A-Za-z0-9!@#$%^*()_+\-={}\[\]:;,.?]{8,16}$/,
    []
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { password: "", confirmPassword: "" },
    mode: "onSubmit",
  });

  const passwordValue = watch("password");

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    try {
      // TODO: wire up API call to reset password
      showSweetAlert({
        type: "success",
        title: "Password Reset!",
        text: "Your password has been reset successfully.",
        onConfirm: () => router.push("/login"),
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

  const inputClass =
    "font-satoshi w-full h-10 rounded-lg border border-gray-300 bg-white py-2.5 px-3 pr-10 text-sm leading-[150%] tracking-normal text-gray-900 outline-none transition placeholder:text-sm placeholder:font-normal placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500";

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
            <h1 className="font-satoshi text-[28px] font-medium leading-[120%] tracking-normal text-navy">
              Reset Password
            </h1>
            <p className="font-satoshi text-base font-normal leading-[150%] tracking-normal text-gray-500">
              Track your training, measure progress, and hit new personal bests &mdash; all in one place.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-3"
          >
            {/* Password */}
            <div className="flex w-full flex-col gap-1">
              <label className="font-satoshi text-sm font-medium leading-[150%] tracking-normal text-navy">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className={inputClass}
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: passwordRegex,
                      message: "Password does not meet requirements.",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label="Toggle password visibility"
                >
                  <HugeiconsIcon icon={showPassword ? ViewOffIcon : ViewIcon} size={18} color={colors.gray500} />
                </button>
              </div>
              {errors.password?.message ? (
                <p className="text-xs font-medium text-red-500">{errors.password.message}</p>
              ) : null}
            </div>

            {/* Confirm Password */}
            <div className="flex w-full flex-col gap-1">
              <label className="font-satoshi text-sm font-medium leading-[150%] tracking-normal text-navy">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Re-enter Password"
                  className={inputClass}
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === passwordValue || "Passwords do not match",
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label="Toggle confirm password visibility"
                >
                  <HugeiconsIcon icon={showConfirm ? ViewOffIcon : ViewIcon} size={18} color={colors.gray500} />
                </button>
              </div>
              {errors.confirmPassword?.message ? (
                <p className="text-xs font-medium text-red-500">{errors.confirmPassword.message}</p>
              ) : null}
            </div>

            {/* Validation hints */}
            <ul className="flex flex-col gap-1">
              <li
                className={`font-satoshi flex items-center gap-1.5 text-xs leading-[150%] ${
                  passwordValue.length >= 8 ? "text-green-500" : "text-info"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
                At least 8 characters
              </li>
              <li
                className={`font-satoshi flex items-center gap-1.5 text-xs leading-[150%] ${
                  /(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/.test(passwordValue)
                    ? "text-green-500"
                    : "text-info"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
                One uppercase, one number, one special character
              </li>
            </ul>

            {/* Reset button */}
            <button
              type="submit"
              disabled={isLoading}
              className="font-satoshi flex w-full items-center justify-center gap-2 h-10 rounded-lg bg-purple py-2 px-5 text-sm font-medium leading-[150%] tracking-normal text-gray-50 transition hover:bg-purple-dark disabled:opacity-70"
            >
              {isLoading ? "Resetting..." : "Reset"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
