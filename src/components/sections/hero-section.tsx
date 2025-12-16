import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronsRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#003D7A] to-[#0A5BA8] text-white">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 select-none pointer-events-none z-0 hidden lg:block">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/29262e1d-6af1-47bb-ade3-3c354d057c65-roborafinancial-com/assets/svgs/aFZmk2m18goD2LCFSvzrcPet0gM-2.svg"
          alt=""
          width={291}
          height={455}
          className="opacity-60 mix-blend-screen"
        />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none z-0 hidden lg:block">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/29262e1d-6af1-47bb-ade3-3c354d057c65-roborafinancial-com/assets/svgs/5W1aqDqafcbcrdyzBx6AYKNIsuo-3.svg"
          alt=""
          width={292}
          height={455}
          className="opacity-60 mix-blend-screen"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-32 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 container mx-auto text-center max-w-[1280px]">
        <h1 className="mb-8 font-bold leading-[1.1] tracking-tight text-white text-4xl md:text-5xl lg:text-[56px] max-w-4xl mx-auto">
          Unlock the power of your&nbsp;cash
        </h1>

        <div className="mb-10 inline-flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-sm md:text-base font-semibold tracking-wide uppercase">
          <div className="flex items-center gap-1 text-[#FFC700]">
            <ChevronsRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
            <span className="text-white">EARN</span>
          </div>
          
          <div className="flex items-baseline gap-1">
            <span className="text-[#FFC700] text-xl md:text-2xl font-bold">3.11%</span>
            <span className="text-white relative -top-1 md:-top-2 text-[10px] md:text-xs font-normal opacity-90">APY</span>
          </div>
          
          <span className="hidden md:inline-block text-[#FFC700] mx-1">.</span>
          
          <span className="text-white opacity-95">KEEP YOUR BANK.</span>
          
          <span className="text-white opacity-95">AUTOMATE THE REST.</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full sm:w-auto">
          <Link
            href="#contact"
            className="group flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-transparent border-2 border-white/30 rounded-lg hover:bg-white hover:text-[#003D7A] transition-all duration-300 min-w-[180px]"
          >
            Talk to an Expert
          </Link>
          <Link
            href="#how-it-works"
            className="group flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-[#003D7A] bg-[#FFC700] rounded-lg hover:bg-[#FFB300] hover:-translate-y-0.5 shadow-lg shadow-[#FFC700]/20 transition-all duration-300 min-w-[180px]"
          >
            Learn How it Works
          </Link>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-base md:text-lg text-[#E8F1F8]/90 font-light leading-relaxed">
            Forget cumbersome cash management, start realizing your cash&apos;s hidden potential. Let Robora Financial seamlessly identify excess cash in your existing accounts and transfer it to a safe, high-yielding deposit account.
          </p>
          <p className="text-base md:text-lg text-white/90 font-medium">
            Designed for businesses, simple enough for individuals.
          </p>
        </div>
      </div>
    </section>
  );
}
