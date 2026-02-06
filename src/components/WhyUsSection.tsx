import { Shield, Award, Truck, Cog } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Every component undergoes rigorous testing to meet RDSO and international quality standards.',
  },
  {
    icon: Award,
    title: 'Certified Excellence',
    description: 'ISO 9001:2015 certified with approvals from major railway authorities across India.',
  },
  {
    icon: Cog,
    title: 'Precision Manufacturing',
    description: 'State-of-the-art CNC machinery and skilled craftsmen ensure micron-level accuracy.',
  },
  {
    icon: Truck,
    title: 'Pan-India Delivery',
    description: 'Reliable logistics network ensuring timely delivery to any location in India.',
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
