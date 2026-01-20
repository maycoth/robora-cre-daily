"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";

export default function BookingConfirmed() {
  return (
    <main className="min-h-screen">
      <NavigationHeader />

      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#013A6F] via-[#013A6F] to-[#001C35] text-white">
        {/* Decorative blur shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-1/4 w-96 h-96 bg-[#FFCA40]/10 rounded-full blur-3xl" />
          <div className="absolute -right-20 bottom-1/4 w-96 h-96 bg-[#013A6F]/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-32 pb-20 md:pt-40 md:pb-28 container mx-auto text-center max-w-[1280px]">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="w-20 h-20 md:w-24 md:h-24 text-[#FFCA40]" strokeWidth={1.5} />
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 font-bold leading-[1.08] tracking-tight text-white text-4xl md:text-5xl lg:text-[60px]">
            Demo Scheduled!
          </h1>

          {/* Subtitle */}
          <p className="mb-4 text-xl md:text-2xl text-white/90 font-medium">
            Thank you for booking a meeting with Robora
          </p>

          {/* Confirmation message */}
          <p className="mb-12 text-lg md:text-xl text-white/75 max-w-xl mx-auto leading-relaxed">
            You&apos;ll receive a calendar invite and confirmation email shortly.
          </p>

          {/* CTA Button */}
          <Link
            href="https://roborafinancial.com/"
            className="group flex items-center justify-center px-8 py-4 text-base font-semibold text-[#013A6F] bg-[#FFCA40] rounded-lg hover:bg-[#EBAA00] hover:-translate-y-0.5 transition-all duration-300 min-w-[200px]"
          >
            Return to Homepage
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
