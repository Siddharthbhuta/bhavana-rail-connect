import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Building2, 
  Target, 
  Eye, 
  Diamond, 
  Lightbulb, 
  Heart, 
  Users, 
  Handshake, 
  Leaf,
  Award,
  Trophy,
  // Placeholder icons for team members
  User
} from 'lucide-react';

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

  // Placeholder for leadership team - easy to update later
  const leadershipTeam = [
    {
      name: 'Team Member Name',
      position: 'Position Title',
      image: null, // Add image path here later
      bio: 'Brief description about this team member.',
    },
    {
      name: 'Team Member Name',
      position: 'Position Title',
      image: null,
      bio: 'Brief description about this team member.',
    },
    {
      name: 'Team Member Name',
      position: 'Position Title',
      image: null,
      bio: 'Brief description about this team member.',
    },
  ];

  // Placeholder for certificates - easy to update later
  const certificates = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System Certification',
      image: null, // Add certificate image path here
    },
    {
      name: 'Certificate Name',
      description: 'Certificate description',
      image: null,
    },
    {
      name: 'Certificate Name',
      description: 'Certificate description',
      image: null,
    },
  ];

  // Placeholder for achievements - easy to update later
  const achievements = [
    {
      year: '2023',
      title: 'Achievement Title',
      description: 'Description of the achievement.',
    },
    {
      year: '2022',
      title: 'Achievement Title',
      description: 'Description of the achievement.',
    },
    {
      year: '2020',
      title: 'Achievement Title',
      description: 'Description of the achievement.',
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                <div 
                  key={index}
                  className="bg-card rounded-xl shadow-sm border p-6 text-center hover:shadow-md transition-shadow"
                >
                  {/* Placeholder for certificate image */}
                  <div className="h-32 bg-muted/50 rounded-lg flex items-center justify-center mb-4">
                    {cert.image ? (
                      <img 
                        src={cert.image} 
                        alt={cert.name}
                        className="w-full h-full object-contain p-4"
                      />
                    ) : (
                      <Award className="w-16 h-16 text-accent/30" />
                    )}
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Our Milestones
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Achievements
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Key milestones and recognitions that mark our journey of excellence.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow bg-card rounded-xl shadow-sm p-6">
                    <span className="text-accent font-bold text-sm">
                      {achievement.year}
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {achievement.description}
                    </p>
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

export default About;
