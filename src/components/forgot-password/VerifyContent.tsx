"use client";

import Image from "@/components/common/ImageWithLoader";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useRef, useState } from "react";
import showSweetAlert from "@/components/SweetAlert/SweetAlert";

export default function VerifyContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";

  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    const updated = [...otp];
    updated[index] = digit;
    setOtp(updated);
    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const updated = Array(6).fill("");
    pasted.split("").forEach((char, i) => { updated[i] = char; });
    setOtp(updated);
    inputRefs.current[Math.min(pasted.length, 5)]?.focus();
  };

  const handleVerify = async () => {
    const code = otp.join("");
    if (code.length < 6) {
      showSweetAlert({ type: "error", title: "Error!", text: "Please enter the complete 6-digit code." });
      return;
    }
    setIsLoading(true);
    try {
      // TODO: wire up API call to verify OTP
      showSweetAlert({
        type: "success",
        title: "Verified!",
        text: "Your code has been verified.",
        onConfirm: () => router.push("/forgot-password/reset"),
      });
    } catch {
      showSweetAlert({ type: "error", title: "Error!", text: "Invalid or expired code. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = () => {
    // TODO: wire up resend API
    showSweetAlert({ type: "success", title: "Code Sent!", text: "A new code has been sent." });
  };

  const inputClass =
    "w-[52px] h-[52px] rounded-[8px] border border-gray-300 bg-gray-100 text-center text-[20px] font-semibold text-navy outline-none focus:border-info focus:ring-1 focus:ring-info transition caret-info";

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
              <h2 className="w-[310px] text-center font-dm-sans font-bold text-[25.95px] leading-[120%] tracking-[0%] uppercase text-black">
                Unified Sports Portal
              </h2>
              <p className="font-dm-sans font-semibold text-[12.97px] text-purple">
                Government Of Meghalaya
              </p>
            </div>
          </div>

          {/* Heading + subtitle */}
          <div className="flex w-full flex-col gap-1">
            <h1 className="font-satoshi font-medium text-[28px] leading-[120%] tracking-[0%] text-navy">
              Enter Verification Code
            </h1>
            <p className="font-satoshi font-normal text-[16px] leading-[150%] tracking-[0%] text-gray-500 w-[434px]">
              If{" "}
              <span className="text-info">{email || "your email"}</span>{" "}
              matches the email address on your account, we&apos;ll send you a
              code.
            </p>
          </div>

          {/* OTP inputs + resend + verify */}
          <div className="flex w-full flex-col gap-[12px]">
            {/* OTP boxes: [x][x] - [x][x] - [x][x] */}
            <div className="flex items-center gap-[8px]" onPaste={handlePaste}>
              {[0, 1].map((i) => (
                <input
                  key={i}
                  ref={(el) => { inputRefs.current[i] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={otp[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className={inputClass}
                />
              ))}
              <span className="text-gray-400 text-xl font-medium">-</span>
              {[2, 3].map((i) => (
                <input
                  key={i}
                  ref={(el) => { inputRefs.current[i] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={otp[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className={inputClass}
                />
              ))}
              <span className="text-gray-400 text-xl font-medium">-</span>
              {[4, 5].map((i) => (
                <input
                  key={i}
                  ref={(el) => { inputRefs.current[i] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={otp[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className={inputClass}
                />
              ))}
            </div>

            {/* Re-send code */}
            <div className="text-center">
              <button
                type="button"
                onClick={handleResend}
                className="font-satoshi font-medium text-[14px] leading-[150%] text-info hover:underline transition"
              >
                Re-send code
              </button>
            </div>

            {/* Verify button */}
            <button
              type="button"
              onClick={handleVerify}
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 h-10 rounded-lg bg-purple py-2 px-5 font-satoshi font-medium text-[14px] leading-[150%] tracking-[0%] text-gray-50 hover:opacity-90 transition disabled:opacity-70"
            >
              {isLoading ? "Verifying..." : "Verify"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
