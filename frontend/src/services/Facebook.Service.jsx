import React from 'react';
import fbImage from '../assets/facebook_ads.png';
import { Navigate } from 'react-router-dom';
// Object passed from your requirement
const serviceData = {
  title: "Facebook Ads",
  description: "Harness the power of Facebook's vast audience through our proven promotion strategies. We optimize business pages, craft engaging Reels and carousel ads, and deploy precise targeting to demographics, interests, and behaviors for maximum reach and conversions.",
  process: "Page Optimization, Audience Precision, High-Impact Ads, Engagement Boost, Data-Driven Results",
  link: "/contact" // Ensure the image path is correct
};
function handleClick() {
  window.location.href = "/contact";
}
const FacebookAdsPage = () => {
  const processSteps = serviceData.process.split(',').map(step => step.trim());

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              {serviceData.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {serviceData.description}
            </p>
            <a href={serviceData.link} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-blue-200">
              Get Started
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Professional Illustration or Image */}
            <div className="relative w-full max-w-md aspect-square bg-blue-100 rounded-2xl flex items-center justify-center border border-blue-200 overflow-hidden shadow-xl">
               <img src={fbImage} alt="Facebook Ads Illustration" className="w-4/5 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / PROCESS SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900">How We Achieve Your Goals</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group text-center">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-blue-900 text-sm md:text-base px-2">
                  {step}
                </h3>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[1px] bg-blue-100"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS ALIGNMENT SECTION */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Built for Your Requirements</h2>
          <p className="text-slate-600 mb-10 text-lg">
            We don't just "run ads." We build a sales engine tailored to your specific business needs.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              { title: "Targeted Growth", desc: "Reach the exact people looking for your product." },
              { title: "Cost Efficiency", desc: "Maximize your ROI by cutting waste in ad spend." },
              { title: "Brand Authority", desc: "Establish your business as a leader in your niche." },
              { title: "Scalability", desc: "Easily increase results as your business grows." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                <h4 className="font-bold text-blue-700 mb-2">✓ {item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-16 text-center">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">Ready to maximize your reach?</h3>
        <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-3 rounded-lg font-bold transition-all" onClick={handleClick}>
          Schedule a Free Strategy Call
        </button>
      </section>
      
    </div>
  );
};

export default FacebookAdsPage;