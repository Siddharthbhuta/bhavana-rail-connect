import { useState } from 'react';
import { X } from 'lucide-react';

interface CertificateCardProps {
  name: string;
  description: string;
  image: string;
}

const CertificateCard = ({ name, description, image }: CertificateCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Card with partial view */}
      <div
        className="bg-card rounded-xl shadow-sm border p-4 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Partial certificate preview - clipped */}
        <div className="h-40 bg-muted/30 rounded-lg overflow-hidden mb-4 relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
          {/* Gradient fade at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent" />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium text-primary bg-white/90 px-3 py-1.5 rounded-full shadow-sm">
              Click to view
            </span>
          </div>
        </div>
        <h3 className="font-display text-lg font-bold text-foreground mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm">
          {description}
        </p>
      </div>

      {/* Full-screen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* Full certificate image */}
            <div className="overflow-auto max-h-[90vh]">
              <img
                src={image}
                alt={name}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateCard;
