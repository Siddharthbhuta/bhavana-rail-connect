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
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Railway components manufacturing"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/98 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-accent font-medium">India's Trusted Railway & Bus Partner</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient-accent">Premium Quality</span>
              <br />
              Railway & Bus
              <br />
              Components
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Engineering excellence for Indian Railways, bus manufacturers, and private operators. 
              From bogies to chassis, we deliver precision-manufactured components 
              that meet the highest safety standards.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-accent">
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              <div className="card-industrial text-center">
                <div className="text-4xl font-display font-bold text-gradient-accent mb-2">25+</div>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
              <div className="card-industrial text-center">
                <div className="text-4xl font-display font-bold text-gradient-accent mb-2">500+</div>
                <p className="text-muted-foreground">Product Range</p>
              </div>
              <div className="card-industrial text-center">
                <div className="text-4xl font-display font-bold text-gradient-accent mb-2">50+</div>
                <p className="text-muted-foreground">Railway Clients</p>
              </div>
              <div className="card-industrial text-center">
                <div className="text-4xl font-display font-bold text-gradient-accent mb-2">99%</div>
                <p className="text-muted-foreground">On-Time Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
