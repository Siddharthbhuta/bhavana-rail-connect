import { Link } from 'react-router-dom';
import { Package, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Product data: titles and descriptions from your reference images
const otherProducts = [
  {
    name: 'Axle & Steering Assembly',
    description: 'Precision-engineered steering systems for smooth handling and durability',
    image: '/products/other/axle-steering-assembly.png',
    slug: 'axle-steering-assembly',
  },
  {
    name: 'Door Latches & Hinges',
    description: 'Heavy-duty door mechanisms for secure and reliable operation',
    image: '/products/other/door-latches-hinges.png',
    slug: 'door-latches-hinges',
  },
  {
    name: 'Safety Towing Hooks',
    description: 'Reliable towing equipment meeting safety standards',
    image: '/products/other/safety-towing-hooks.png',
    slug: 'safety-towing-hooks',
  },
  {
    name: 'Interior Lock Mechanisms',
    description: 'Secure locking systems for passenger safety and comfort',
    image: '/products/other/interior-lock-mechanism.png',
    slug: 'interior-lock-mechanism',
  },
  {
    name: 'Reflective Safety Tape',
    description: 'High-visibility tape for night safety and compliance',
    image: '/products/other/reflective-safety-tape.png',
    slug: 'reflective-safety-tape',
  },
  {
    name: 'Metal Bracket Assemblies',
    description: 'Structural components for frame stability and assembly',
    image: '/products/other/metal-bracket-assemblies.png',
    slug: 'metal-bracket-assemblies',
  },
];

const OtherProducts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-16 relative">
        <div className="container-custom relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center">
              <Package className="w-8 h-8 text-accent-foreground" />
            </div>
            <div>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground">
                Other Products
              </h1>
              <p className="text-muted-foreground mt-2">
                Steering, door systems, safety equipment, and structural components
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProducts.map((product) => (
              <div
                key={product.slug}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative h-56 bg-muted/50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.src = '/placeholder.svg';
                      el.onerror = null;
                    }}
                  />
                  <div className="hidden absolute inset-0 flex items-center justify-center bg-muted/80">
                    <Package className="w-16 h-16 text-muted-foreground/50" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Back to Products */}
          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to All Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OtherProducts;
