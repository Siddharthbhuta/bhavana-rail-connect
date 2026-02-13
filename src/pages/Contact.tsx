import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 md:pt-32">
        <section className="py-12 md:py-16 bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Get In Touch
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
                Contact Us
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                We'd love to hear from you. Reach out to us for any inquiries about our products and services.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Address Card */}
              <div className="bg-card rounded-xl shadow-sm border-t-4 border-t-accent p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">
                  Address
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  BHAVANA TRADING CO.,<br />
                  DGS Sheetal Regalia,<br />
                  Office No - 06 B, 1st Floor,<br />
                  Nensey Colony,<br />
                  Borivali-East,<br />
                  Mumbai - 400066, India
                </p>
              </div>

              {/* Phone Card */}
              <div className="bg-card rounded-xl shadow-sm border-t-4 border-t-accent p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-accent" />
                </div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">
                  Phone
                </h2>
                <div className="text-muted-foreground">
                  <p className="font-semibold text-foreground mb-1">Rakesh Mehta</p>
                  <p className="mb-3">8767333312 / 9821295540</p>
                  <p className="font-semibold text-foreground mb-1">Vipul Mehta</p>
                  <p>9821502275 / 8080502275</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-card rounded-xl shadow-sm border-t-4 border-t-accent p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">
                  Email
                </h2>
                <div className="text-muted-foreground">
                  <a 
                    href="mailto:bhavana.trading@yahoo.com" 
                    className="text-accent hover:underline font-medium"
                  >
                    bhavana.trading@yahoo.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
