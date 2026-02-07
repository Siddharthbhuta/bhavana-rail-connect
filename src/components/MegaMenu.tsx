import { Link, useNavigate } from 'react-router-dom';
import { Train, Bus, Users, Building2, Award } from 'lucide-react';
import busProducts from '@/assets/bus-products.jpg';
import trainProducts from '@/assets/train-products.png';

interface MegaMenuProps {
  type: string;
  onMenuEnter?: () => void;
  onMenuLeave?: () => void;
  onClose?: () => void;
}

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

const aboutItems = [
  { name: 'Our Story', href: '/about', hash: '#story', icon: Building2, description: 'Learn about our journey' },
  { name: 'Leadership Team', href: '/about', hash: '#team', icon: Users, description: 'Meet our experts' },
  { name: 'Certifications', href: '/about', hash: '#certifications', icon: Award, description: 'Quality standards' },
];

const MegaMenu = ({ type, onMenuEnter, onMenuLeave, onClose }: MegaMenuProps) => {
  if (type === 'Products') {
    return (
      <div
        className="fixed left-0 right-0 top-[132px] z-[60] opacity-100 visible transition-all duration-300 ease-out pointer-events-auto"
        onMouseEnter={onMenuEnter}
        onMouseLeave={onMenuLeave}
      >
        <div className="bg-white border-b border-gray-200 shadow-2xl">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 gap-8">
              {/* Bus Components Box */}
              <div className="group rounded-xl border border-gray-200 overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                <Link to="/products/bus" onClick={onClose} className="block relative h-40 overflow-hidden">
                  <img
                    src={productBus}
                    alt="Bus Components"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <Bus className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-white">
                      Bus Components
                    </h3>
                  </div>
                </Link>
                <div className="p-4 bg-gray-50">
                  <ul className="space-y-2">
                    {busCategories.map((item) => (
                      <li key={item}>
                        <Link
                          to={`/products/bus/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={onClose}
                          className="text-sm text-gray-600 hover:text-accent transition-colors flex items-center gap-2"
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
              <div className="group rounded-xl border border-gray-200 overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                <Link to="/products/train" onClick={onClose} className="block relative h-40 overflow-hidden">
                  <img
                    src={heroRailway}
                    alt="Train Components"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <Train className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-white">
                      Train Components
                    </h3>
                  </div>
                </Link>
                <div className="p-4 bg-gray-50">
                  <ul className="space-y-2">
                    {trainCategories.map((item) => (
                      <li key={item}>
                        <Link
                          to={`/products/train/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={onClose}
                          className="text-sm text-gray-600 hover:text-accent transition-colors flex items-center gap-2"
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

            <div className="mt-6 pt-4 border-t border-gray-200 text-center">
              <Link to="/products" onClick={onClose} className="btn-accent text-sm py-2 px-6 inline-block">
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'About Us') {
    const handleAboutClick = (item: typeof aboutItems[0]) => {
      onClose?.();
      // Navigate to about page and then scroll to the section
      window.location.href = item.href + item.hash;
    };

    return (
      <div
        className="fixed left-0 right-0 top-[132px] z-[60] opacity-100 visible transition-all duration-300 ease-out pointer-events-auto"
        onMouseEnter={onMenuEnter}
        onMouseLeave={onMenuLeave}
      >
        <div className="bg-card border-b border-border shadow-2xl">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-3 gap-6">
              {aboutItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleAboutClick(item)}
                  className="group bg-card border border-border rounded-xl p-4 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-sm text-foreground mb-1 group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </button>
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
