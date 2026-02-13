import React from "react";
import { Target, Github, Linkedin, Mail, ArrowUpCircle } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-gray-950 text-gray-400 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Social */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <Target className="text-blue-500" size={28} />
              <span className="font-bold text-2xl tracking-tighter text-white font-serif uppercase">
                Promos
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Bridging the gap between businesses and genuine customers through ethical marketing and data-driven targeting.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-blue-500 transition-colors"><Github size={20} /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
              <a href="mailto:jnishant794@gmail.com" className="hover:text-blue-500 transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/services" className="hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="/blogs" className="hover:text-blue-500 transition-colors">Roadmap</a></li>
              <li><a href="/docs" className="hover:text-blue-500 transition-colors">Documentation</a></li>
              <li><a href="/contact" className="hover:text-blue-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Legal/Resources */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Founder Profile</a></li>
              <li><a href="/github" className="hover:text-blue-500 transition-colors">Github Repo</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter/CTA */}
          <div className="space-y-6">
            <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Back to Top</h4>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-blue-500 hover:text-blue-400 font-bold transition-all group"
            >
              Scroll Up <ArrowUpCircle className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Section: Copyright & Detailed Disclaimer */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col items-center text-center space-y-6">
            
            {/* Disclaimer Box */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 max-w-5xl">
              <p className="text-xs md:text-sm leading-relaxed text-gray-500">
                <span className="text-gray-300 font-semibold block mb-2 uppercase tracking-tighter">Legal Disclaimer & Privacy Notice</span>
                We respect everyone’s privacy and do not intend to harm or misuse any individual’s data or images. 
                All visual assets and content on this website are used for demonstration and promotional purposes only. 
                If you believe any content or image violates your rights or privacy, please reach out via the 
                <a href="/contact" className="text-blue-500 underline mx-1">contact form</a>, and we will take immediate action to address your concerns.
              </p>
            </div>

            {/* Final Copyright */}
            <div className="text-xs uppercase tracking-[0.2em] font-medium text-gray-600">
              © {new Date().getFullYear()} <span className="text-blue-500">Promos Digital</span> • Developed by Nishant Jha
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;