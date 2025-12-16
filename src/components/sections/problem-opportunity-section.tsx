"use client";

import React, { useState, useMemo } from "react";
import { DollarSign, TrendingUp, Building2 } from "lucide-react";

export default function ProblemOpportunitySection() {
  const [depositAmount, setDepositAmount] = useState(2000000);

  const calculations = useMemo(() => {
    const roboraRate = 0.0311;
    const bankRate = 0.0025;
    const roboraEarnings = depositAmount * roboraRate;
    const bankEarnings = depositAmount * bankRate;
    const difference = roboraEarnings - bankEarnings;
    return { roboraEarnings, bankEarnings, difference };
  }, [depositAmount]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const presetAmounts = [500000, 1000000, 2000000, 5000000, 10000000];

  return (
    <section className="w-full py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1F2937] mb-6 leading-tight">
            Your Deposits Are Working for Banks,
            <br />
            <span className="text-[#003D7A]">Not for You</span>
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Security deposits and reserves sitting in traditional bank accounts earn almost nothing.
            See what you&apos;re leaving on the table.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#F5F7FA] rounded-2xl p-8 md:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-6 h-6 text-[#003D7A]" />
              <span className="text-lg font-semibold text-[#1F2937]">Your Total Security Deposits & Reserves</span>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {presetAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setDepositAmount(amount)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    depositAmount === amount
                      ? "bg-[#003D7A] text-white"
                      : "bg-white text-[#1F2937] hover:bg-[#E8F1F8]"
                  }`}
                >
                  {formatCurrency(amount)}
                </button>
              ))}
            </div>

            <input
              type="range"
              min={100000}
              max={20000000}
              step={100000}
              value={depositAmount}
              onChange={(e) => setDepositAmount(Number(e.target.value))}
              className="w-full h-2 bg-[#E5E7EB] rounded-lg appearance-none cursor-pointer accent-[#003D7A]"
            />
            <div className="flex justify-between text-sm text-[#6B7280] mt-2">
              <span>$100K</span>
              <span className="font-semibold text-[#003D7A]">{formatCurrency(depositAmount)}</span>
              <span>$20M</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#FEF3F3] rounded-2xl p-6 border border-[#FECACA]">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-[#DC2626]" />
                <span className="text-sm font-medium text-[#DC2626]">Typical Bank (0.25% APY)</span>
              </div>
              <p className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-2">
                {formatCurrency(calculations.bankEarnings)}
              </p>
              <p className="text-sm text-[#6B7280]">Annual earnings</p>
            </div>

            <div className="bg-[#ECFDF5] rounded-2xl p-6 border border-[#A7F3D0]">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-[#059669]" />
                <span className="text-sm font-medium text-[#059669]">Robora (3.11% APY)</span>
              </div>
              <p className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-2">
                {formatCurrency(calculations.roboraEarnings)}
              </p>
              <p className="text-sm text-[#6B7280]">Annual earnings</p>
            </div>

            <div className="bg-gradient-to-br from-[#003D7A] to-[#0A5BA8] rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium text-[#FFC700]">You&apos;re Missing Out On</span>
              </div>
              <p className="text-3xl md:text-4xl font-bold mb-2">
                {formatCurrency(calculations.difference)}
              </p>
              <p className="text-sm text-white/80">Every year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
