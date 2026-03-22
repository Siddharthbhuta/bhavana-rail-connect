import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import busProducts from '@/assets/bus-products.jpg';
import trainProducts from '@/assets/RAILWAY-PHOTO.jpg';

const busCategories = [
  'ARAI- ICAT APPROVED COMPONENTS.',
  'SLEEPER COACH COMPONENTS.',
  'SEAT PARTS & ASCESSARIES.',
  'SHOCKUP SIR & GAS SPRINGS.',
  'BUS BODY COMPONENTS',
  'SOCKETS & HANDLES.',
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
            Precision-Engineered Bus Body & Railway Coach Components
          </h2>
          <p className="text-muted-foreground text-lg">
            From bus body parts to railway coach components,
            We manufacture components meeting various specifications and standards.
          </p>
        </div>

        {/* Products Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Bus Components Box */}
            <div className="group rounded-xl border border-border overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <div className="border-t-4 border-t-accent" />
              <Link to="/products/bus" className="block p-6 bg-card">
                <img
                  src={busProducts}
                  alt="Bus Components"
                  className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
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
                  className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
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
