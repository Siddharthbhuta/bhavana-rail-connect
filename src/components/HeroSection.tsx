import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/bus-hero-final1.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/30" />
      <div className="absolute inset-y-0 left-0 w-full lg:w-[52%] z-0 bg-gradient-to-r from-primary/70 via-primary/45 to-transparent" />
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_left_top,rgba(255,255,255,0.06),transparent_45%)]" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              <span className="text-accent">Premium Quality</span>
              <br />
              Bus Body & Railway Coach
              <br />
              Components
            </h1>

            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-accent">
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-md border border-white/30 text-white transition-all duration-300 hover:border-accent hover:text-accent">
                About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          <div className="hidden lg:flex justify-end pointer-events-none relative">
            <img
              src={heroImage}
              alt="Bus blueprint"
              className="w-[132%] max-w-none h-auto object-contain opacity-80 -mr-16"
            />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary rounded-tl-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
