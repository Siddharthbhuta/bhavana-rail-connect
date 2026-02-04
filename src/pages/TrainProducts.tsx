import { Link } from 'react-router-dom';
import { Train, ArrowRight, Award, Star, CheckCircle, Microscope, Wrench, ClipboardCheck, Truck, Headphones } from 'lucide-react';
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

const complianceItems = [
  {
    icon: Award,
    title: 'Railway Board Standards',
    description: 'Full compliance with all RB specifications and guidelines',
  },
  {
    icon: Star,
    title: 'Indian Standards',
    description: 'Adherence to IS codes for manufacturing and testing',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'ISO 9001:2015 certified manufacturing process',
  },
  {
    icon: Microscope,
    title: 'Testing & Certification',
    description: 'Third-party testing and certification of all products',
  },
];

const technicalAdvantages = [
  {
    icon: Wrench,
    title: 'Manufacturing Excellence',
    description: 'State-of-the-art machinery with precision engineering ensures perfect fit and performance. Advanced metallurgical processes guarantee strength and durability.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Verification',
    description: 'Every component undergoes comprehensive testing including dimensional checks, material testing, and functional validation before dispatch.',
  },
  {
    icon: Truck,
    title: 'Timely Delivery',
    description: 'Well-organized production schedules and logistics coordination ensure on-time delivery even for bulk orders and critical shipments.',
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    description: 'Expert technical team available for consultation on specifications, compatibility, and custom solutions for unique requirements.',
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

      {/* Our Railway Components Section */}
      <section className="py-16 bg-background">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary text-center mb-8">
            Our Railway Components
          </h2>
          <div className="space-y-6 text-muted-foreground text-center">
            <p className="text-lg leading-relaxed">
              Bhavana Trading Company is a trusted supplier of high-quality railway components to Indian Railways and authorized railway agencies. Our specialized parts are engineered to meet the stringent requirements of railway safety standards and operational demands.
            </p>
            <p className="text-lg leading-relaxed">
              Every railway component undergoes rigorous testing and quality verification to ensure safety, reliability, and longevity in continuous operational environments. We maintain strict adherence to Railway Board specifications and Indian Standards.
            </p>
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

      {/* Industry Standards & Compliance Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary text-center mb-12">
            Industry Standards & Compliance
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceItems.map((item) => (
              <div
                key={item.title}
                className="bg-background rounded-2xl p-6 shadow-sm text-center border-t-4 border-primary/50"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Advantages Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary text-center mb-12">
            Technical Advantages
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalAdvantages.map((item) => (
              <div
                key={item.title}
                className="bg-muted/30 rounded-2xl p-6 border-l-4 border-primary/50"
              >
                <div className="flex items-center gap-3 mb-3">
                  <item.icon className="w-6 h-6 text-accent" />
                  <h3 className="font-display font-bold text-lg text-primary">
                    {item.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">
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

export default TrainProducts;