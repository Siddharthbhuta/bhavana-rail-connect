import { Building2, Train, Bus, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const clientLogos = [
  { name: 'Client 2', logo: '/clients/client2.jpg' },
  { name: 'Client 3', logo: '/clients/client3.jpg' },
  { name: 'Client 4', logo: '/clients/client4.jpg' },
  { name: 'Client 5', logo: '/clients/client5.jpg' },
  { name: 'Client 6', logo: '/clients/client6.jpg' },
  { name: 'Client 7', logo: '/clients/client7.jpg' },
  { name: 'Client 8', logo: '/clients/client8.jpg' },
  { name: 'Client 9', logo: '/clients/client9.jpg' },
  { name: 'Client 10', logo: '/clients/client10.jpg' },
  { name: 'Client 13', logo: '/clients/client13.JPG' },
];

const clientTypes = [
  {
    title: 'State Transport Corporations',
    description: 'APSRTC, MSRTC, KSRTC, GSRTC, UPSRTC and other regional transport authorities',
    icon: Bus,
    accentClass: 'border-l-red-500 text-red-500',
  },
  {
    title: 'Indian Bus Manufacturers',
    description: 'Leading bus body builders, travel operators and logistics companies',
    icon: Users,
    accentClass: 'border-l-red-500 text-red-500',
  },
  {
    title: 'Municipal Transport',
    description: 'Brihanmumbai electricity and transports undertaking (BEST) and other city-based transport corporations',
    icon: Building2,
    accentClass: 'border-l-red-500 text-red-500',
  },
  {
    title: 'Indian Railways',
    description: 'Railway coach component supplier meeting all specifications and regulatory requirements',
    icon: Train,
    accentClass: 'border-l-red-500 text-red-500',
  },
];

const Clients = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 md:pt-32">
        <section
          className="py-12 md:py-16"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 0.78)), url('/clients/background-clients.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Clients</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
                Trusted by Leading Brands
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                We are proud to serve Government organizations, bus body builders and railway coach workshops.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {clientLogos.map((client) => (
                <div
                  key={client.name}
                  className="bg-card border border-border rounded-xl p-4 min-h-24 flex items-center justify-center hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.src = '/placeholder.svg';
                      el.onerror = null;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 gap-8">
              {clientTypes.map((item) => (
                <div
                  key={item.title}
                  className={`bg-card rounded-2xl border border-border p-8 shadow-sm border-l-4 ${item.accentClass}`}
                >
                  <div className="flex items-center justify-center mb-6">
                    <item.icon className={`w-12 h-12 ${item.accentClass.split(' ')[1]}`} />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground text-center mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Clients;
