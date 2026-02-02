import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import productBogie from '@/assets/product-bogie.jpg';
import productCoupler from '@/assets/product-coupler.jpg';
import productBrake from '@/assets/product-brake.jpg';
import productBus from '@/assets/product-bus.jpg';

const products = [
  {
    name: 'Railway Bogies',
    description: 'Complete wheel sets, axle boxes, and bogie frame assemblies engineered for heavy-duty railway operations.',
    image: productBogie,
    category: 'Railway',
  },
  {
    name: 'Couplers & Draft Gear',
    description: 'AAR-compliant coupling systems designed for maximum safety and durability.',
    image: productCoupler,
    category: 'Railway',
  },
  {
    name: 'Bus Components',
    description: 'Heavy-duty chassis parts, axle assemblies, and body fittings for commercial buses.',
    image: productBus,
    category: 'Bus',
  },
  {
    name: 'Brake Systems',
    description: 'Precision braking components including shoes, cylinders, and control valves.',
    image: productBrake,
    category: 'Safety Systems',
  },
];

const ProductsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">
            Precision-Engineered Railway & Bus Components
          </h2>
          <p className="text-gray-600 text-lg">
            From locomotive parts to bus chassis, we manufacture a comprehensive range 
            of components meeting RDSO specifications and international standards.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
                  {product.category}
                </span>
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-display font-semibold text-lg mb-2 text-accent">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                >
                  View Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/products" className="btn-accent">
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
