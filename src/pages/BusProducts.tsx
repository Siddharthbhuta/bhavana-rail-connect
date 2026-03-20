import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bus, CheckCircle, Cog, Microscope, X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import productBus from '@/assets/product-bus.jpg';

const busCategories = [
  {
    name: 'ARAI- ICAT APPROVED COMPONENTS.',
    slug: 'arai-icat-approved-components',
    description: 'Components approved by ARAI and ICAT meeting all regulatory standards',
  },
  {
    name: 'SLEEPER COACH COMPONENTS.',
    slug: 'sleeper-coach-components',
    description: 'High-quality components designed for sleeper coach configurations',
  },
  {
    name: 'SEAT PARTS & ASCESSARIES.',
    slug: 'seat-parts-and-ascessaries',
    description: 'Comprehensive seat parts and accessories for passenger comfort',
  },
  {
    name: 'SHOCKUP SIR & GAS SPRINGS.',
    slug: 'shockup-sir-and-gas-springs',
    description: 'Shock absorbers, air suspension, and gas spring components',
  },
  {
    name: 'BUS BODY COMPONENTS',
    slug: 'bus-body-components',
    description: 'Complete range of structural and exterior bus body components',
  },
  {
    name: 'SOCKETS & HANDLES.',
    slug: 'sockets-and-handles',
    description: 'Electrical sockets, grab handles and related fittings',
  },
];

const busPortfolio = [
  {
    title: 'Modern Luxury Bus',
    description: 'Premium intercity transportation with contemporary design',
    image: '/bus-portfolio/modern-luxury-bus.jpg',
  },
  {
    title: 'State Transport Bus',
    description: 'Reliable government transport for mass commuting',
    image: '/bus-portfolio/state-transport-bus.jpg',
  },
  {
    title: 'Private Intercity Bus',
    description: 'Long-distance travel with artistic customization',
    image: '/bus-portfolio/private-intercity-bus.jpg',
  },
  {
    title: 'Government APSRTC Bus',
    description: 'Official transport services for regional operations',
    image: '/bus-portfolio/apsrtc-bus.jpg',
  },
  {
    title: 'Classic Bus Model',
    description: 'Traditional design with proven reliability',
    image: '/bus-portfolio/classic-bus-model.jpg',
  },
  {
    title: 'Kerala State RTC Bus',
    description: 'Regional transport with traditional heritage design',
    image: '/bus-portfolio/kerela-rtc-bus.jpg',
  },
];

const qualitySpecs = [
  {
    title: 'Material Excellence',
    description: 'Premium materials sourced from verified suppliers, tested for quality and durability',
    icon: CheckCircle,
  },
  {
    title: 'Precision Manufacturing',
    description: 'State-of-the-art machinery and skilled technicians ensure perfect dimensions and fit',
    icon: Cog,
  },
  {
    title: 'Rigorous Testing',
    description: 'Every product undergoes comprehensive testing before delivery to ensure reliability',
    icon: Microscope,
  },
];

