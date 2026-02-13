import React from 'react';
import { useNavigate } from 'react-router-dom';
// Importing the image from your assets folder
import influencerImg from '../assets/influencers_ads.png';

const InfluencerMarketing = () => {
  const navigate = useNavigate();

  const handleContactRedirect = () => {
    navigate('/contact');
  };

  const processSteps = [
    { title: "Influencer Discovery", desc: "Finding the right voices that align with your brand values." },
    { title: "Campaign Strategy", desc: "Crafting unique stories that don't feel like traditional ads." },
    { title: "Niche Outreach", desc: "Connecting with micro and macro influencers in your industry." },
    { title: "Content Management", desc: "Overseeing the creation of Reels, Stories, and Posts." },
    { title: "ROI Tracking", desc: "Measuring engagement, link clicks, and actual conversions." }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
              Social Growth
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
              Instagram Influencer Marketing
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Build trust and bypass the 'ad-blindness' of modern consumers. We connect your brand with creators who hold the keys to engaged communities, driving authentic sales through storytelling.
            </p>
            <button 
              onClick={handleContactRedirect}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-transform hover:-translate-y-1 shadow-lg shadow-blue-200"
            >
              Start Your Campaign
            </button>
          </div>

          <div className="md:w-1/2">
            <div className="relative p-2 bg-white rounded-3xl shadow-2xl border border-blue-50">
               <img 
                 src={influencerImg} 
                 alt="Influencer Marketing Workflow" 
                 className="rounded-2xl w-full h-auto object-cover" 
               />
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW / PROCESS SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900">How We Reach Your Customers</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Our proven workflow ensures your brand message is delivered by the right people, at the right time, to the right audience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-white border-2 border-blue-200 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                  {index + 1}
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY INFLUENCERS? SECTION */}
      <section className="bg-blue-50 py-20 px-6 rounded-[3rem] mx-4 mb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Influencer Marketing works better than cold ads</h2>
            <div className="space-y-4">
              {[
                "90% of consumers trust peer recommendations over brand ads.",
                "Higher engagement rates compared to standard display ads.",
                "Content stays live and continues to drive traffic over time.",
                "Perfect for reaching Gen Z and Millennial demographics."
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-[10px]">✓</span>
                  </div>
                  <p className="text-slate-700 font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-inner border border-blue-100">
             <p className="italic text-slate-500 text-lg">
               "We saw a 40% increase in brand mentions within the first month of launching our creator-led campaign."
             </p>
             <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-200 rounded-full"></div>
                <div>
                  <p className="font-bold text-slate-800">Marketing Director</p>
                  <p className="text-sm text-slate-400">Retail Partner</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Amplify Your Brand?</h2>
        <p className="text-slate-600 mb-10">Let's craft a powerful influencer strategy that actually resonates.</p>
        <button 
          onClick={handleContactRedirect}
          className="bg-slate-900 text-white hover:bg-blue-600 px-12 py-4 rounded-full font-bold transition-all transform hover:scale-105"
        >
          Schedule a Free Consultation
        </button>
      </section>

    </div>
  );
};

export default InfluencerMarketing;