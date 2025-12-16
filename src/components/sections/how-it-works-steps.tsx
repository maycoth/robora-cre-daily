import React from 'react';

const TriangleIcon = () => (
  <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[3px] flex-shrink-0">
    <path d="M9.5 6.13397C10.1667 6.51887 10.1667 7.48113 9.5 7.86603L2 12.1962C1.33333 12.5811 0.5 12.0999 0.5 11.3301L0.5 2.66987C0.5 1.90007 1.33333 1.41895 2 1.80385L9.5 6.13397Z" stroke="#003D7A" strokeWidth="1.5"/>
  </svg>
);

export default function HowItWorksSteps() {
  const steps = [
    {
      id: 1,
      title: "Fully digital onboarding",
      description: "Get setup in less than 5 minutes.",
    },
    {
      id: 2,
      title: "Link your existing bank accounts",
      description: "Choose the account(s) you want to securely link with Robora for cash optimization.",
    },
    {
      id: 3,
      title: "Identify your Excess Cash",
      description: "Utilize Robora's proprietary cash flow management tool to analyze your cash flows and calculate excess cash, or simply specify an amount of your choosing.",
    },
    {
      id: 4,
      title: "Transfer funds",
      description: "Transfer the cash now and set rules for future automated transfers.",
    },
    {
      id: 5,
      title: "Unlock the returns you deserve",
      description: "Start earning 3.11% APY with your new Robora high-interest savings account.",
    },
  ];

  return (
    <section id="how-it-works" className="relative w-full bg-white overflow-hidden">
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-[#003D7A]" />

      <div className="container mx-auto px-6 md:px-10 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          <div className="py-16 md:py-24 lg:pr-16 xl:pr-24 flex flex-col">
            
            <div className="mb-20 md:mb-24 lg:mb-32">
              <span className="block text-[#9CA3AF] text-xs font-bold tracking-widest mb-4 uppercase">OTHERS</span>
              <h3 className="text-[#2E7FD6] text-xl md:text-2xl font-medium leading-relaxed mb-6">
                Do more of what you enjoy.<br />
                Leave cash management to us.
              </h3>
              
              <h2 className="text-[#003D7A] text-4xl md:text-[44px] lg:text-[52px] font-bold leading-[1.1] mb-10 tracking-tight">
                Robora makes it effortless
              </h2>

              <ul className="flex flex-col gap-4">
                {['KEEP YOUR BANK', 'AUTOMATE YOUR CASH', 'MAXIMIZE YOUR EARNINGS'].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <TriangleIcon />
                    <span className="text-[#003D7A] font-semibold text-sm tracking-widest uppercase mt-px">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-16 md:gap-20">
              {steps.map((step) => (
                <div key={step.id} className="flex flex-col items-start max-w-lg group">
                  <span className="text-[#BFDBFE] font-bold text-[80px] md:text-[100px] leading-[0.8] -ml-1 mb-6 select-none tracking-tighter">
                    {step.id}
                  </span>
                  <h4 className="text-[#003D7A] text-2xl md:text-[28px] font-bold leading-tight mb-4">
                    {step.title}
                  </h4>
                  <p className="text-[#4B5563] text-base md:text-lg leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

          <div className="hidden lg:block w-full h-full min-h-[600px] bg-[#003D7A] lg:bg-transparent">
          </div>
          
          <div className="block lg:hidden w-full h-64 bg-[#003D7A] mt-12 rounded-lg md:rounded-2xl" />

        </div>
      </div>
    </section>
  );
}
