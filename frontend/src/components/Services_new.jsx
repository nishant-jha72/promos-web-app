import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, MessageSquare, Target, BarChart3, Users, Smartphone } from "lucide-react";

const Services_new = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Google Ads Targeting",
      text: "We use intent-based Google Ads to reach users who are actively searching for products or services similar to yours. This ensures higher conversion and lower wastage.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", // Dashboard/Google Ads style
      icon: <Target className="text-blue-600 group-hover:text-white" size={24} />
    },
    {
      title: "Social Media Advertising",
      text: "We promote products on platforms like Facebook by targeting users based on interests, behavior, and engagement patterns to build brand loyalty.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800", // Social Media Icons/Marketing
      icon: <Users className="text-blue-600 group-hover:text-white" size={24} />
    },
    {
      title: "Content Creator Promotion",
      text: "Instead of aggressive ads, we collaborate with suitable content creators who already have trust among their audience for authentic reach.",
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=800", // Influencer/Content creator
      icon: <BarChart3 className="text-blue-600 group-hover:text-white" size={24} />
    },
    {
      title: "App & Niche Platform Ads",
      text: "For specific products, we use niche apps and platforms where the target audience is already present, ensuring highly relevant placements.",
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800", // Mobile App interface
      icon: <Smartphone className="text-blue-600 group-hover:text-white" size={24} />
    }
  ];

  return (
    <main className="pt-16 bg-white font-sans">
      {/* PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
          Our Services & <span className="text-blue-600">How We Work</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          At Promos, we focus on delivering genuine customers by using
          data-driven strategies, targeted platforms, and ethical promotion methods.
        </p>
      </section>

      {/* OVERVIEW */}
      <section className="bg-gray-50 py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Service Overview</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Promos is not a traditional advertising agency. We do not believe in
              pushing ads to random users. Instead, our services are designed to
              connect businesses with people who already show interest in similar
              products or services.
            </p>
          </div>
          <div className="md:w-1/3 bg-blue-600 p-8 rounded-2xl shadow-xl shadow-blue-100 rotate-2">
            <p className="text-white font-medium italic text-xl">
              "We bridge the gap between great products and the right people."
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Services We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <ServiceBlock 
                key={index} 
                title={service.title} 
                text={service.text} 
                image={service.image} 
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE EXECUTE */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">Our Execution Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard step="01" title="Requirement Analysis" text="We analyze the product, audience, and goals before starting any promotion." />
            <StepCard step="02" title="Platform Selection" text="We identify the most effective platforms such as Google, social media, or creators." />
            <StepCard step="03" title="Campaign Planning" text="Campaigns are designed with clear messaging and a focus on genuine interest." />
            <StepCard step="04" title="Launch & Monitoring" text="Promotions are launched and continuously monitored to improve quality." />
            <StepCard step="05" title="Optimization" text="Based on performance data, we refine targeting and creatives to maximize results." />
            <StepCard step="06" title="Result Delivery" text="Businesses receive genuine leads and interested customers instead of traffic." />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE PROMOS & FINAL CTA */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8">Why Choose <span className="text-blue-500">Promos</span></h2>
            <ul className="space-y-5">
              {["Focus on genuine customer intent", "Ethical and transparent promotions", "Platform-specific strategies", "No unnecessary data collection"].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-300">
                  <CheckCircle2 className="text-blue-500 flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 text-center">
            <h3 className="text-2xl font-bold mb-4">Start Growing Your Business</h3>
            <p className="text-gray-400 mb-8">Ready to get real customers? Let's discuss your custom growth strategy.</p>
            <button 
              onClick={() => navigate("/contact")}
              className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-600/30"
            >
              <MessageSquare size={20} />
              Contact Us Now
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

/* ---------- SMALL COMPONENTS ---------- */

const ServiceBlock = ({ title, text, image, icon }) => (
  <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-blue-100 transition-all">
    <div className="h-56 w-full overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-8">
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{text}</p>
    </div>
  </div>
);

const StepCard = ({ step, title, text }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all shadow-sm">
    <span className="text-blue-600 font-bold text-lg mb-2 block">{step}</span>
    <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
    <p className="text-gray-600 leading-relaxed text-sm">{text}</p>
  </div>
);

export default Services_new;