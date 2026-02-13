import React from 'react';
import { useNavigate } from 'react-router-dom';
// Importing the image from your assets folder
import appPromotionImg from '../assets/app_ads.png'; 

const AppPromotion = () => {
  const navigate = useNavigate();

  const handleContactRedirect = () => {
    navigate('/contact');
  };

  // Parsing the process string into an array for the UI
  const processSteps = [
    { phase: "Pre-Launch", task: "Market Research & ASO (App Store Optimization)" },
    { phase: "Launch Phase", task: "User Acquisition & Social Media Blitz" },
    { phase: "Post-Launch", task: "Retention, Push Notifications & Updates" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-tr from-blue-50 via-white to-blue-100 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-md mb-6 shadow-md">
              APP GROWTH ENGINE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Promote By Specific Type APPS
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Promoting with apps delivers direct, personalized engagement to users on the go. 
              From boosting visibility for <strong>full-stack development portfolios</strong> to scaling startups, 
              we leverage push notifications and offline access for maximum conversion.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleContactRedirect}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg"
              >
                Launch Your App
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative group">
              {/* Decorative background element */}
              <div className="absolute -inset-4 bg-blue-200/50 rounded-full blur-3xl group-hover:bg-blue-300/50 transition-all"></div>
              <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl border border-blue-50">
                <img 
                  src={appPromotionImg} 
                  alt="App Marketing Strategy" 
                  className="rounded-[2rem] max-w-sm w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE-PHASE PROCESS SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">The App Promotion Lifecycle</h2>
            <div className="h-1.5 w-16 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-8"></div>
            
            {processSteps.map((step, index) => (
              <div key={index} className="relative bg-white p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl transition-all z-10">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold mb-6 shadow-blue-200 shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{step.phase}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.task}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE BENEFITS GRID */}
      <section className="py-20 px-6 bg-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Direct Reach", desc: "Utilize push notifications for instant user alerts." },
              { title: "Offline Access", desc: "Keep users engaged even without an active connection." },
              { title: "Personalized", desc: "Deep-link users to specific content based on behavior." },
              { title: "High Retention", desc: "Focus on keeping users long after the initial download." }
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                <h4 className="font-bold text-blue-600 mb-2">● {benefit.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CONVERSION SECTION */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Want to dominate the App Store?</h2>
          <p className="text-slate-600 mb-10 text-lg leading-relaxed">
            From pre-launch research to long-term user retention, we provide the full-stack marketing strategy your application deserves.
          </p>
          <button 
            onClick={handleContactRedirect}
            className="bg-slate-900 text-white hover:bg-blue-600 px-10 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-blue-200"
          >
            Connect for a Strategy Call
          </button>
        </div>
      </section>

    </div>
  );
};

export default AppPromotion;