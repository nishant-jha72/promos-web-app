import React from "react";
import heroBg from "../assets/main_background.jpg";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
   const goToProject = () => {
    navigate("/Services");
  };
  return (
    <section
      className="relative w-full min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Subtle Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>

      <div className="relative z-10 w-full px-6 py-12 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: CONTENT CARD (Glassmorphism) */}
          <div className="order-2 lg:order-1 bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl">
            <div className="inline-block px-4 py-1.5 mb-6 bg-blue-600/20 border border-blue-400/30 rounded-full">
              <span className="text-blue-400 text-sm font-bold tracking-wide uppercase">
                Work in progress , Something big is coming!
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Welcome to <span className="text-blue-500">Promos</span>
            </h1>

            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 font-light">
              Gain real customers for your business. Our team is dedicated
              to providing you with customers who are <span className="text-white font-semibold">genuinely interested</span> in your product.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-600/30" onClick={goToProject}>
                Get Started Now <ArrowRight size={20} />
              </button>
              <button className="flex items-center justify-center px-8 py-4 rounded-xl font-bold text-white border border-white/30 hover:bg-white/10 transition-all" onClick={goToProject}>
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT: FEATURE LIST */}
          <div className="order-1 lg:order-2 text-white space-y-8 lg:pl-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                We Build Genuine <br />
                <span className="text-blue-400 underline decoration-2 underline-offset-8">Customer Growth</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Stop wasting budget on bots. We target real humans across premium platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                "Google Ads – Precision Search Targeting",
                "Facebook Ads – Social Engagement",
                "Content Creators – Trusted Influencer Reach",
                "App Placements – Niche Specific Targeting"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-black/20 p-4 rounded-lg border border-white/5 hover:border-blue-500/50 transition-colors group">
                  <CheckCircle2 className="text-blue-500 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Curve/Divider (Optional) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-gray-50"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;