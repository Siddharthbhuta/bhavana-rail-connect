import { Link } from 'react-router-dom';
import { Train, Facebook, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Bogie Components', href: '/products/bogie' },
      { name: 'Couplers & Draft Gear', href: '/products/couplers' },
      { name: 'Brake Systems', href: '/products/brakes' },
      { name: 'Suspension Parts', href: '/products/suspension' },
      { name: 'All Products', href: '/products' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Certifications', href: '/about#certifications' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Product Catalog', href: '/catalog' },
      { name: 'Technical Specs', href: '/specs' },
      { name: 'Quality Standards', href: '/quality' },
      { name: 'FAQs', href: '/faq' },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                <Train className="w-7 h-7 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground">Bhavana Trading Co</h3>
                <p className="text-xs text-muted-foreground">Premium Railway Components</p>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              India's trusted manufacturer of premium railway and train components. 
              Delivering quality and reliability since 1995.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent transition-colors group">
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent transition-colors group">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent transition-colors group">
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent transition-colors group">
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">+91 123 456 7890</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">info@bhavanatrading.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">Industrial Area, Sector 5,<br />Mumbai, Maharashtra</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Bhavana Trading Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
