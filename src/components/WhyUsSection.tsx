import { Shield, Award, Truck, Users, Cog, Clock } from 'lucide-react';

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
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated technical team providing end-to-end support from selection to installation.',
  },
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'Efficient production processes enabling faster delivery without compromising quality.',
  },
];

const WhyUsSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">
              Trusted by Railways & Bus Manufacturers
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              With over 25 years of experience in railway and bus component manufacturing, 
              Bhavana Trading Co has established itself as a reliable partner for 
              Indian Railways, bus manufacturers, and private operators.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.slice(0, 4).map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Large Feature Cards */}
          <div className="space-y-6">
            {features.slice(4).map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl border border-gray-200 p-6 flex gap-6 items-start transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-accent">1000+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-accent">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-accent">24/7</div>
                <div className="text-sm text-gray-600">Technical Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
