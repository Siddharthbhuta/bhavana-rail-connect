import { Link } from 'react-router-dom';
import { Train, Bus, Building2, Award } from 'lucide-react';
import busProducts from '@/assets/bus-products.jpg';
import trainProducts from '@/assets/RAILWAY-PHOTO.jpg';

interface MegaMenuProps {
  type: string;
  onMenuEnter?: () => void;
  onMenuLeave?: () => void;
  onClose?: () => void;
}

const busCategories = [
  'ARAI- ICAT APPROVED COMPONENTS.',
  'SLEEPER COACH COMPONENTS.',
  'SEAT PARTS & ASCESSARIES.',
  'SHOCKUP SIR & GAS SPRINGS.',
  'BUS BODY COMPONENTS',
  'SOCKETS & HANDLES.',
];

const trainCategories = [
  'Railway Coach Components',
];

const aboutItems = [
  { name: 'Our Story', href: '/about', hash: '#story', icon: Building2, description: 'Learn about our journey' },
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
        <div className="bg-card border-b border-border shadow-2xl">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bus Body Components Box */}
              <div className="group rounded-xl border border-border overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                <Link to="/products/bus" onClick={onClose} className="block relative h-52 overflow-hidden">
                  <img
                    src={busProducts}
                    alt="Bus Body Components"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <Bus className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-white">
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
                          onClick={onClose}
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

              {/* Railway Components Box */}
              <div className="group rounded-xl border border-border overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                <Link to="/products/train" onClick={onClose} className="block relative h-52 overflow-hidden">
                  <img
                    src={trainProducts}
                    alt="Railway Components"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <Train className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-white">
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
                          onClick={onClose}
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

            <div className="mt-6 pt-4 border-t border-border text-center">
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
    return (
      <div
        className="fixed left-0 right-0 top-[132px] z-[60] opacity-100 visible transition-all duration-300 ease-out pointer-events-auto"
        onMouseEnter={onMenuEnter}
        onMouseLeave={onMenuLeave}
      >
        <div className="bg-card border-b border-border shadow-2xl">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aboutItems.map((item) => (
                <Link
                  key={item.name}
                  to={`${item.href}${item.hash}`}
                  onClick={onClose}
                  className="group bg-card border border-border rounded-xl p-4 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-left block"
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
