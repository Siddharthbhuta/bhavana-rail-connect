import { Link } from 'react-router-dom';
import { Bus, CheckCircle, Cog, Microscope } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import productBus from '@/assets/product-bus.jpg';

const busCategories = [
  {
    name: 'Body Panels and Doors',
    slug: 'body-panels-and-doors',
    description: 'High-quality exterior body panels and door assemblies for buses',
  },
  {
    name: 'Doors and Windows',
    slug: 'doors-and-windows',
    description: 'Durable door systems and window components for passenger comfort',
  },
  {
    name: 'Roof Components',
    slug: 'roof-components',
    description: 'Roof panels, hatches, and ventilation systems',
  },
  {
    name: 'Seating Systems',
    slug: 'seating-systems',
    description: 'Ergonomic passenger and driver seating solutions',
  },
  {
    name: 'Interior Fixtures',
    slug: 'interior-fixtures',
    description: 'Grab rails, luggage racks, and interior fittings',
  },
  {
    name: 'Additional Components',
    slug: 'additional-components',
    description: 'Bumpers, guard rails, mudguards, fenders, step assemblies, weather strips, and custom parts',
  },
];

const busPortfolio = [
  {
    title: 'Modern Luxury Bus',
    description: 'Premium intercity transportation with contemporary design',
    image: '/bus-portfolio/modern-luxury-bus.jpg',
  },
  {
    title: 'State Transport Bus',
    description: 'Reliable government transport for mass commuting',
    image: '/bus-portfolio/state-transport-bus.jpg',
  },
  {
    title: 'Private Intercity Bus',
    description: 'Long-distance travel with artistic customization',
    image: '/bus-portfolio/private-intercity-bus.jpg',
  },
  {
    title: 'Government APSRTC Bus',
    description: 'Official transport services for regional operations',
    image: '/bus-portfolio/apsrtc-bus.jpg',
  },
  {
    title: 'Classic Bus Model',
    description: 'Traditional design with proven reliability',
    image: '/bus-portfolio/classic-bus-model.jpg',
  },
  {
    title: 'Kerala State RTC Bus',
    description: 'Regional transport with traditional heritage design',
    image: '/bus-portfolio/kerela-rtc-bus.jpg',
  },
];

const qualitySpecs = [
  {
    title: 'Material Excellence',
    description: 'Premium materials sourced from verified suppliers, tested for quality and durability',
    icon: CheckCircle,
  },
  {
    title: 'Precision Manufacturing',
    description: 'State-of-the-art machinery and skilled technicians ensure perfect dimensions and fit',
    icon: Cog,
  },
  {
    title: 'Rigorous Testing',
    description: 'Every product undergoes comprehensive testing before delivery to ensure reliability',
    icon: Microscope,
  },
];

const BusProducts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 md:pt-40 pb-12 md:pb-16 relative">
        <div className="absolute inset-0">
          <img
            src={productBus}
            alt="Bus Components"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="container-custom relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center">
              <Bus className="w-8 h-8 text-accent-foreground" />
            </div>
            <div>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground">
                Bus Components
              </h1>
              <p className="text-muted-foreground mt-2">
                Premium quality parts for commercial bus manufacturing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary text-center mb-6">
            Bus Components Overview
          </h2>
          <div className="space-y-6 text-muted-foreground text-center">
            <p className="text-lg leading-relaxed">
              Bhavana Trading Company specializes in manufacturing high-quality bus body components
              that are essential for both new bus manufacturing and maintenance. Our comprehensive
              range includes everything from structural panels to interior fittings, all designed
              to meet international quality standards.
            </p>
            <p className="text-lg leading-relaxed">
              With decades of experience and partnerships with major bus manufacturers, we
              understand the critical requirements of the transportation industry. Each component
              is engineered for durability, safety, and optimal performance in demanding conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <h2 className="font-display font-bold text-2xl text-foreground mb-8">
            Browse Categories
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {busCategories.map((category) => (
              <Link
                key={category.slug}
                to={`/products/bus/${category.slug}`}
                className="group card-industrial p-6 hover:border-accent/50 transition-all duration-300"
              >
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Bus Models Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container-custom">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary text-center mb-4">
            Compatible Bus Models
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our components are compatible with major bus manufacturers and models
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-2xl p-6 shadow-sm text-center">
              <h3 className="font-display font-bold text-lg text-primary mb-2">
                Ashok Leyland
              </h3>
               </div>
            <div className="bg-background rounded-2xl p-6 shadow-sm text-center">
              <h3 className="font-display font-bold text-lg text-primary mb-2">
                Tata Motors
              </h3>
              
            </div>
            <div className="bg-background rounded-2xl p-6 shadow-sm text-center">
              <h3 className="font-display font-bold text-lg text-primary mb-2">
                Volvo Eicher
              </h3>
              
            </div>
            <div className="bg-background rounded-2xl p-6 shadow-sm text-center">
              <h3 className="font-display font-bold text-lg text-primary mb-2">
                Other Brands
              </h3>
              <p className="text-muted-foreground text-sm">
                Mahindra, Isuzu, MAN, Scania
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bus Portfolio Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              Our Bus Portfolio
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See examples of various bus models we supply components for
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {busPortfolio.map((bus) => (
              <div
                key={bus.title}
                className="group bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 md:h-56 bg-muted/40 overflow-hidden">
                  <img
                    src={bus.image}
                    alt={bus.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.src = '/placeholder.svg';
                      el.onerror = null;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {bus.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {bus.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Specifications */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              Quality & Specifications
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualitySpecs.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl border border-border p-8 text-center shadow-sm"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusProducts;
