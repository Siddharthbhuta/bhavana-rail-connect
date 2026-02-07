import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Railway Bogies', href: '/products/bogie' },
      { name: 'Bus Components', href: '/products/bus' },
      { name: 'Couplers & Draft Gear', href: '/products/couplers' },
      { name: 'Brake Systems', href: '/products/brakes' },
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
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center overflow-hidden">
                <img src={logo} alt="Bhavana Trading Co" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">Bhavana Trading Co</h3>
                <p className="text-xs text-accent">Railway & Bus Components</p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              India's trusted manufacturer of premium railway and bus components. 
              Delivering quality and reliability since 1998.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors group">
                <Facebook className="w-5 h-5 text-white group-hover:text-accent-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors group">
                <Linkedin className="w-5 h-5 text-white group-hover:text-accent-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors group">
                <Twitter className="w-5 h-5 text-white group-hover:text-accent-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors group">
                <Instagram className="w-5 h-5 text-white group-hover:text-accent-foreground" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">8767333312 / 9821295540</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">rksales27@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">DGS Sheetal Regalia,<br />Borivali-East, Mumbai - 400066</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} Bhavana Trading Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
