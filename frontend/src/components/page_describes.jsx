import React from "react";
import logo from "../assets/cust.jpg"; 
import { ArrowRight, HelpCircle, ShieldCheck } from "lucide-react";

const PageDescribes = () => {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-fixed bg-center px-6 py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${logo})`
      }}
    >
      {/* Deep Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 backdrop-blur-[1px]"></div>

      {/* Decorative Border Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center text-white">
        
        {/* WHAT IS PROMOS */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full">
            <HelpCircle size={16} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Our Mission</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-serif">
            What is <span className="text-blue-500">Promos?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We bridge the gap between your brand and your future customers. Through 
            a multi-step strategic funnel, we ensure your product reaches the 
            <span className="text-white font-semibold"> exact audience</span> ready to buy.
          </p>
        </div>

        {/* WHY PROMOS */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full">
            <ShieldCheck size={16} className="text-green-400" />
            <span className="text-green-400 text-xs font-bold uppercase tracking-widest">Your Benefit</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-serif">
            Why <span className="text-blue-500">Promos?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Don't get stuck in the hustle of expensive, ineffective marketing. 
            We handle the heavy lifting at an <span className="text-white font-semibold">unbeatable, affordable price</span>.
          </p>
        </div>

        {/* CTA BUTTON */}
        <div className="pt-4">
          <a
            href="/services"
            className="group relative inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-2xl text-lg font-bold transition-all hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/30 transform hover:-translate-y-1"
          >
            See How We Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Decorative Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
    </section>
  );
};

export default PageDescribes;