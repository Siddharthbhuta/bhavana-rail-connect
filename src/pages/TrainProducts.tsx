import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Train, Award, Star, CheckCircle, Microscope, Wrench, ClipboardCheck, Truck, Headphones, X, Download, Loader2 } from 'lucide-react';
import { generateCatalogPDF } from '@/utils/pdfGenerator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroRailway from '@/assets/RAILWAY-PHOTO.jpg';


const railwayProducts = [
  { name: 'PU Armpad Blue/Green', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774077247/pu-armpad-blue-green_cjeaku.png' },
  { name: 'PU Berth Safety Rail', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774077233/pu-berth-safety-rail_fa2wwp.png' },
  { name: 'Arm Rest LHB', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774077228/arm-rest-lhb_tbqhp6.png' },
  { name: 'Aluminium Snack Table', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774077227/aluminium-snack-table_hy93fb.png' },
  { name: 'Snack Tray Knob', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774149033/snack-tray-knob_vy7gl3.png' },
  { name: 'Seat Levers LH/RH', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774077226/seat-levers-lh-rh_qdc2jb.png' },
  { name: 'Foot Rest', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774077226/foot-rest_drrno4.png' },
  { name: 'PU Foot Rest', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016090/pu-foot-rest_fa5un0.png' },
  { name: 'PVC Foot Rest', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016073/foot-rest-pvc_qn5imi.png' },
  { name: 'Aluminium Side Panel LHB', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774077225/aluminium-side-panel-lhb_ll8mk4.png' },
  { name: 'Seat Lever Small', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774077222/seat-lever-small_gdhs0y.png' },
  { name: 'Horizontal Square Socket Open', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774073693/horizontal-square-socket-open_rfndpg.png' },
  { name: 'PU Pad Dolphin 40mm', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016079/pu-pad-dolphin-40mm_xz8uar.png' },
  { name: 'PU Pad Maharani 50mm', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016076/pu-pad-maharani-50mm_uxphrf.png' },
  { name: 'PU Pad Haritha Latest', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016076/pu-pad-haritha-latest_a3pdfa.png' },
  { name: 'Seat Gas Spring TT', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016090/seat-gas-spring-tt_ysiyk1.png' },
  { name: 'Seat Gas Spring', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016084/seat-gas-spring_v88gat.png' },
  { name: 'Seat Gas Spring Korean Type', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016082/seat-gas-spring-korean-type_j2xiln.png' },
  { name: 'SS Foldable Bottle Holder', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774012481/ss-foldable-bottle-holder_y27xbr.png' },
];

const complianceItems = [
  {
    icon: Award,
    title: 'Railway Board Standards',
    description: 'Full compliance with all RB specifications and guidelines',
  },
  {
    icon: Star,
    title: 'Indian Standards',
    description: 'Adherence to IS codes for manufacturing and testing',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'ISO 9001:2015 certified manufacturing process',
  },
  {
    icon: Microscope,
    title: 'Testing & Certification',
    description: 'Third-party testing and certification of all products',
  },
];

const technicalAdvantages = [
  {
    icon: Wrench,
    title: 'Manufacturing Excellence',
    description: 'State-of-the-art machinery with precision engineering ensures perfect fit and performance. Advanced metallurgical processes guarantee strength and durability.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Verification',
    description: 'Every component undergoes comprehensive testing including dimensional checks, material testing, and functional validation before dispatch.',
  },
  {
    icon: Truck,
    title: 'Timely Delivery',
    description: 'Well-organized production schedules and logistics coordination ensure on-time delivery even for bulk orders and critical shipments.',
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    description: 'Expert technical team available for consultation on specifications, compatibility, and custom solutions for unique requirements.',
  },
];

const TrainProducts = () => {
  const { category: categorySlug } = useParams();
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; image: string } | null>(null);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await generateCatalogPDF('Specialized Coach Components', railwayProducts);
    } catch (error) {
      console.error('Download error:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProduct(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (categorySlug && sectionsRef.current[categorySlug]) {
      setTimeout(() => {
        sectionsRef.current[categorySlug]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [categorySlug]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 md:pt-40 pb-12 md:pb-16 relative">
        <div className="absolute inset-0">
          <img
            src={heroRailway}
            alt="Train Components"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="container-custom relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center">
              <Train className="w-8 h-8 text-accent-foreground" />
            </div>
            <div>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground">
                Train Components
              </h1>
              <p className="text-muted-foreground mt-2">
                Precision-engineered parts for railway rolling stock
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Railway Components Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary text-center mb-8">
            Our Railway Components
          </h2>
          <div className="space-y-6 text-muted-foreground text-center">
            <p className="text-lg leading-relaxed">
              Bhavana Trading Company is a trusted supplier of high-quality railway components to Indian Railways and authorized railway agencies. Our specialized parts are engineered to meet the stringent requirements of railway safety standards and operational demands.
            </p>
            <p className="text-lg leading-relaxed">
              Every railway component undergoes rigorous testing and quality verification to ensure safety, reliability, and longevity in continuous operational environments. We maintain strict adherence to Railway Board specifications and Indian Standards.
            </p>
          </div>
        </div>
      </section>


      {/* Specialized Coach Components Section */}
      <section 
        id="specialized-parts-and-assemblies"
        ref={(el) => (sectionsRef.current['specialized-parts-and-assemblies'] = el)}
        className="py-12 md:py-16 bg-muted/30"
      >
        <div className="container-custom">
          <div className="mb-8">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Catalog</span>
            <h2 className="font-display font-bold text-3xl text-primary mt-2 mb-2">
              Specialized Coach Components
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Precision-engineered interior fittings and assemblies for modern railway coaches
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {(showAllProducts ? railwayProducts : railwayProducts.slice(0, 12)).map((product, index) => (
              <button
                key={index}
                className="group flex flex-col items-center text-center p-3 rounded-lg hover:bg-background transition-colors duration-200"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="w-full h-24 sm:h-32 bg-background rounded-md flex items-center justify-center overflow-hidden border border-border group-hover:border-primary/50 transition-colors">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-[80%] max-h-[80%] object-contain p-2"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.src = '/placeholder.svg';
                      el.onerror = null;
                    }}
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
                  {product.name}
                </p>
              </button>
            ))}
          </div>
          {railwayProducts.length > 12 && (
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => setShowAllProducts((prev) => !prev)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-white transition-all duration-300"
              >
                {showAllProducts ? 'Show Less' : `View All Products (${railwayProducts.length})`}
              </button>
              <button
                type="button"
                onClick={handleDownload}
                disabled={isDownloading}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition-all duration-300 disabled:opacity-50"
              >
                {isDownloading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Download className="w-5 h-5" />
                )}
                Download Catalog
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Industry Standards & Compliance Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container-custom">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary text-center mb-12">
            Industry Standards & Compliance
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceItems.map((item) => (
              <div
                key={item.title}
                className="bg-background rounded-2xl p-6 shadow-sm text-center border-t-4 border-primary/50"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Advantages Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-custom">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary text-center mb-12">
            Technical Advantages
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {technicalAdvantages.map((item) => (
              <div
                key={item.title}
                className="bg-muted/30 rounded-2xl p-6 border-l-4 border-primary/50"
              >
                <div className="flex items-center gap-3 mb-3">
                  <item.icon className="w-6 h-6 text-accent" />
                  <h3 className="font-display font-bold text-lg text-primary">
                    {item.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 p-4 md:p-8 flex items-center justify-center"
          onClick={() => setSelectedProduct(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedProduct.name}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl bg-background p-3 md:p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 z-10 rounded-full bg-background/90 p-2 border border-border hover:bg-muted transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
            <div className="h-[65vh] md:h-[75vh] w-full bg-muted/20 rounded-xl overflow-hidden flex items-center justify-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.src = '/placeholder.svg';
                  el.onerror = null;
                }}
              />
            </div>
            <p className="font-display font-semibold text-base md:text-lg text-foreground mt-4 px-1">
              {selectedProduct.name}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default TrainProducts;
