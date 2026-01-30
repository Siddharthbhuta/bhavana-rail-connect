import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import productBogie from '@/assets/product-bogie.jpg';
import productCoupler from '@/assets/product-coupler.jpg';
import productBrake from '@/assets/product-brake.jpg';
import productSuspension from '@/assets/product-suspension.jpg';

const products = [
  {
    name: 'Bogie Components',
    description: 'Complete wheel sets, axle boxes, and bogie frame assemblies engineered for heavy-duty operations.',
    image: productBogie,
    category: 'Rolling Stock',
  },
  {
    name: 'Couplers & Draft Gear',
    description: 'AAR-compliant coupling systems designed for maximum safety and durability.',
    image: productCoupler,
    category: 'Coupling Systems',
  },
  {
    name: 'Brake Systems',
    description: 'Precision braking components including shoes, cylinders, and control valves.',
    image: productBrake,
    category: 'Safety Systems',
  },
  {
    name: 'Suspension Parts',
    description: 'Advanced suspension solutions for smooth operations and passenger comfort.',
    image: productSuspension,
    category: 'Suspension',
  },
];

const ProductsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
            Precision-Engineered Railway Components
          </h2>
          <p className="text-muted-foreground text-lg">
            From locomotive parts to coach fittings, we manufacture a comprehensive range 
            of railway components meeting RDSO specifications and international standards.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group card-industrial overflow-hidden p-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-medium rounded-full">
                  {product.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/products" className="btn-primary">
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
