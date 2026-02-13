import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
// Importing the image from your assets folder
import googleAdsImg from '../assets/google_ads.png';

const GoogleAdSensePage = () => {
  const navigate = useNavigate();

  const serviceData = {
    title: "Google AdSense & Search Ads",
    description: "Maximize your digital real estate and capture high-intent traffic. We specialize in setting up AdSense for publishers to monetize content and managing Search/Display campaigns that place your brand at the top of Google search results exactly when customers are looking for you.",
    process: "Keyword Research, Ad Placement Strategy, Compelling Copywriting, Bid Optimization, Performance Tracking",
  };

  const processSteps = serviceData.process.split(',').map(step => step.trim());

  // Function to handle the redirect to /contact
  const handleContactRedirect = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <nav className="text-sm text-blue-500 mb-4 font-medium">
              <Link to="/" className="hover:underline">Home</Link> / Services
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {serviceData.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {serviceData.description}
            </p>
            <button 
              onClick={handleContactRedirect}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-md active:scale-95"
            >
              Connect with an Expert
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-video bg-white rounded-2xl flex items-center justify-center border border-blue-100 overflow-hidden shadow-2xl">
               {/* Using your specific image path */}
               <img src={googleAdsImg} alt="Google Ads Strategy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Monetization & Growth Process</h2>
            <p className="text-slate-500 mt-2">Precision-engineered steps to increase your revenue.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="p-6 rounded-xl border border-blue-50 bg-blue-50/30 hover:shadow-md transition-shadow">
                <div className="text-blue-600 font-black text-2xl mb-3">0{index + 1}</div>
                <h3 className="font-bold text-slate-800 leading-snug">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC ADVANTAGE SECTION */}
      <section className="py-20 px-6 bg-slate-900 text-white rounded-3xl mx-4 mb-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Google AdSense & Ads?</h2>
          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="flex gap-4">
              <div className="text-blue-400 text-xl font-bold">●</div>
              <div>
                <h4 className="font-bold text-lg mb-1">Intent-Based Results</h4>
                <p className="text-slate-400 text-sm">Reach users exactly when they are searching for solutions, not just browsing.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-blue-400 text-xl font-bold">●</div>
              <div>
                <h4 className="font-bold text-lg mb-1">Global Network</h4>
                <p className="text-slate-400 text-sm">Leverage millions of websites in the Display Network to scale your visibility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 text-center">
        <div className="bg-blue-50 max-w-3xl mx-auto p-12 rounded-3xl border border-blue-100">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Ready to optimize your ad spend?</h3>
          <p className="text-slate-600 mb-8">Join successful businesses who have scaled their revenue through our data-driven Google strategies.</p>
          <button 
            onClick={handleContactRedirect}
            className="bg-slate-900 text-white px-12 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg"
          >
            Schedule a Free Call
          </button>
        </div>
      </section>
      
    </div>
  );
};

export default GoogleAdSensePage;