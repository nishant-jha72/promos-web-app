import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, ExternalLink, Info } from "lucide-react";

const ServiceCard = ({ service, onNext, onPrev }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!service.link) return;

    if (service.link.startsWith("http")) {
      window.open(service.link, "_blank");
    } else {
      navigate(service.link);
    }
  };

  return (
    <div
      className="group relative w-full max-w-[520px] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-blue-500/20"
    >
      {/* Background Image with Zoom Effect */}
      <div 
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
        style={{
          backgroundImage: `url(${service.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 group-hover:via-black/70 transition-all duration-300" />

      {/* Content Container */}
      <div className="relative z-10 p-8 flex flex-col justify-between text-white min-h-[24rem]">
        
        {/* Top Section: Title & Description */}
        <div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-3xl font-bold font-serif tracking-tight">
              {service.title}
            </h3>
            <div className="p-2 bg-blue-600/20 backdrop-blur-md rounded-full border border-blue-400/30">
              <Info size={18} className="text-blue-400" />
            </div>
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            {service.description}
          </p>

          {/* Process Box (Glassmorphism) */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 transform transition-all group-hover:bg-white/10">
            <strong className="text-blue-400 text-xs uppercase tracking-widest font-bold">
              Execution Strategy
            </strong>
            <p className="mt-2 text-sm text-gray-200 leading-relaxed font-medium">
              {service.process}
            </p>
          </div>
        </div>

        {/* Bottom Section: Action & Navigation */}
        <div className="flex items-center justify-between mt-8">
          {/* CTA Button */}
          <button
            onClick={handleClick}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-sm font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-600/30 active:scale-95"
          >
            Explore Detail
            <ExternalLink size={16} />
          </button>

          {/* Navigation Arrows (Visible on Hover) */}
          <div className="flex gap-3 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
            <button
              onClick={onPrev}
              className="bg-white/10 hover:bg-blue-600 border border-white/20 p-2.5 rounded-full transition-colors backdrop-blur-md"
              aria-label="Previous Service"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={onNext}
              className="bg-white/10 hover:bg-blue-600 border border-white/20 p-2.5 rounded-full transition-colors backdrop-blur-md"
              aria-label="Next Service"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;