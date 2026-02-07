import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CertificateCard from '@/components/CertificateCard';
import { 
  Target, 
  Eye, 
  Diamond, 
  Lightbulb, 
  Heart, 
  Users, 
  Handshake, 
  Leaf,
  User
} from 'lucide-react';

// Import certificate images
import cirtJ3214 from '@/assets/certificates/cirt-j3214.jpg';
import cirtJ3215 from '@/assets/certificates/cirt-j3215.jpg';
import isoCertificate from '@/assets/certificates/iso-certificate.jpg';

const About = () => {
  const coreValues = [
    {
      icon: Diamond,
      title: 'Quality First',
      description: 'Every product is manufactured with precision and tested rigorously to ensure superior quality and reliability.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously invest in technology and R&D to develop innovative solutions for our customers.',
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'Customer satisfaction is at the heart of everything we do. We listen, adapt, and deliver accordingly.',
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'We believe in the power of teamwork and collaborative efforts to achieve excellence.',
    },
    {
      icon: Handshake,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our dealings.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We are committed to environmentally responsible practices in all our manufacturing processes.',
    },
  ];

  // Leadership team - Rakesh Mehta and Vipul Mehta
  const leadershipTeam = [
    {
      name: 'Rakesh Mehta',
      position: 'Co-Founder & Director',
      image: null, // Add image: import rakeshImage from '@/assets/rakesh-mehta.jpg' and set here
      bio: 'With over 25 years of experience in the railway and bus components industry, Rakesh leads business development and client relations.',
    },
    {
      name: 'Vipul Mehta',
      position: 'Co-Founder & Director',
      image: null, // Add image: import vipulImage from '@/assets/vipul-mehta.jpg' and set here
      bio: 'Vipul oversees manufacturing operations and quality assurance, ensuring every product meets the highest standards.',
    },
  ];

  // Certificates with actual images
  const certificates = [
    {
      name: 'ISO 9001:2000',
      description: 'Quality Management System Certification by Orion Registrar, Inc., USA',
      image: isoCertificate,
    },
    {
      name: 'CIRT Test Report - J3214',
      description: 'Roof Grab Handle (Revolving Type) - Flammability Test Certification',
      image: cirtJ3214,
    },
    {
      name: 'CIRT Test Report - J3215',
      description: 'First Aid Box - Flammability Test Certification',
      image: cirtJ3215,
    },
  ];


  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        {/* Our Story Section */}
        <section id="story" className="py-16 bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
                Our Story
              </h1>
            </div>
            
            {/* Story Content with placeholder for images/videos */}
            <div className="max-w-4xl mx-auto">
              {/* Placeholder for company photos/videos - uncomment and add when ready */}
              {/* 
              <div className="mb-8 rounded-xl overflow-hidden">
                <img src="/path-to-company-image.jpg" alt="Bhavana Trading Company" className="w-full h-auto" />
              </div>
              */}
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Bhavana Trading Company was founded with a vision to become a leading supplier of high-quality bus body components and railway products. Over the past 26 years, we have consistently delivered excellence through innovation, quality assurance, and customer-centric approach.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Our journey began with a commitment to understanding customer needs and providing tailored solutions. Today, we are proud to serve government agencies, private transport companies, and railway authorities across India. Our success is built on the foundation of trust, reliability, and quality that our customers have come to expect.
                </p>
                <p className="text-lg leading-relaxed">
                  We maintain state-of-the-art manufacturing facilities equipped with modern technology and skilled workforce. Every product undergoes rigorous quality checks to ensure it meets international standards and exceeds customer expectations.
                </p>
              </div>

              {/* Placeholder for additional media - uncomment when ready */}
              {/* 
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden">
                  <img src="/path-to-image1.jpg" alt="Our Facility" className="w-full h-auto" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img src="/path-to-image2.jpg" alt="Our Team" className="w-full h-auto" />
                </div>
              </div>
              */}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Our Mission Card */}
              <div className="bg-card rounded-xl shadow-sm border-t-4 border-t-accent p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To manufacture and supply premium quality bus body and railway components with on-time delivery and competitive pricing. We are committed to maintaining highest quality standards while providing excellent customer service and building long-term partnerships.
                </p>
              </div>

              {/* Our Vision Card */}
              <div className="bg-card rounded-xl shadow-sm border-t-4 border-t-accent p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and preferred supplier of bus and railway components in India. We envision a future where innovation and quality drive our growth, and our products contribute to safer and more efficient transportation across the nation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Our Core Values
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {coreValues.map((value, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl shadow-sm border-t-4 border-t-accent p-6 text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section id="team" className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Meet Our Team
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Leadership Team
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Our experienced leadership team drives innovation and excellence across all operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {leadershipTeam.map((member, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Placeholder for team member photo */}
                  <div className="h-48 bg-muted flex items-center justify-center">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-20 h-20 text-muted-foreground/30" />
                    )}
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium text-sm mb-2">
                      {member.position}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-16 bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Quality Assurance
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Certifications
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Our commitment to quality is backed by internationally recognized certifications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {certificates.map((cert, index) => (
                <CertificateCard
                  key={index}
                  name={cert.name}
                  description={cert.description}
                  image={cert.image}
                />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default About;
