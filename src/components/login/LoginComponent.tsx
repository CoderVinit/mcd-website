"use client";

import Image from "@/components/common/ImageWithLoader";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import showSweetAlert from "@/components/SweetAlert/SweetAlert";
import type { LoginResponse } from "@/api/auth";
import { useLoginMutation } from "@/store/services/authApi";
import { useForm } from "react-hook-form";
import { HugeiconsIcon } from "@hugeicons/react";
import { ViewOffIcon, ViewIcon } from "@hugeicons/core-free-icons";
import { storeUserInfo, redirectToAdmin } from "@/utils/adminRedirect";
import { colors } from "@/theme/colors";

type FormValues = {
  email: string;
  password: string;
};

const emailRegex = /^\S+@\S+\.\S+$/;
const phoneRegex = /^[6-9]\d{9}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9"'&/])[A-Za-z0-9!@#$%^*()_+\-={}\[\]:;,.?]{8,16}$/;

function isFetchBaseQueryError(err: unknown): err is FetchBaseQueryError {
  return typeof err === "object" && err !== null && "status" in err;
}

export default function LoginComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [login, { isLoading }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  // Lazy init: true (no token) = show form; false (token exists) = redirect
  const [authChecked] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem("token");
  });

  const redirectParam = searchParams.get("redirect");

  useEffect(() => {
    if (!authChecked) {
      router.replace("/");
      return;
    }
    if (redirectParam) {
      const url = new URL(window.location.href);
      url.searchParams.delete("redirect");
      window.history.replaceState({}, "", url.pathname + (url.search || ""));
    }
  }, [authChecked, redirectParam, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { email: "", password: "" },
    mode: "onSubmit",
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const data: LoginResponse = await login({
        email: values.email,
        password: values.password,
      }).unwrap();

      // Normalise top-level vs nested payload shape
      const payload = data.payload ?? data;

      const ok = payload.status ?? payload.success ?? false;
      const msg =
        payload.message ?? payload.msg ?? payload.error ?? "Login completed.";

      if (!ok) {
        showSweetAlert({ type: "error", title: "Error!", text: msg });
        return;
      }

      const token = payload.authorisation?.token;
      if (token) localStorage.setItem("token", token);

      if (remember) localStorage.setItem("remember_me", "true");
      else localStorage.removeItem("remember_me");

      const user = payload.user;

      // Store user info so the profile redirect can be triggered later
      storeUserInfo({
        type: payload.type,
        user_category_main: user?.user_category_main,
        id: user?.id,
        remember_me: remember,
      });

      showSweetAlert({
        type: "success",
        title: "Success!",
        text: msg,
        onConfirm: () => {
          if (user?.status === "initial") return router.replace("/");
          const opened = redirectToAdmin();
          if (!opened) {
            window.open(redirectParam ?? "/", "_blank", "noopener,noreferrer");
          }
          router.replace("/");
        },
      });
    } catch (err: unknown) {
      let errorMessage = "Something went wrong. Please try again.";

      if (isFetchBaseQueryError(err)) {
        // RTK Query error — response body is typed as LoginResponse
        const responseData = err.data as LoginResponse | undefined;
        const payload = responseData?.payload ?? responseData;
        errorMessage =
          payload?.error ??
          payload?.message ??
          payload?.msg ??
          errorMessage;
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }

      showSweetAlert({ type: "error", title: "Error!", text: errorMessage });
    }
  };

  if (!authChecked) return null;

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
              <h2
                className="w-[310px] text-center font-bold uppercase text-black"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "25.95px",
                  lineHeight: "120%",
                  letterSpacing: "0%",
                }}
              >
                Unified Sports Portal
              </h2>
              <p className="text-base font-semibold text-purple">Government Of Meghalaya</p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-[4px]">
            <h1
              style={{
                fontFamily: "var(--font-satoshi)",
                fontWeight: 500,
                fontSize: "28px",
                lineHeight: "120%",
                letterSpacing: "0%",
                color: "var(--color-navy)",
                width: "197px",
              }}
            >
              Welcome Back!
            </h1>
            <p
              style={{
                fontFamily: "var(--font-satoshi)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "150%",
                letterSpacing: "0%",
                color: "var(--color-gray-500)",
                width: "434px",
              }}
            >
              Track your training, measure progress, and hit new personal bests &mdash; all in one place.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-[12px]">
            {/* Email / Phone / ATOM ID */}
            <div className="flex w-full flex-col gap-[4px]">
              <label
                style={{
                  fontFamily: "var(--font-satoshi)",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  color: "var(--color-navy)",
                  width: "213px",
                }}
              >
                Email / Phone Number / ATOM ID
              </label>
              <input
                placeholder="Enter Email / Phone Number / ATOM ID"
                className="w-full max-h-[40px] bg-white rounded-[8px] border border-gray-300 py-[10px] px-[12px] gap-[8px] flex items-center text-[14px] leading-[150%] tracking-[0%] text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition placeholder:text-gray-500 placeholder:text-[14px] placeholder:leading-[150%] placeholder:font-normal"
                style={{ fontFamily: "var(--font-satoshi)" }}
                {...register("email", {
                  required: "Email or Mobile number is required",
                  validate: (value) => {
                    if (emailRegex.test(value) || phoneRegex.test(value)) return true;
                    return "Enter a valid email address or 10-digit mobile number";
                  },
                })}
              />
              {errors.email?.message ? (
                <p className="text-xs font-medium text-red-500">{errors.email.message}</p>
              ) : null}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="w-full max-h-[40px] bg-white rounded-[8px] border border-gray-300 py-[10px] px-[12px] pr-10 gap-[8px] flex items-center text-[14px] leading-[150%] tracking-[0%] text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition placeholder:text-gray-500 placeholder:text-[14px] placeholder:leading-[150%] placeholder:font-normal"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: passwordRegex,
                      message: "Password expired! Please reset your password.",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label="Toggle visibility"
                >
                  <HugeiconsIcon icon={showPassword ? ViewOffIcon : ViewIcon} size={18} color={colors.gray500} />
                </button>
              </div>
              {errors.password?.message ? (
                <p className="mt-1 text-xs font-medium text-red-500">{errors.password.message}</p>
              ) : null}
            </div>

            {/* Remember me + Forgot Password */}
            <div className="flex w-full items-center justify-between gap-[8px]">
              <label className="flex w-[329px] items-center gap-[12px] text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 accent-blue-500"
                />
                Remember me
              </label>
              <Link
                href="/forgot-password"
                style={{
                  fontFamily: "var(--font-satoshi)",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  color: "var(--color-info)",
                  width: "97px",
                  textAlign: "right",
                }}
              >
                Forgot Password?
              </Link>
            </div>

            {/* Sign In + Sign Up wrapper */}
            <div className="flex w-full flex-col gap-[12px]">
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-[8px] h-[40px] rounded-[8px] bg-purple py-[8px] px-[20px] text-white text-sm font-semibold hover:bg-purple-dark transition disabled:opacity-70"
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>

              <p
                className="text-center"
                style={{
                  fontFamily: "var(--font-satoshi)",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  color: "var(--color-gray-600)",
                }}
              >
                Don&apos;t have an account?{" "}
                <Link
                  href="/registration"
                  style={{
                    fontFamily: "var(--font-satoshi)",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "150%",
                    letterSpacing: "0%",
                    textDecoration: "underline solid",
                    textUnderlineOffset: "0%",
                    textDecorationThickness: "0%",
                    color: "var(--color-info)",
                  }}
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}