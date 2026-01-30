import { Link } from 'react-router-dom';
import { Train, Bus, Cog, Users, Building2, Award, FileText } from 'lucide-react';
import productBogie from '@/assets/product-bogie.jpg';
import productCoupler from '@/assets/product-coupler.jpg';
import productBrake from '@/assets/product-brake.jpg';
import productSuspension from '@/assets/product-suspension.jpg';
import productBus from '@/assets/product-bus.jpg';

interface MegaMenuProps {
  type: string;
}

const productCategories = [
  {
    name: 'Railway Bogies',
    description: 'Complete bogie assemblies and wheel sets',
    image: productBogie,
    icon: Train,
    items: ['Wheel Sets', 'Axle Boxes', 'Primary Springs', 'Bogie Frames'],
  },
  {
    name: 'Couplers & Draft Gear',
    description: 'High-strength coupling systems',
    image: productCoupler,
    icon: Cog,
    items: ['AAR Couplers', 'Draft Gear', 'Yokes', 'Knuckles'],
  },
  {
    name: 'Bus Components',
    description: 'Heavy-duty commercial vehicle parts',
    image: productBus,
    icon: Bus,
    items: ['Chassis Parts', 'Axle Assemblies', 'Steering Components', 'Body Fittings'],
  },
  {
    name: 'Brake Systems',
    description: 'Precision braking components',
    image: productBrake,
    icon: Cog,
    items: ['Brake Shoes', 'Brake Cylinders', 'Slack Adjusters', 'Control Valves'],
  },
  {
    name: 'Suspension Parts',
    description: 'Advanced suspension solutions',
    image: productSuspension,
    icon: Cog,
    items: ['Coil Springs', 'Dampers', 'Rubber Bushings', 'Anti-roll Bars'],
  },
];

const aboutItems = [
  { name: 'Our Story', href: '/about', icon: Building2, description: 'Learn about our journey' },
  { name: 'Leadership Team', href: '/about#team', icon: Users, description: 'Meet our experts' },
  { name: 'Certifications', href: '/about#certifications', icon: Award, description: 'Quality standards' },
  { name: 'Annual Reports', href: '/about#reports', icon: FileText, description: 'Investor information' },
];

const MegaMenu = ({ type }: MegaMenuProps) => {
  if (type === 'Products') {
    return (
      <div className="fixed left-0 right-0 top-[132px] z-50 opacity-100 visible transition-all duration-300 ease-out">
        <div className="bg-background border-b border-border shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-5 gap-6">
              {productCategories.map((category) => (
                <div key={category.name} className="group">
                  <div className="overflow-hidden rounded-lg mb-4 border border-border/50">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <category.icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-sm text-foreground mb-1 group-hover:text-accent transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        {category.description}
                      </p>
                      <ul className="space-y-1">
                        {category.items.map((item) => (
                          <li key={item}>
                            <Link
                              to={`/products/${item.toLowerCase().replace(/\s+/g, '-')}`}
                              className="text-xs text-muted-foreground hover:text-accent transition-colors"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
              <p className="text-muted-foreground text-sm">
                <span className="text-accent font-semibold">500+</span> components for railway and bus applications
              </p>
              <Link to="/products" className="btn-primary text-sm py-2 px-4">
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'About Us') {
    return (
      <div className="fixed left-0 right-0 top-[132px] z-50 opacity-100 visible transition-all duration-300 ease-out">
        <div className="bg-background border-b border-border shadow-2xl">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-4 gap-6">
              {aboutItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group card-industrial hover:border-accent/50 p-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-sm text-foreground mb-1 group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default MegaMenu;
