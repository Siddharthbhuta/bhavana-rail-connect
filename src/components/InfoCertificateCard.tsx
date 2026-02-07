import { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Leaf } from 'lucide-react';

interface InfoItem {
  label: string;
  value: string;
}

interface InfoCertificateCardProps {
  name: string;
  icon: 'shield' | 'leaf';
  items: InfoItem[];
}

const InfoCertificateCard = ({ name, icon, items }: InfoCertificateCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const IconComponent = icon === 'shield' ? Shield : Leaf;

  return (
    <div
      className="bg-card rounded-xl shadow-sm border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-accent/50"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-primary/5 border-b border-border">
        <div className="flex items-center gap-3">
          <IconComponent className="w-5 h-5 text-accent" />
          <h3 className="font-display text-sm font-bold text-foreground uppercase tracking-wide">
            {name}
          </h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        )}
      </div>

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-5 space-y-4">
          {items.map((item, index) => (
            <div key={index}>
              <span className="font-semibold text-foreground">{item.label}:</span>{' '}
              <span className="text-muted-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Collapsed hint */}
      {!isExpanded && (
        <div className="p-4 text-sm text-muted-foreground">
          Click to view details
        </div>
      )}
    </div>
  );
};

export default InfoCertificateCard;
