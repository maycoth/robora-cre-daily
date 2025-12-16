import React from 'react';
import { Check } from 'lucide-react';

const featuresCol1 = [
  "Free Cash Analytics and Management Tool",
  "Unlimited Transfers",
  "Free Same Day ACH",
];

const featuresCol2 = [
  "Free Standard ACH",
  "$25 per Wire Transfer - standard cost from banking partner",
];

export default function PricingCTASection() {
  return (
    <section id="pricing" className="bg-white py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-10 max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] bg-[#003D7A] text-white shadow-xl">
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div 
              className="absolute -left-[50px] -top-[50px] h-[300px] w-[300px] md:-left-[20px] md:-top-[60px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px]"
              style={{
                backgroundColor: '#FFC700',
                borderRadius: '80px',
                transform: 'rotate(15deg) translateX(-30%)',
                opacity: 1,
              }}
            />
            <div 
              className="absolute -bottom-[100px] -left-[80px] h-[350px] w-[350px] md:-bottom-[150px] md:-left-[50px] md:h-[550px] md:w-[550px]"
              style={{
                backgroundColor: '#2E7FD6',
                borderRadius: '100px',
                transform: 'rotate(45deg)',
                opacity: 1,
                zIndex: -1,
              }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-12 p-8 md:p-12 lg:grid-cols-12 lg:p-16">
            <div className="hidden lg:col-span-5 lg:block" aria-hidden="true" />

            <div className="flex flex-col gap-8 lg:col-span-7">
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold leading-[1.2] md:text-5xl lg:text-[52px]">
                  Automate your cash. <br className="hidden lg:block" />
                  Invest more. Earn more.
                </h2>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xl font-normal md:text-2xl">Earn</span>
                    <span className="text-5xl font-bold text-[#FFC700] md:text-[64px] leading-none">
                      3.11%
                    </span>
                    <span className="relative top-0 text-xl font-semibold md:text-2xl">
                      APY<sup className="text-sm">1</sup>
                    </span>
                  </div>
                  <span className="text-lg font-normal opacity-90 md:text-xl">
                    on all balances
                  </span>
                </div>

                <p className="text-sm font-medium text-white/90">
                  *$10K minimum initial deposit
                </p>
              </div>

              <div className="h-px w-full bg-[#E5E7EB]/20" />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
                <div className="flex flex-col gap-4">
                  {featuresCol1.map((feature, idx) => (
                    <FeatureItem key={`col1-${idx}`} text={feature} />
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  {featuresCol2.map((feature, idx) => (
                    <FeatureItem key={`col2-${idx}`} text={feature} />
                  ))}
                </div>
              </div>

              <div className="h-px w-full bg-[#E5E7EB]/20" />

              <div className="space-y-6">
                <h4 className="text-sm font-medium uppercase tracking-wide opacity-80">
                  Monthly Fees
                </h4>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                  <div className="space-y-1">
                    <div className="text-lg font-bold">For $100K or greater</div>
                    <p className="text-sm leading-relaxed text-white/90">
                      average monthly balances,<br />
                      <span className="font-semibold text-white">$0/month fees</span>
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="text-lg font-bold">For less than $100K</div>
                    <p className="text-sm leading-relaxed text-white/90">
                      average monthly balances,<br />
                      <span className="font-semibold text-white">$15/month fees</span> after a 30-day trial<sup className="text-[10px]">3</sup>
                    </p>
                  </div>
                </div>

                <p className="max-w-xl text-xs leading-relaxed text-white/60">
                  The fee enables us to offer the highest rate on smaller balances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#10B981]">
        <Check className="h-3.5 w-3.5 text-white stroke-[3px]" />
      </div>
      <span className="text-[15px] font-medium leading-tight text-white md:text-base">
        {text}
      </span>
    </div>
  );
}
