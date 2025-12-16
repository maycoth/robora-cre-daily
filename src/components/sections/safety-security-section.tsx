export default function SafetySecuritySection() {
  return (
    <section className="bg-[#003D7A] text-white py-24 border-t border-white/5">
      <div className="container mx-auto px-10 max-w-[1280px]">
        <div className="mb-20">
          <h4 className="text-white/60 uppercase tracking-wider text-sm font-semibold mb-6">
            Offering Higher Returns
          </h4>
          <h2 className="text-3xl md:text-[44px] font-bold leading-[1.2] text-white">
            Safely &amp; securely through
            <br className="hidden md:block" />
            trusted partners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-12">
          <div className="flex flex-col items-start">
            <div className="h-8 mb-8 flex items-center">
              <div className="flex items-center gap-2">
                <svg
                  className="w-8 h-8 fill-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.8 13.2h-3.6v3.6h3.6v-3.6zm0-7.2h-3.6v3.6h3.6V6zm7.2 7.2h-3.6v3.6h3.6v-3.6zm0-7.2h-3.6v3.6h3.6V6z" />
                </svg>
                <span className="text-2xl font-bold tracking-tight">PLAID</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1 text-white">
                Secure Account Linking
              </h3>
              <p className="text-white/80">
                Powered By{" "}
                <span className="font-bold underline decoration-1 underline-offset-4">
                  Plaid
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="h-8 mb-8 flex items-center">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="text-2xl font-serif font-bold tracking-wide">
                  OMB
                </span>
              </div>
            </div>
            <div>
              <p className="text-[15px] leading-relaxed text-white/90">
                Access millions of dollars in aggregate FDIC insurance through
                our partner bank, OMB Bank, and a large network of other banks.
                FDIC pass-through deposit insurance is subject to regulatory
                requirements.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="h-8 mb-8 flex items-center">
              <div className="flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white transform rotate-90"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span className="text-2xl font-semibold tracking-wide">
                  ALLOY
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1 text-white">
                Seamless Verification and Onboarding
              </h3>
              <p className="text-white/80">
                Powered by{" "}
                <span className="font-bold underline decoration-1 underline-offset-4">
                  Alloy
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/20 text-[10px] md:text-xs leading-5 text-white/50 tracking-normal font-light">
          <p>
            *Your funds are held with FDIC-insured depository institutions, not
            with Robora. Robora is not a bank. We are a financial technology
            company and your &quot;robo&quot; cash advisor empowering the ability to find
            safe, high-yielding returns. Banking services are provided by OMB
            Bank, member FDIC, and OMB Bank will place deposits through
            IntraFi&apos;s ICS service, which is the largest bank network of its
            kind, and subject to the ICS Deposit Placement Agreement. Certain
            conditions must be satisfied for &quot;pass-through&quot; FDIC deposit
            insurance coverage to apply.
          </p>
        </div>
      </div>
    </section>
  );
}
