import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bus, CheckCircle, Cog, Microscope, X } from 'lucide-react';
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

const busProductSubCategories = [
  {
    title: 'Hinges',
    products: [
      {
        name: 'Door SS Hinges',
        image: '/products/bus products/door-ss-hinges.png',
      },
      {
        name: 'Door Hinges Forgin',
        image: '/products/bus products/door-hinges-forgin.png',
      },
      {
        name: 'Bus Hinges Without Handle',
        image: '/products/bus products/bus-hinges-without-handle.png',
      },
      {
        name: 'Bus Hinges With Handles',
        image: '/products/bus products/bus-hinges-with-handles.png',
      },
    ],
  },
  {
    title: 'Lamp, Indicator and LED',
    products: [
      {
        name: 'Step Lamp Assembly 6 LED 12/24V',
        image: '/products/bus products/step-lamp-assembly-6-led-12-24v.png',
      },
      {
        name: 'Side Markerlamp 3 LED Assembly',
        image: '/products/bus products/side-markerlamp-3-led-assembly.png',
      },
      {
        name: 'Side Marker With RR',
        image: '/products/bus products/side-marker-with-rr.png',
      },
      {
        name: 'Roof Lamp Assembly',
        image: '/products/bus products/roof-lamp-assembly.png',
      },
      {
        name: 'Reflex Reflector',
        image: '/products/bus products/reflex-reflector.png',
      },
      {
        name: 'Rear Height Marker Lamp Assembly',
        image: '/products/bus products/rear-height-marker-lamp-assembly.png',
      },
      {
        name: 'Number Plate Lamp Assembly',
        image: '/products/bus products/number-plate-lamp-assembly.png',
      },
      {
        name: 'LED Tail Lamp 12/24V',
        image: '/products/bus products/led-tail-lamp-12-24v.png',
      },
      {
        name: 'LED Reverse Lamp 12/24V',
        image: '/products/bus products/led-reverse-lamp-12-24v.png',
      },
      {
        name: 'LED Number Plate',
        image: '/products/bus products/led-number-plate.png',
      },
      {
        name: 'LED Direction Indicator',
        image: '/products/bus products/led-direction-indicator.png',
      },
      {
        name: 'Hooter Flasher Assembly 12/24V',
        image: '/products/bus products/hooter-flasher-assembly-12-24v.png',
      },
      {
        name: 'Front Height Marker Lamp',
        image: '/products/bus products/front-height-marker-lamp.png',
      },
      {
        name: 'Direction Indiacator Assembly',
        image: '/products/bus products/direction-indiacator-assembly.png',
      },
    ],
  },
  {
    title: 'Mirror',
    products: [
      {
        name: 'Volvo Type Mirror Bracket Assembly',
        image: '/products/bus products/volvo-type-mirror-bracket-assembly.png',
      },
      {
        name: 'Mirror With Bracket',
        image: '/products/bus products/mirror-with-bracket.png',
      },
      {
        name: 'Mirror Front Proximity',
        image: '/products/bus products/mirror-front-proximity.png',
      },
      {
        name: 'Mirror Bracket RH',
        image: '/products/bus products/mirror-bracket-rh.png',
      },
      {
        name: 'Mirror Bracket LH',
        image: '/products/bus products/mirror-bracket-lh.png',
      },
      {
        name: 'Marcopolo Mirror With Bracket',
        image: '/products/bus products/marcopolo-mirror-with-bracket.png',
      },
    ],
  },
  {
    title: 'Roof',
    products: [
      {
        name: 'Roof Escape Hatch',
        image: '/products/bus products/roof-escape-hatch.png',
      },
      {
        name: 'Roof Escape Hatch With Fan Light',
        image: '/products/bus products/roof-escape-hatch-with-fan-light.png',
      },
      {
        name: 'Roof Escape Hatch 970 x 535',
        image: '/products/bus products/roof-escape-hatch-970-x-535.png',
      },
      {
        name: 'Bus Sunvisor 2ft 3ft',
        image: '/products/bus products/bus-sunvisor-2ft-3ft.png',
      },
    ],
  },
  {
    title: 'Door Locks',
    products: [
      {
        name: 'Driver Door Lock Ashok Leyland',
        image: '/products/bus products/driver-door-lock-ashok-leyland.png',
      },
    ],
  },
  {
    title: 'USB Charger',
    products: [
      {
        name: 'USB Charger 2 Port Round',
        image: '/products/bus products/usb-charger-2-port-round.png',
      },
    ],
  },
];

const BusProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; image: string } | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProduct(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

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

      {/* Product Subcategories Section */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container-custom">
          <h2 className="font-display font-bold text-3xl text-primary mb-4">
            Products
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Explore bus body products grouped by subcategories.
          </p>

          <div className="space-y-12">
            {busProductSubCategories.map((subcategory) => (
              <div key={subcategory.title}>
                <h3 className="font-display font-bold text-2xl text-foreground mb-6">
                  {subcategory.title}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {subcategory.products.map((product) => (
                    <button
                      type="button"
                      key={product.image}
                      onClick={() => setSelectedProduct(product)}
                      className="group bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-accent/50"
                    >
                      <div className="h-44 bg-muted/40 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            const el = e.target as HTMLImageElement;
                            el.src = '/placeholder.svg';
                            el.onerror = null;
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-display font-semibold text-sm text-foreground leading-snug">
                          {product.name}
                        </h4>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
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

      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 p-4 md:p-8 flex items-center justify-center"
          onClick={() => setSelectedProduct(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedProduct.name}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh] rounded-2xl bg-background p-3 md:p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 z-10 rounded-full bg-background/90 p-2 border border-border hover:bg-muted transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
            <div className="h-[65vh] md:h-[75vh] w-full bg-muted/20 rounded-xl overflow-hidden flex items-center justify-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.src = '/placeholder.svg';
                  el.onerror = null;
                }}
              />
            </div>
            <p className="font-display font-semibold text-base md:text-lg text-foreground mt-4 px-1">
              {selectedProduct.name}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default BusProducts;
