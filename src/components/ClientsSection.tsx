import { Link } from 'react-router-dom';

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

const ClientsSection = () => {
  const rowOne = clientLogos.filter((_, index) => index % 2 === 0);
  const rowTwo = clientLogos.filter((_, index) => index % 2 !== 0);

  const renderRow = (row: typeof clientLogos, speedClass: string) => (
    <div className="logo-marquee">
      <div className={`logo-track ${speedClass}`}>
        {[...row, ...row].map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="logo-card"
            aria-hidden={index >= row.length}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="logo-image"
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
  );

  return (
    <section
      className="section-padding"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 0.78)), url('/clients/background-clients.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Clients</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-4 text-foreground">
            Trusted by Leading Brands
          </h2>
          <p className="text-muted-foreground text-lg">
            We are proud to serve government organizations, bus body builders and railway coach workshops.
          </p>
        </div>

        <div className="logo-marquee-stack">
          {renderRow(rowOne, 'logo-marquee-right-slow')}
          {renderRow(rowTwo, 'logo-marquee-right')}
        </div>

        <div className="mt-10 text-center">
          <Link to="/clients" className="btn-accent inline-flex items-center justify-center">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
