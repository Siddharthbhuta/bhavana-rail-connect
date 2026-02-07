import { CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: 'Durability & Reliability',
    description: 'Our products are engineered for maximum durability and long-term reliability in challenging conditions.',
  },
  {
    title: 'Cost-Effective Solutions',
    description: 'Competitive pricing without compromising on quality or performance standards.',
  },
  {
    title: 'Technical Support',
    description: 'Expert technical guidance and after-sales support for all our products and services.',
  },
  {
    title: 'Customization Available',
    description: 'Flexible manufacturing options to meet specific client requirements and specifications.',
  },
];

const WhyUsSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6 text-foreground">
            Trusted by Railways & Bus Manufacturers
          </h2>
          <p className="text-muted-foreground text-lg">
            With over 25 years of experience in railway and bus component manufacturing, 
            Bhavana Trading Co has established itself as a reliable partner for 
            Indian Railways, bus manufacturers, and private operators.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="bg-card rounded-xl border-l-4 border-l-accent border border-border p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
