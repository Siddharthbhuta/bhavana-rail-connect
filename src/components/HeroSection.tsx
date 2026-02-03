import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-railway.jpg';

const HeroSection = () => {
  const features = [
    'ISO 9001:2015 Certified',
    'RDSO Approved',
    'Pan-India Delivery',
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-primary">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Railway components manufacturing"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/60" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-white font-medium">India's Trusted Railway & Bus Partner</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              <span className="text-accent">Premium Quality</span>
              <br />
              Railway & Bus
              <br />
              Components
            </h1>

            <p className="text-lg text-white/70 max-w-xl">
              Engineering excellence for Indian Railways, bus manufacturers, and private operators. 
              From bogies to chassis, we deliver precision-manufactured components 
              that meet the highest safety standards.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-accent">
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-md border border-white/30 text-white transition-all duration-300 hover:border-accent hover:text-accent">
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm text-white/70">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary-foreground/10 border border-white/20 rounded-xl p-6 text-center transition-all duration-300 hover:border-accent/50 hover:-translate-y-1">
                <div className="text-4xl font-display font-bold text-accent mb-2">25+</div>
                <p className="text-white/80">Years of Excellence</p>
              </div>
              <div className="bg-primary-foreground/10 border border-white/20 rounded-xl p-6 text-center transition-all duration-300 hover:border-accent/50 hover:-translate-y-1">
                <div className="text-4xl font-display font-bold text-accent mb-2">500+</div>
                <p className="text-white/80">Product Range</p>
              </div>
              <div className="bg-primary-foreground/10 border border-white/20 rounded-xl p-6 text-center transition-all duration-300 hover:border-accent/50 hover:-translate-y-1">
                <div className="text-4xl font-display font-bold text-accent mb-2">50+</div>
                <p className="text-white/80">Railway Clients</p>
              </div>
              <div className="bg-primary-foreground/10 border border-white/20 rounded-xl p-6 text-center transition-all duration-300 hover:border-accent/50 hover:-translate-y-1">
                <div className="text-4xl font-display font-bold text-accent mb-2">99%</div>
                <p className="text-white/80">On-Time Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
