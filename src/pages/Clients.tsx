import { Building2, Train, Bus, Factory, Globe, Users, Truck, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const clientLogos = [
  { name: 'Client 1', logo: '/clients/client1.jpg' },
  { name: 'Client 2', logo: '/clients/client2.jpg' },
  { name: 'Client 3', logo: '/clients/client3.jpg' },
  { name: 'Client 4', logo: '/clients/client4.jpg' },
  { name: 'Client 5', logo: '/clients/client5.jpg' },
  { name: 'Client 6', logo: '/clients/client6.jpg' },
  { name: 'Client 7', logo: '/clients/client7.jpg' },
  { name: 'Client 8', logo: '/clients/client8.jpg' },
  { name: 'Client 9', logo: '/clients/client9.jpg' },
  { name: 'Client 10', logo: '/clients/client10.jpg' },
  { name: 'Client 11', logo: '/clients/client11.jpg' },
  { name: 'Client 12', logo: '/clients/client12.jpg' },
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
    title: 'Indian Railways',
    description: 'Railway component supplier meeting all specifications and regulatory requirements',
    icon: Train,
    accentClass: 'border-l-red-500 text-red-500',
  },
  {
    title: 'Municipal Transport',
    description: 'DTC Delhi and other city-based transport corporations',
    icon: Building2,
    accentClass: 'border-l-red-500 text-red-500',
  },
  {
    title: 'Private Enterprises',
    description: 'Tour operators, manufacturers, and logistics companies',
    icon: Users,
    accentClass: 'border-l-red-500 text-red-500',
  },
  {
    title: 'Indian Bus Manufacturers',
    description: 'Components for TATA, ASHOK LEYLAND, MAHINDRA and other major bus builders',
    icon: Factory,
    accentClass: 'border-l-orange-500 text-orange-500',
  },
  {
    title: 'International OEMs',
    description: 'DAIMLER, SCANIA and other global commercial vehicle manufacturers',
    icon: Globe,
    accentClass: 'border-l-orange-500 text-orange-500',
  },
];

const privateEnterprisePartners = [
  {
    title: 'Private Tour Operators',
    description: 'Components for luxury and standard coaches',
    icon: Bus,
  },
  {
    title: 'Manufacturing Units',
    description: 'Parts and materials for automotive industry',
    icon: Factory,
  },
  {
    title: 'Logistics Companies',
    description: 'Supply chain partners and distributors',
    icon: Truck,
  },
];

const feedback = [
  {
    quote:
      '"Bhavana Trading has been a reliable partner for our bus fleet maintenance. Their products are durable and their service is exceptional. Highly recommended!"',
    author: 'Procurement Manager, APSRTC',
  },
  {
    quote:
      '"26 years of consistent quality and service. They understand our needs and deliver exactly what we expect. A trustworthy partner."',
    author: 'Operations Director, Tour Company',
  },
];

const Clients = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 md:pt-32">
        <section className="py-12 md:py-16 bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Clients</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
                Trusted by Leading Brands
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                We are proud to serve reputed organizations across railway and bus industries.
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
                  <p className="text-muted-foreground text-center">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Private Enterprise Partners
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                We serve leading private transport and manufacturing companies across India and abroad.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {privateEnterprisePartners.map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-2xl border border-border p-8 text-center shadow-sm"
                >
                  <div className="flex items-center justify-center mb-5">
                    <item.icon className="w-12 h-12 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Client Feedback
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {feedback.map((item) => (
                <div
                  key={item.author}
                  className="bg-card rounded-2xl border border-border p-8 shadow-sm"
                >
                  <div className="flex gap-1 text-yellow-400 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6">{item.quote}</p>
                  <div className="flex items-center gap-2 text-foreground font-semibold">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    {item.author}
                  </div>
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
