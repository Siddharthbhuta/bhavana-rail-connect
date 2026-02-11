import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-railway.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-primary">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Railway components manufacturing"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/75 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-primary/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              <span className="text-accent">Premium Quality</span>
              <br />
              Railway & Bus
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

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
