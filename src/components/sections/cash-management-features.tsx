export default function CashManagementFeatures() {
  return (
    <section className="bg-[#F5F7FA] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-10 max-w-[1280px]">
        <div className="mb-12 md:mb-16">
          <h3 className="text-xs md:text-sm font-semibold tracking-wider text-gray-500 uppercase mb-4">
            A CASH MANAGEMENT SOLUTION FOR ALL
          </h3>
          <h2 className="text-3xl md:text-[44px] leading-[1.2] font-bold text-[#003D7A]">
            Now everyone can earn more with Robora
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#E8F1F8] rounded-2xl p-8 flex flex-col h-full min-h-[400px] relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[#1F2937] mb-4">
                Safely and securely
              </h3>
              <p className="text-[#1F2937] text-base leading-relaxed">
                Access amounts of FDIC insurance well over $250K.
              </p>
            </div>
            
            <div className="mt-auto pt-8 flex items-end justify-center w-full px-2 gap-4">
              <div className="flex flex-col items-start w-24">
                <span className="text-[10px] font-medium text-gray-500 mb-1 leading-tight">Standard FDIC Insurance</span>
                <span className="text-xs font-bold text-gray-700 mb-2">$250K</span>
                <div className="w-full h-12 bg-gray-300 rounded-t-md"></div>
              </div>
              <div className="flex flex-col items-start flex-1">
                <span className="text-[10px] font-medium text-[#003D7A] mb-1 leading-tight">Robora Cash Account</span>
                <span className="text-sm font-bold text-[#FFC700] mb-2">$ Millions</span>
                <div className="w-full h-24 bg-[#003D7A] rounded-t-md relative flex items-center justify-center overflow-hidden">
                   <div className="absolute inset-0 bg-[#003D7A]"></div>
                   <div className="absolute top-0 left-0 w-full h-1 bg-[#2E7FD6]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#E8F1F8] rounded-2xl p-8 flex flex-col h-full min-h-[400px] relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
             <div className="relative z-10 mb-8">
              <h3 className="text-2xl font-bold text-[#1F2937] mb-4">
                Without worrying about missing payments
              </h3>
              <p className="text-[#1F2937] text-base leading-relaxed">
                Automated cash transfers to ensure adequate primary account balances while also maximizing returns.
              </p>
            </div>

            <div className="mt-auto relative w-full h-32">
                <div className="absolute top-0 left-0 bg-[#003D7A] text-white p-3 rounded-lg shadow-md w-4/5 z-0 transform translate-y-2 opacity-90 scale-95 origin-bottom-left">
                   <div className="h-2 w-20 bg-white/20 rounded mb-2"></div>
                   <div className="h-2 w-32 bg-white/20 rounded"></div>
                </div>
                <div className="absolute bottom-0 right-0 bg-[#0A5BA8] text-white p-4 rounded-xl shadow-lg w-4/5 z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                         <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                         </div>
                         <span className="font-bold text-lg">Robora</span>
                    </div>
                </div>
                <svg className="absolute top-8 right-16 w-12 h-12 text-[#10B981] z-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4v5a4 4 0 0 0 4 4h8"/>
                    <path d="m13 10 3 3-3 3"/>
                </svg>
            </div>
          </div>

          <div className="bg-[#E8F1F8] rounded-2xl p-8 flex flex-col h-full min-h-[400px] relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            <div className="relative z-10 mb-8">
              <h3 className="text-2xl font-bold text-[#1F2937] mb-4">
                With built-in cash optimization
              </h3>
              <p className="text-[#1F2937] text-base leading-relaxed">
                Use Robora&apos;s proprietary tools to identify excess cash hidden in your primary account.
              </p>
            </div>

            <div className="mt-auto bg-[#003D7A] rounded-xl p-5 shadow-lg w-full text-white">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium">Identified excess cash</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-300"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 border border-white/50 rounded flex items-center justify-center"><div className="w-2 h-2 bg-blue-400 rounded-sm"></div></div>
                    <span className="text-xs text-blue-200">Excess Cash</span>
                </div>
                <div className="relative h-2 bg-white/10 rounded-full mt-4">
                    <div className="absolute left-1/4 right-1/4 h-full bg-[#2E7FD6] rounded-full"></div>
                    <div className="absolute left-1/4 -mt-1 w-0.5 h-4 bg-white/30"></div>
                    <div className="absolute right-1/4 -mt-1 w-0.5 h-4 bg-white/30"></div>
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-blue-300">
                    <span>Lower Limit</span>
                    <span>Target</span>
                    <span>Upper Limit</span>
                </div>
            </div>
          </div>

          <div className="bg-[#E8F1F8] rounded-2xl p-8 flex flex-col h-full min-h-[400px] relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            <div className="relative z-10 mb-8">
              <h3 className="text-2xl font-bold text-[#1F2937] mb-4">
                With experts on your side
              </h3>
              <p className="text-[#1F2937] text-base leading-relaxed">
                Save time with industry-leading experts who find and implement market-leading solutions for you.
              </p>
            </div>

            <div className="mt-auto bg-white rounded-xl p-5 shadow-sm w-full border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-[#FFC700] rounded-full"></div>
                    <span className="font-bold text-[#003D7A]">Robora</span>
                </div>
                <div className="space-y-3">
                    {[
                        "Building bank partnerships",
                        "Creating innovative tools",
                        "Decades of experience"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full bg-[#10B981] flex items-center justify-center shrink-0">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <span className="text-xs text-gray-600 font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>

          <div className="bg-[#E8F1F8] rounded-2xl p-8 flex flex-col h-full min-h-[400px] relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
             <div className="relative z-10 mb-8">
              <h3 className="text-2xl font-bold text-[#1F2937] mb-4">
                With 10x interest rates
              </h3>
              <p className="text-[#1F2937] text-base leading-relaxed">
                With Robora, achieve industry-leading interest rates while still enjoying anytime access.
              </p>
            </div>

            <div className="mt-auto bg-[#003D7A] rounded-xl p-5 shadow-lg w-full text-white">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 bg-[#FFC700] rounded-full"></div>
                    <span className="font-bold">Robora</span>
                </div>
                <div className="space-y-4">
                    <div>
                        <div className="h-6 w-full bg-[#FFC700] rounded mb-1"></div>
                    </div>
                    <div>
                        <div className="text-[10px] text-blue-200 mb-1">National Average Rate</div>
                        <div className="h-6 w-12 bg-[#2E7FD6] rounded"></div>
                    </div>
                </div>
            </div>
          </div>

          <div className="bg-[#003D7A] rounded-2xl p-8 flex flex-col h-full min-h-[400px] relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            <div className="relative z-10 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Without changing your bank
              </h3>
              <p className="text-white/80 text-base leading-relaxed">
                You&apos;ve spent time setting up your own checking account and its recurring payments. Leave these alone and let Robora do the rest.
              </p>
            </div>

            <div className="mt-auto bg-[#F5F7FA] rounded-xl p-5 shadow w-full">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#FFC700] rounded-full"></div>
                        <span className="font-bold text-[#003D7A]">Robora</span>
                    </div>
                    <div className="flex items-center justify-center">
                         <span className="text-[10px] text-[#003D7A] border border-[#003D7A] px-2 py-0.5 rounded-full">+ Link more accounts</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="bg-[#E8F1F8] p-3 rounded-lg flex justify-between items-center">
                        <span className="text-xs text-[#003D7A] font-medium">JPM Checking Account</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#003D7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                    </div>
                    <div className="bg-[#E8F1F8] p-3 rounded-lg flex justify-between items-center">
                        <span className="text-xs text-[#003D7A] font-medium">BAC Checking Account</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#003D7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
