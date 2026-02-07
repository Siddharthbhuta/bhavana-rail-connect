import { CheckCheck, Award, ThumbsUp } from 'lucide-react';

const badges = [
  {
    icon: CheckCheck,
    title: 'CE Marked',
    subtitle: 'European Conformity',
    description: 'Products meet European directives and regulations for safety and performance standards.',
  },
  {
    icon: Award,
    title: 'Quality Award',
    subtitle: 'Industry Recognition',
    description: 'Recipient of multiple quality and excellence awards from industry bodies and associations.',
  },
  {
    icon: ThumbsUp,
    title: 'Verified Supplier',
    subtitle: 'B2B Certification',
    description: 'Verified and approved supplier on national business platforms for transparency and reliability.',
  },
];

const StaticBadgesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="bg-card rounded-xl border-2 border-accent/30 p-6 text-center"
        >
          {/* Icon container */}
          <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
            <badge.icon className="w-12 h-12 text-accent" />
          </div>
          
          {/* Title */}
          <h3 className="font-display text-lg font-bold text-foreground mb-1">
            {badge.title}
          </h3>
          
          {/* Subtitle */}
          <p className="font-semibold text-foreground mb-3">
            {badge.subtitle}
          </p>
          
          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {badge.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StaticBadgesSection;
