import { useEffect, useRef, useState } from 'react';
import { Download, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PdfPageRenderer from '@/components/PdfPageRenderer';

interface CertificateCardProps {
  name: string;
  description: string;
  image: string;
}

const isPdf = (src: string) => src.toLowerCase().endsWith('.pdf');

const downloadFileName = (name: string) =>
  `${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}.pdf`;

const CertificateCard = ({ name, description, image }: CertificateCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const [modalMaxWidth, setModalMaxWidth] = useState(900);
  const pdf = isPdf(image);

  useEffect(() => {
    if (!isModalOpen) return;

    const updateWidth = () => {
      if (modalContentRef.current) {
        setModalMaxWidth(modalContentRef.current.clientWidth - 8);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('resize', updateWidth);
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <>
      <div
        className="bg-card rounded-xl shadow-sm border p-4 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="h-40 bg-muted/30 rounded-lg overflow-hidden mb-4 relative">
          {pdf ? (
            <PdfPageRenderer src={image} maxWidth={360} className="h-full" />
          ) : (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium text-primary bg-white/90 px-3 py-1.5 rounded-full shadow-sm">
              Click to view
            </span>
          </div>
        </div>
        <h3 className="font-display text-lg font-bold text-foreground mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative flex flex-col w-[min(96vw,72rem)] max-h-[96vh] bg-white rounded-xl overflow-hidden shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b shrink-0">
              <h3 className="font-display text-base sm:text-lg font-bold text-foreground truncate">
                {name}
              </h3>
              <div className="flex items-center gap-2 shrink-0">
                {pdf && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={image}
                      download={downloadFileName(name)}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Download className="w-4 h-4 mr-1.5" />
                      Download
                    </a>
                  </Button>
                )}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>
            </div>

            <div
              ref={modalContentRef}
              className="overflow-auto flex-1 p-3 sm:p-5 min-h-0"
            >
              {pdf ? (
                <PdfPageRenderer
                  src={image}
                  maxWidth={modalMaxWidth}
                  className="flex justify-center"
                />
              ) : (
                <img src={image} alt={name} className="w-full h-auto" />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateCard;
