import { Link } from 'react-router-dom';
import { Bus, Train, Package, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import busProducts from '@/assets/bus-products.jpg';
import trainProducts from '@/assets/train-products.png';

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 md:pt-40 pb-12 md:pb-16">
        <div className="container-custom">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Our Products
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Premium quality components for railway and bus manufacturing. Browse our extensive catalog of precision-engineered parts.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bus Components */}
            <Link 
              to="/products/bus" 
              className="group relative rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="relative h-64">
                <img
                  src={busProducts}
                  alt="Bus Components"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                    <Bus className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h2 className="font-display font-bold text-2xl text-foreground group-hover:text-accent transition-colors">
                    Bus Components
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Body panels, doors, windows, roof components, seating systems, and interior fixtures for commercial buses.
                </p>
                <div className="flex items-center gap-2 text-accent font-medium">
                  Browse Categories
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Train Components */}
            <Link 
              to="/products/train" 
              className="group relative rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="relative h-64">
                <img
                  src={trainProducts}
                  alt="Train Components"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                    <Train className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h2 className="font-display font-bold text-2xl text-foreground group-hover:text-accent transition-colors">
                    Train Components
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Bogie assemblies, coupling systems, brake systems, safety equipment, and specialized railway parts.
                </p>
                <div className="flex items-center gap-2 text-accent font-medium">
                  Browse Categories
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Other Products */}
            <Link
              to="/products/other"
              className="group relative rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="relative h-64 bg-primary/10 flex items-center justify-center">
                <Package className="w-24 h-24 text-primary/40 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                    <Package className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h2 className="font-display font-bold text-2xl text-foreground group-hover:text-accent transition-colors">
                    Other Products
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Steering assemblies, door latches & hinges, safety towing hooks, lock mechanisms, reflective tape, and bracket assemblies.
                </p>
                <div className="flex items-center gap-2 text-accent font-medium">
                  View All
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
