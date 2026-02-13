import React from "react";
import profile from "../assets/profile.jpeg";
import { BookOpen, User, ShieldCheck, Cpu, ChevronRight, CheckCircle2 } from "lucide-react";

const Docs = () => {
  return (
    <main className="pt-16 bg-white font-sans">
      
      {/* HERO / INTRO */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg mb-6 text-sm font-bold">
                <BookOpen size={18} />
                Knowledge Base
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 font-serif">
                Documentation <br /> & <span className="text-blue-600">Company Overview</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Welcome to the official documentation of <strong>Promos</strong>. 
                Everything you need to know about our mission, our founder, and the technology powering our growth engine.
              </p>
            </div>

            {/* RIGHT - Founder Image with Style */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-full translate-x-3 translate-y-3 -z-10"></div>
                <img
                  src={profile}
                  alt="Nishant Jha - Founder"
                  className="w-56 h-56 rounded-full object-cover shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT THE FOUNDER */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <User className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">About the Founder</h2>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-gray-700 text-xl leading-relaxed max-w-4xl">
                Hi, I’m <span className="text-blue-600 font-bold">Nishant Jha</span>, a software developer and the creator of
                Promos. I built this platform to solve a real problem — helping businesses
                reach customers who are genuinely interested in their products instead of
                wasting money on random promotions.
                <br /><br />
                With a strong background in development and problem-solving, my goal is to
                build reliable, ethical, and transparent digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT WEBSITE & HOW IT WORKS */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Mission Section */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">About Promos</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Promos is a customer acquisition platform designed to help businesses
                find real, interested customers through smart promotions and data-driven content marketing.
              </p>
              <ul className="space-y-4">
                {["Google Ads Targeting", "Social Media Growth", "Creator Collaborations", "Niche App Ads"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-gray-800">
                    <CheckCircle2 className="text-blue-600" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Workflow Section */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-10 text-gray-900">How the Platform Works</h2>
              <div className="space-y-6">
                {[
                  { s: "Step 1", t: "Requirement Collection", d: "Businesses submit their product requirements via our secure contact portal." },
                  { s: "Step 2", t: "Audience Analysis", d: "We analyze the product intent to match it with the most suitable platform." },
                  { s: "Step 3", t: "Campaign Launch", d: "Ads are launched specifically to target users already showing genuine interest." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors group">
                    <div className="h-12 w-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{step.t}</h3>
                      <p className="text-gray-500">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Cpu className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-900 text-center">Technology Stack</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "React.js", status: "Active" },
              { name: "Tailwind CSS", status: "Active" },
              { name: "Appwrite", status: "Upcoming" },
              { name: "Node.js", status: "Future" }
            ].map((tech, i) => (
              <div key={i} className="p-6 border border-gray-100 rounded-2xl text-center hover:bg-blue-50 transition-colors">
                <h4 className="font-bold text-gray-900 mb-2">{tech.name}</h4>
                <span className={`text-xs px-2 py-1 rounded-full font-bold uppercase tracking-tighter ${tech.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                  {tech.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST & PRIVACY */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ShieldCheck className="mx-auto text-blue-500 mb-6" size={48} />
          <h2 className="text-3xl font-bold mb-6">Privacy & Ethical Trust</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We respect user privacy and operate with 100% transparency. 
            No personal data is collected or stored without consent. All visual assets used on this platform 
            are strictly for demonstration of our marketing capabilities.
          </p>
        </div>
      </section>

    </main>
  );
};

export default Docs;