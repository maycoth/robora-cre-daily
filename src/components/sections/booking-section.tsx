"use client";

import React from "react";
import Script from "next/script";
import { Calendar } from "lucide-react";

export default function BookingSection() {
  return (
    <section id="booking" className="bg-white min-h-screen py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-10 max-w-[1280px]">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#013A6F]/10 rounded-full">
            <Calendar className="w-4 h-4 text-[#013A6F]" />
            <span className="text-sm font-semibold tracking-wide uppercase text-[#013A6F]">
              Schedule a Demo
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#013A6F] mb-4">
            Ready to Maximize Your Returns?
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how Robora can help your firm earn more on every dollar while keeping your funds safe and accessible.
          </p>
        </div>

        <div className="flex items-center justify-center w-full">
          <div
            className="meetings-iframe-container w-full max-w-3xl h-[780px] overflow-hidden [&>iframe]:!w-full [&>iframe]:!h-full [&>iframe]:!border-0"
            data-src="https://meetings.hubspot.com/matt3372/meet-with-robora?embed=true"
          />
          <Script
            src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
            strategy="afterInteractive"
          />
        </div>
      </div>
    </section>
  );
}
