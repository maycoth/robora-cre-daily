'use client';

import React, { useState } from 'react';

export default function CalculatorSection() {
  const [amount, setAmount] = useState<string>('');

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="flex items-center justify-center space-x-1.5 mb-6">
          <span className="text-[#2E7FD6] font-bold text-sm sm:text-base tracking-wide">
            EARN
          </span>
          <span className="text-[#2E7FD6] font-bold text-sm sm:text-base tracking-wide">
            3.11%
          </span>
          <div className="relative flex items-start">
            <span className="text-[#2E7FD6] font-bold text-sm sm:text-base tracking-wide">
              APY
            </span>
            <sup className="text-[#2E7FD6] font-bold text-[0.6em] ml-0.5 top-0">
              1
            </sup>
          </div>
          <span className="text-[#2E7FD6] font-bold text-sm sm:text-base tracking-wide uppercase">
            WITH ROBORA
          </span>
        </div>

        <h2 className="text-[#003D7A] text-3xl md:text-[44px] leading-[1.2] font-bold text-center max-w-[800px] mb-12">
          Calculate your interest income from the high-interest savings account here
        </h2>

        <div className="w-full max-w-[620px]">
          <form onSubmit={handleCalculate} className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg font-normal pointer-events-none">
                $
              </span>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full h-12 sm:h-[52px] py-3 pl-9 pr-4 text-base sm:text-lg border border-[#E5E7EB] rounded-lg outline-none transition-all text-[#1F2937] placeholder:text-[#9CA3AF] focus:border-[#2E7FD6] focus:ring-4 focus:ring-[#2E7FD6]/10"
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className="h-12 sm:h-[52px] py-3 px-10 text-base sm:text-lg font-semibold rounded-lg text-white bg-[#003D7A] hover:bg-[#003D7A]/90 hover:-translate-y-[1px] active:translate-y-0 transition-all shadow-sm hover:shadow-md whitespace-nowrap"
            >
              Calculate
            </button>
          </form>

          <div className="text-left space-y-1 pl-1">
            <p className="text-sm font-normal text-[#6B7280] leading-relaxed">
              This calculation is illustrative and assumes a constant balance and rates.
            </p>
            <p className="text-sm font-normal text-[#6B7280] leading-relaxed">
              $10K minimum initial deposit is required.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
