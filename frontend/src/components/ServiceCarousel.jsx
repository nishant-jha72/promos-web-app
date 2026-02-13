import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Sparkles } from "lucide-react";

const ServiceCarousel = ({ services = [], interval = 4000 }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);
  const timerRef = useRef(null);

  const total = services.length;

  // Responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1280) setVisibleCount(2);
      else setVisibleCount(2); // Can be changed to 3 if you have more services
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));

  // Auto slide logic
  useEffect(() => {
    if (!paused && total > 0) {
      timerRef.current = setInterval(next, interval);
    }
    return () => clearInterval(timerRef.current);
  }, [paused, interval, total]);

  if (total === 0) return null;

  return (
    <section
      className="relative w-full py-20 bg-white overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-blue-600 font-bold tracking-widest uppercase text-xs mb-3">
              <Sparkles size={16} />
              Featured Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 font-serif">
              Our Core <span className="text-blue-600">Services</span>
            </h2>
          </div>
          
          {/* Progress Dots */}
          <div className="flex gap-2 mb-2">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  index === i ? "w-8 bg-blue-600" : "w-2 bg-gray-200"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="flex justify-center gap-8 items-stretch transition-all duration-500 ease-in-out">
            {Array.from({ length: visibleCount }).map((_, i) => {
              const serviceIndex = (index + i) % total;
              return (
                <div 
                  key={`${serviceIndex}-${i}`}
                  className="w-full flex justify-center animate-in fade-in slide-in-from-right-8 duration-700"
                >
                  <ServiceCard
                    service={services[serviceIndex]}
                    onNext={next}
                    onPrev={prev}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <p className="text-center text-gray-400 text-sm mt-8 md:hidden">
          ← Swipe or tap arrows to navigate →
        </p>
      </div>
    </section>
  );
};

export default ServiceCarousel;