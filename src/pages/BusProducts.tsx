import { Link } from 'react-router-dom';
import { Bus, ArrowRight } from 'lucide-react';
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

const BusProducts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 relative">
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

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="font-display font-bold text-2xl text-foreground mb-8">
            Browse Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                  View Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Bus Models Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary text-center mb-4">
            Compatible Bus Models
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our components are compatible with major bus manufacturers and models
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-2xl p-6 shadow-sm text-center">
              <h3 className="font-display font-bold text-lg text-primary mb-2">
                Ashok Leyland
              </h3>
              <p className="text-muted-foreground text-sm">
                Comet, Dost, Champ, Commander
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 shadow-sm text-center">
              <h3 className="font-display font-bold text-lg text-primary mb-2">
                Tata Motors
              </h3>
              <p className="text-muted-foreground text-sm">
                ACE, Novus, Sumo, Winger
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 shadow-sm text-center">
              <h3 className="font-display font-bold text-lg text-primary mb-2">
                Volvo Eicher
              </h3>
              <p className="text-muted-foreground text-sm">
                B7R, B9, C95
              </p>
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

      <Footer />
    </div>
  );
};

export default BusProducts;