const araiIcatProducts = [
  { name: 'Driver Door Lock Set', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011008/driver-door-lock-set_ppx0wf.png' },
  { name: 'Volvo Type Mirror Bracket Assembly', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011021/volvo-type-mirror-bracket-assembly_vlkkj7.png' },
  { name: 'USB Charger 2 Port Round', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011041/usb-charger-2-port-round_dklfj1.png' },
  { name: 'Side Marker With RR', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011044/side-marker-with-rr_qe3isx.png' },
  { name: 'Side Markerlamp 3 LED Assembly', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011044/side-marklamp-3-lamp-assembly_r8ome3.png' },
  { name: 'Roof Lamp Assembly', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011043/roof-lamp-assembly_zvvhg3.png' },
  { name: 'Roof Escape Hatch 970 x 535', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011046/roof-escape-hatch-970-x-535_c4vw4u.png' },
  { name: 'Reflex Reflector', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011047/reflex-reflector_zmykp7.png' },
  { name: 'Roof Escape Hatch', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011047/roof-escape-hatch_i9jx70.png' },
  { name: 'Rear Height Marker Lamp Assembly', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011049/rear-height-marker-lamp-assembly_o2xmby.png' },
  { name: 'Mirror With Bracket', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011050/mirror-_with-bracket_cbejvy.png' },
  { name: 'Roof Escape Hatch With Fan Light', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011051/roof-escape-hatch-with-fan-light_z0ojcv.png' },
  { name: 'Number Plate Lamp Assembly', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011051/number-plate-lamp-assembly_aukcto.png' },
  { name: 'Mirror Bracket LH', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011052/mirror-bracket-lh_cctpvz.png' },
  { name: 'Mirror Front Proximity', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011052/mirror-front-proximity_pwxxah.png' },
  { name: 'Mirror Bracket RH', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011052/mirror-bracket-rh_juc5bc.png' },
  { name: 'LED Reverse Lamp 12/24V', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011055/led-reverse-lamp-12-24v_z9enkx.png' },
  { name: 'Step Lamp Assembly 6 LED 12/24V', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011054/step-lamp-assembly-6-led-12-24v_brzkbp.png' },
  { name: 'Marcopolo Mirror With Bracket', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011058/marcopolo-mirror-with-bracket_twaw8k.png' },
  { name: 'LED Direction Indicator', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011057/led-direction-indiacator-proper_toplaq.png' },
  { name: 'Hooter Flasher Assembly 12/24V', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011059/hooter-flasher-assembly-12-24v_y8o1rj.png' },
  { name: 'LED Number Plate', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011059/led-number-plate-proper_mnpznb.png' },
  { name: 'Door Hinges Forgin', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011062/door-hinges-forgin-proper_jk3xvc.png' },
  { name: 'Front Height Marker Lamp', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011061/front-height-marker-lamp-proper_pngibo.png' },
  { name: 'Direction Indicator Assembly', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011063/direction-indicator-assembly-_prop_qiyyud.png' },
  { name: 'Door SS Hinges', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011063/door-ss-hinges-proper_eh8heo.png' },
  { name: 'Bus Hinges Without Handle', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011065/bus-hinges-with-out-handle_lfxyhv.png' },
  { name: 'Bus Sunvisor 2ft 3ft', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011066/bus-sun-visor-2ft-3ft_mxwfru.png' },
  { name: 'Driver Door Lock Ashok Leyland', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011067/driver-door-lock-ashok-leyland-proper_j6b3cu.png' },
  { name: 'Bus Hinges With Handles', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011067/bus-hinges-w-handle_usa1de.png' },
  { name: 'LED Tail Lamp 12/24V', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774011068/led-tail-lamp-12-24v_glk35z.png' },
];

const sleeperCoachProducts = [
  { name: 'PVC Handle 18', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774012461/pvc-handle-18_yjyysk.png' },
  { name: 'Curtain Hook Horizontal Vertical', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774012466/curtain-hook-horizontal-vertical_aetixe.png' },
  { name: 'SS Foldable Bottle Holder', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774012481/ss-foldable-bottle-holder_y27xbr.png' },
];

const seatPartsProducts = [
  { name: 'Foot Rest PVC', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016073/foot-rest-pvc_qn5imi.png' },
  { name: 'ABS Seat Back Cover Diff', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016074/abs-seat-back-cover-diff_jabrsn.png' },
  { name: 'PU Pad Haritha Latest', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016076/pu-pad-haritha-latest_a3pdfa.png' },
  { name: 'PU Pad Maharani 50mm', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016076/pu-pad-maharani-50mm_uxphrf.png' },
  { name: 'Seat Back Handle Different', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016078/seat-back-handle-different_d2rmvd.png' },
  { name: 'Seat Back Handle Texture', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016078/seat-back-handle-texture_emsmxf.png' },
  { name: 'PU Pad Dolphin 40mm', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016079/pu-pad-dolphin-40mm_xz8uar.png' },
  { name: 'Seat Back Handle With Hook', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016082/seat-back-handle-with-hook_dkzyvr.png' },
  { name: 'Seat Gas Spring', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016084/seat-gas-spring_v88gat.png' },
  { name: 'Seat Gas Spring Korean Type', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016082/seat-gas-spring-korean-type_j2xiln.png' },
  { name: 'ABS Seat Side Cover', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016084/abs-seat-side-cover_gux6l8.png' },
  { name: 'Seat Belt Guide PVC', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016087/seat-belt-guide-pvc_dzokqh.png' },
  { name: 'Magazine Pouch PVC', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016087/magezine-pouch-pvc_uguqar.png' },
  { name: 'Seat Belt Rectangle Three Point Universal', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016088/seat-belt-rectangle-thee-point-universal_hooab3.png' },
  { name: 'Seat Side Cover ABS', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016089/seat-side-cover-abs_fe7ltg.png' },
  { name: 'PU Foot Rest', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016090/pu-foot-rest_fa5un0.png' },
  { name: 'Seat Gas Spring TT', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016090/seat-gas-spring-tt_ysiyk1.png' },
  { name: 'Seat Side Cover ABS Diff', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016090/seat-side-cover-abs-diff_l3nsfp.png' },
  { name: 'ABS Seat Back Cover', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016093/abs-seat-back-cover_klnjd0.png' },
  { name: 'Magazine Pouch', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016093/megazine-pouch_nhmy00.png' },
  { name: 'Seat Back Handle', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016094/seat-back_handle_qvzggo.png' },
  { name: 'Arm Rest 75mm PU', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016095/arm-rest-75mm-pu_ij5nhq.png' },
  { name: 'Arm Rest Dolphin 40mm', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016094/arm-rest-dolphin-40mm_zdkuqp.png' },
  { name: 'Arm Rest Maharani 50mm', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016095/arm-rest-maharani-50mm_s6jliw.png' },
  { name: 'Seat Hook', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016097/seat-hook_km5nrf.png' },
  { name: 'Elastic Bottle Holder', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016156/elastic-bottle-holder_etbixy.png' },
];

const shockupGasSpringsProducts = [
  { name: 'Dicky Gas Spring Bolt Type', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774018457/dicky-gas-spring-bolt-type_erg8vp.png' },
  { name: 'Ventilator Gas Spring', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774018439/ventilator-gas-spring_t5uyz7.png' },
  { name: 'Volvo Gas Spring 350-500-700-900n', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774018439/volvo-gas-spring-350-500-700-900n_acrkdz.png' },
  { name: 'Bonnet Gas Spring', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774018438/bonet_gas_spring_twwdkx.png' },
  { name: 'Seat Gas Spring TT', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016090/seat-gas-spring-tt_ysiyk1.png' },
  { name: 'Seat Gas Spring Korean Type', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016082/seat-gas-spring-korean-type_j2xiln.png' },
  { name: 'Seat Gas Spring', image: 'https://res.cloudinary.com/dsue8by5f/image/upload/v1774016084/seat-gas-spring_v88gat.png' },
];

const BusProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; image: string } | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProduct(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const [showAllAraiIcat, setShowAllAraiIcat] = useState(false);
  const [showAllSeatParts, setShowAllSeatParts] = useState(false);
  const [showAllShockupGasSprings, setShowAllShockupGasSprings] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 md:pt-40 pb-12 md:pb-16 relative">
        <div className="absolute inset-0">
          <img
            src={productBus}
            alt="Bus Components"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="container-custom relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center">
              <Bus className="w-8 h-8 text-accent-foreground" />
            </div>
            <div>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground">
                Bus Components
              </h1>
              <p className="text-muted-foreground mt-2">
                Premium quality parts for commercial bus manufacturing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary text-center mb-6">
            Bus Components Overview
          </h2>
          <div className="space-y-6 text-muted-foreground text-center">
            <p className="text-lg leading-relaxed">
              Bhavana Trading Company specializes in manufacturing high-quality bus body components
              that are essential for both new bus manufacturing and maintenance. Our comprehensive
              range includes everything from structural panels to interior fittings, all designed
              to meet international quality standards.
            </p>
            <p className="text-lg leading-relaxed">
              With decades of experience and partnerships with major bus manufacturers, we
              understand the critical requirements of the transportation industry. Each component
              is engineered for durability, safety, and optimal performance in demanding conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <h2 className="font-display font-bold text-2xl text-foreground mb-8">
            Browse Categories
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {busCategories.map((category) => (
              <Link
                key={category.slug}
                to={`/products/bus/${category.slug}`}
                className="group card-industrial p-6 hover:border-accent/50 transition-all duration-300"
              >
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ARAI-ICAT Products Section */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container-custom">
          <div className="mb-8">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Category</span>
            <h2 className="font-display font-bold text-3xl text-primary mt-2 mb-2">
              ARAI-ICAT Approved Components
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Components approved by ARAI and ICAT meeting all regulatory standards
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(showAllAraiIcat ? araiIcatProducts : araiIcatProducts.slice(0, 4)).map((product) => (
              <button
                type="button"
                key={product.image}
                onClick={() => setSelectedProduct(product)}
                className="group bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-accent/50 text-left"
              >
                <div className="h-44 bg-muted/40 overflow-hidden flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.src = '/placeholder.svg';
                      el.onerror = null;
                    }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display font-semibold text-sm text-foreground leading-snug">
                    {product.name}
                  </h4>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAllAraiIcat((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-white transition-all duration-300"
            >
              {showAllAraiIcat ? 'Show Less' : `View All Products (${araiIcatProducts.length})`}
            </button>
          </div>
        </div>
      </section>

      {/* Sleeper Coach Products Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-custom">
          <div className="mb-8">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Category</span>
            <h2 className="font-display font-bold text-3xl text-primary mt-2 mb-2">
              Sleeper Coach Components
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              High-quality components designed for sleeper coach configurations
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sleeperCoachProducts.map((product) => (
              <button
                type="button"
                key={product.image}
                onClick={() => setSelectedProduct(product)}
                className="group bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-accent/50 text-left"
              >
                <div className="h-44 bg-muted/40 overflow-hidden flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.src = '/placeholder.svg';
                      el.onerror = null;
                    }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display font-semibold text-sm text-foreground leading-snug">
                    {product.name}
                  </h4>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Seat Parts Products Section */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container-custom">
          <div className="mb-8">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Category</span>
            <h2 className="font-display font-bold text-3xl text-primary mt-2 mb-2">
              Seat Parts & Accessories
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Comprehensive seat parts and accessories for passenger comfort
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(showAllSeatParts ? seatPartsProducts : seatPartsProducts.slice(0, 4)).map((product) => (
              <button
                type="button"
                key={product.image}
                onClick={() => setSelectedProduct(product)}
                className="group bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-accent/50 text-left"
              >
                <div className="h-44 bg-muted/40 overflow-hidden flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.src = '/placeholder.svg';
                      el.onerror = null;
                    }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display font-semibold text-sm text-foreground leading-snug">
                    {product.name}
                  </h4>
                </div>
              </button>
            ))}
          </div>
          {seatPartsProducts.length > 4 && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setShowAllSeatParts((prev) => !prev)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-white transition-all duration-300"
              >
                {showAllSeatParts ? 'Show Less' : `View All Products (${seatPartsProducts.length})`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Shockup Sir & Gas Springs Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-custom">
          <div className="mb-8">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Category</span>
            <h2 className="font-display font-bold text-3xl text-primary mt-2 mb-2">
              Shockup Sir & Gas Springs
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Shock absorbers, air suspension, and gas spring components
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(showAllShockupGasSprings ? shockupGasSpringsProducts : shockupGasSpringsProducts.slice(0, 4)).map((product) => (
              <button
                type="button"
                key={product.image}
                onClick={() => setSelectedProduct(product)}
                className="group bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-accent/50 text-left"
              >
                <div className="h-44 bg-muted/40 overflow-hidden flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.src = '/placeholder.svg';
                      el.onerror = null;
                    }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display font-semibold text-sm text-foreground leading-snug">
                    {product.name}
                  </h4>
                </div>
              </button>
            ))}
          </div>
          {shockupGasSpringsProducts.length > 4 && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setShowAllShockupGasSprings((prev) => !prev)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-white transition-all duration-300"
              >
                {showAllShockupGasSprings ? 'Show Less' : `View All Products (${shockupGasSpringsProducts.length})`}
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container-custom">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary text-center mb-4">
            Compatible Bus Models
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our components are compatible with major bus manufacturers and models
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-2xl p-6 shadow-sm text-center">
              <h3 className="font-display font-bold text-lg text-primary mb-2">
                Ashok Leyland
              </h3>
               </div>
            <div className="bg-background rounded-2xl p-6 shadow-sm text-center">
              <h3 className="font-display font-bold text-lg text-primary mb-2">
                Tata Motors
              </h3>
              
            </div>
            <div className="bg-background rounded-2xl p-6 shadow-sm text-center">
              <h3 className="font-display font-bold text-lg text-primary mb-2">
                Volvo Eicher
              </h3>
              
            </div>
            <div className="bg-background rounded-2xl p-6 shadow-sm text-center">
              <h3 className="font-display font-bold text-lg text-primary mb-2">
                Other Brands
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Bus Portfolio Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              Our Bus Portfolio
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See examples of various bus models we supply components for
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {busPortfolio.map((bus) => (
              <div
                key={bus.title}
                className="group bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 md:h-56 bg-muted/40 overflow-hidden">
                  <img
                    src={bus.image}
                    alt={bus.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.src = '/placeholder.svg';
                      el.onerror = null;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {bus.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {bus.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Specifications */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              Quality & Specifications
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualitySpecs.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl border border-border p-8 text-center shadow-sm"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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

export default BusProducts;
