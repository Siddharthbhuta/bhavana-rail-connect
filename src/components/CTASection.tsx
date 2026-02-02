import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Ready to Partner with Us?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Whether you need custom components for a new project or spare parts for 
                maintenance, our team is ready to assist. Get in touch for a detailed 
                quote tailored to your requirements.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-accent">
                  Request Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+911234567890" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-md border border-gray-300 text-gray-900 transition-all duration-300 hover:border-accent hover:text-accent">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Right Content - Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+91 123 456 7890</p>
                  <p className="text-gray-600">+91 098 765 4321</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@bhavanatrading.com</p>
                  <p className="text-gray-600">sales@bhavanatrading.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    Industrial Area, Sector 5,<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
