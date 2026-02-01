import { Link } from 'react-router-dom';
import { Train, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroRailway from '@/assets/hero-railway.jpg';

const trainCategories = [
  {
    name: 'Bogie Assemblies',
    slug: 'bogie-assemblies',
    description: 'Complete bogie frames, wheel sets, and axle box assemblies',
  },
  {
    name: 'Coupling Systems',
    slug: 'coupling-systems',
    description: 'AAR couplers, draft gear, yokes, and knuckle assemblies',
  },
  {
    name: 'Brake Systems',
    slug: 'brake-systems',
    description: 'Brake shoes, cylinders, slack adjusters, and control valves',
  },
  {
    name: 'Safety Equipment',
    slug: 'safety-equipment',
    description: 'Emergency systems, signaling components, and safety devices',
  },
  {
    name: 'Specialized Parts and Assemblies',
    slug: 'specialized-parts-and-assemblies',
    description: 'Custom engineered components for specific railway applications',
  },
  {
    name: 'Miscellaneous Components',
    slug: 'miscellaneous-components',
    description: 'Springs and bolts, wear plates, fasteners, gaskets and seals',
  },
];

const TrainProducts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 relative">
        <div className="absolute inset-0">
          <img
            src={heroRailway}
            alt="Train Components"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="container-custom relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center">
              <Train className="w-8 h-8 text-accent-foreground" />
            </div>
            <div>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground">
                Train Components
              </h1>
              <p className="text-muted-foreground mt-2">
                Precision-engineered parts for railway rolling stock
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
            {trainCategories.map((category) => (
              <Link
                key={category.slug}
                to={`/products/train/${category.slug}`}
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

      <Footer />
    </div>
  );
};

export default TrainProducts;