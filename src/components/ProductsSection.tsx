import { ArrowRight, Bus, Train, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import busProducts from '@/assets/bus-products.jpg';
import trainProducts from '@/assets/train-products.png';

const busCategories = [
  'Body Panels and Doors',
  'Doors and Windows',
  'Roof Components',
  'Seating Systems',
  'Interior Fixtures',
  'Additional Components',
];

const trainCategories = [
  'Bogie Assemblies',
  'Coupling Systems',
  'Brake Systems',
  'Safety Equipment',
  'Specialized Parts and Assemblies',
  'Miscellaneous Components',
];

const ProductsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6 text-foreground">
            Precision-Engineered Railway & Bus Components
          </h2>
          <p className="text-muted-foreground text-lg">
            From locomotive parts to bus chassis, we manufacture a comprehensive range 
            of components meeting RDSO specifications and international standards.
          </p>
        </div>

        {/* Products Grid - Three Column Layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Bus Components Box */}
            <div className="group rounded-xl border border-border overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <div className="border-t-4 border-t-accent" />
              <Link to="/products/bus" className="block p-6 bg-card">
                <img
                  src={busProducts}
                  alt="Bus Components"
                  className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="mt-4 flex items-center gap-2">
                  <h3 className="font-display font-bold text-xl text-foreground">
                    Bus Body Components
                  </h3>
                </div>
              </Link>
              <div className="p-4 bg-muted/50">
                <ul className="space-y-2">
                  {busCategories.map((item) => (
                    <li key={item}>
                      <Link
                        to={`/products/bus/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Train Components Box */}
            <div className="group rounded-xl border border-border overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <div className="border-t-4 border-t-accent" />
              <Link to="/products/train" className="block p-6 bg-card">
                <img
                  src={trainProducts}
                  alt="Train Components"
                  className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="mt-4 flex items-center gap-2">
                  <h3 className="font-display font-bold text-xl text-foreground">
                    Railway Components
                  </h3>
                </div>
              </Link>
              <div className="p-4 bg-muted/50">
                <ul className="space-y-2">
                  {trainCategories.map((item) => (
                    <li key={item}>
                      <Link
                        to={`/products/train/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Other Products Box */}
            <div className="group rounded-xl border border-border overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <div className="border-t-4 border-t-accent" />
              <Link to="/products/other" className="block p-6 bg-card">
                <div className="w-full h-48 flex items-center justify-center bg-muted/30 rounded-lg">
                  <Package className="w-20 h-20 text-primary/50 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <h3 className="font-display font-bold text-xl text-foreground">
                    Other Products
                  </h3>
                </div>
              </Link>
              <div className="p-4 bg-muted/50">
                <p className="text-sm text-muted-foreground mb-3">
                  Steering, door systems, safety equipment, and more.
                </p>
                <Link
                  to="/products/other"
                  className="text-sm font-medium text-accent hover:underline inline-flex items-center gap-1"
                >
                  View all other products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link to="/products" className="btn-accent">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
