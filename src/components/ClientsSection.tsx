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

const ClientsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Clients</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-4 text-foreground">
            Trusted by Leading Brands
          </h2>
          <p className="text-muted-foreground text-lg">
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
  );
};

export default ClientsSection;
