'use client';

import Script from 'next/script';
import { Calendar } from 'lucide-react';

export default function BookingSection() {
  return (
    <section id="booking" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-10 max-w-[1280px]">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#013A6F]/10 rounded-full mb-4">
            <Calendar className="w-4 h-4 text-[#013A6F]" />
            <span className="text-sm font-medium text-[#013A6F]">Book a Meeting</span>
          </div>
          <h2 className="text-3xl font-bold text-[#013A6F] md:text-4xl">
            Schedule a Demo
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            See how Robora can help you maximize returns on your excess cash
          </p>
        </div>

        <div
          className="meetings-iframe-container min-h-[600px] md:min-h-[700px]"
          data-src="https://meetings.hubspot.com/matt3372/meet-with-robora?embed=true"
        />
        <Script
          src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
          strategy="lazyOnload"
        />
      </div>
    </section>
  );
}
