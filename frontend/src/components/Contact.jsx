import React from "react";
import { Mail, Phone, MapPin, Send, MessageSquareText } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
  };

  return (
    <section className="relative w-full min-h-screen pt-24 pb-20 overflow-hidden">
      {/* BACKGROUND IMAGE & OVERLAY */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed' // Parallax-like effect
        }}
      >
        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-md">
            <MessageSquareText className="text-blue-400" size={16} />
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Connect With Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-serif">
            Get In <span className="text-blue-500">Touch</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to scale your business? Fill out the form below and let's discuss your custom growth strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: CONTACT INFO */}
          <div className="space-y-10 lg:pr-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-gray-400 text-lg">
                Reach out to us directly or follow our social channels for daily promo insights.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail className="text-blue-400" />, label: "Email", value: "jnishant794@gmail.com", href: "mailto:jnishant794@gmail.com" },
                { icon: <Phone className="text-blue-400" />, label: "Phone", value: "+91 9XXXXXXXXX", href: "tel:+919000000000" },
                { icon: <MapPin className="text-blue-400" />, label: "Location", value: "New Delhi, India", href: "#" },
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  className="flex items-center gap-5 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-blue-500/50 transition-all group"
                >
                  <div className="p-3 bg-white/10 rounded-xl group-hover:bg-blue-600 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-tighter">{item.label}</p>
                    <p className="text-lg font-semibold text-white">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: GLASSMORPHISM CONTACT FORM */}
          <div className="relative">
            <form 
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl space-y-6 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-2 uppercase tracking-wide">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-2 uppercase tracking-wide">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2 uppercase tracking-wide">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your project requirements..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-600/30"
              >
                <Send size={20} />
                Send Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;