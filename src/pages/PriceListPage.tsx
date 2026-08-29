import svgPaths from "../../imports/svg-o3y9iiahyc";

interface PriceListPageProps {
  onBack: () => void;
}

const heroImageUrl =
  "https://images.unsplash.com/photo-1753285311550-154917dab783?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=800&q=80";

interface PriceItemData {
  label: string;
  price: string;
}

interface CategoryData {
  heading: string;
  items: PriceItemData[];
}

const categories: CategoryData[] = [
  {
    heading: "Gel Polish",
    items: [
      { label: "Classic Gel Manicure", price: "40k" },
      { label: "Classic Gel Pedicure", price: "50k" },
      { label: "Gel Removal (Done elsewhere)", price: "20k" },
    ],
  },
  {
    heading: "Nail Art & Design",
    items: [
      { label: "Simple Design (Per Nail)", price: "10k" },
      { label: "Complex Design (Per Nail)", price: "25k" },
      { label: "Full Set Custom Art", price: "from 120k" },
    ],
  },
  {
    heading: "Extensions & Enhancements",
    items: [
      { label: "Soft Gel Extensions", price: "150k" },
      { label: "Hard Gel Extensions", price: "200k" },
      { label: "Extension Removal", price: "40k" },
    ],
  },
];

const overviewItems = [
  { label: "Gel Polish", from: "from 40k" },
  { label: "Nail Art", from: "from 80k" },
  { label: "Extensions", from: "from 150k" },
];

function PriceItem({ label, price }: PriceItemData) {
  return (
    <div className="flex items-end justify-between w-full gap-4">
      <p
        className="text-[#24181b] text-[16px] leading-6 not-italic"
        style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400 }}
      >
        {label}
      </p>
      <p
        className="text-[#24181b] text-[24px] leading-8 whitespace-nowrap shrink-0"
        style={{ fontFamily: "'Playfair Display:SemiBold', sans-serif", fontWeight: 600 }}
      >
        {price}
      </p>
    </div>
  );
}

function CategorySection({ heading, items }: CategoryData) {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col w-full pb-2 border-b border-[rgba(222,191,195,0.3)]">
        <p
          className="text-[#650029] text-[24px] leading-8"
          style={{ fontFamily: "'Playfair Display:SemiBold', sans-serif", fontWeight: 600 }}
        >
          {heading}
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full">
        {items.map((item) => (
          <PriceItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function PriceListPage({ onBack }: PriceListPageProps) {
  return (
    <div
      className="relative size-full overflow-y-auto"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(255, 248, 247) 0%, rgb(255, 248, 247) 100%)",
      }}
    >
      {/* Sticky header */}
      <div className="sticky top-0 z-10 backdrop-blur-[12px] bg-[rgba(255,248,247,0.7)] flex items-center justify-between px-5 py-4 border-b border-[rgba(222,191,195,0.3)]">
        <button
          onClick={onBack}
          className="cursor-pointer flex items-center justify-center size-8 rounded-full hover:bg-[rgba(222,191,195,0.2)] transition-colors"
          aria-label="Go back"
        >
          <svg fill="none" viewBox="0 0 16 16" width="16" height="16">
            <path d={svgPaths.p300a1100} fill="#650029" />
          </svg>
        </button>
        <p
          className="text-[#650029] text-[24px] leading-8 tracking-[-1.2px] whitespace-nowrap"
          style={{ fontFamily: "'Playfair Display:SemiBold', sans-serif", fontWeight: 600 }}
        >
          Luxury Salon Logo
        </p>
        <div className="w-8" />
      </div>

      {/* Hero */}
      <div className="relative w-full h-[399px] overflow-hidden -mb-12">
        <img src={heroImageUrl} alt="Luxury nail salon" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]" />
        <div className="relative flex items-center justify-center size-full px-5">
          <div className="flex flex-col gap-4 items-center max-w-[672px] w-full">
            <p
              className="text-white text-[48px] leading-[56px] text-center tracking-[-0.96px] whitespace-nowrap drop-shadow-[0px_2px_1px_rgba(0,0,0,0.06),0px_4px_1.5px_rgba(0,0,0,0.07)]"
              style={{ fontFamily: "'Playfair Display:Bold', sans-serif", fontWeight: 700 }}
            >
              Price List
            </p>
            <p
              className="text-[rgba(255,255,255,0.9)] text-[18px] leading-7 text-center drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)]"
              style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400 }}
            >
              Discover our curated selection of luxury nail services.
            </p>
          </div>
        </div>
      </div>

      {/* Content card */}
      <div className="flex flex-col items-center px-5 pb-12">
        <div
          className="backdrop-blur-[12px] bg-[rgba(255,248,247,0.9)] rounded-[12px] p-5 flex flex-col gap-12 w-full max-w-[359px] relative"
          style={{ border: "1px solid rgba(222,191,195,0.2)", boxShadow: "0px -4px 30px 0px rgba(94,8,41,0.08)" }}
        >
          {/* Quick overview */}
          <div className="flex flex-col gap-6 w-full">
            {overviewItems.map((item) => (
              <div
                key={item.label}
                className="bg-[#fff0f1] rounded-[8px] w-full"
                style={{ border: "1px solid rgba(222,191,195,0.3)" }}
              >
                <div className="flex flex-col items-center justify-center p-6">
                  <p
                    className="text-[#574145] text-[12px] leading-4 text-center tracking-[1.2px] not-italic mb-2"
                    style={{ fontFamily: "'Inter:Semi Bold', sans-serif", fontWeight: 600 }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-[#650029] text-[32px] leading-10 text-center whitespace-nowrap"
                    style={{ fontFamily: "'Playfair Display:SemiBold', sans-serif", fontWeight: 600 }}
                  >
                    {item.from}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed breakdown */}
          <div className="flex flex-col gap-16 w-full">
            {categories.map((cat) => (
              <CategorySection key={cat.heading} {...cat} />
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-6 w-full pt-4">
            <p
              className="text-[#574145] text-[16px] leading-6 text-center"
              style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400 }}
            >
              Ready for a touch of luxury?
            </p>
            <a
              href="https://wa.me/"
              className="bg-[#8b0d3d] rounded-full w-full flex items-center justify-center gap-2 px-8 py-4"
            >
              <svg fill="none" viewBox="0 0 15.8333 13.3333" width="15.8333" height="13.3333">
                <path d={svgPaths.pf594000} fill="white" />
              </svg>
              <p
                className="text-white text-[12px] leading-4 tracking-[1.2px] text-center not-italic"
                style={{ fontFamily: "'Inter:Semi Bold', sans-serif", fontWeight: 600 }}
              >
                Book via WhatsApp
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#fff8f7] border-t border-[rgba(222,191,195,0.2)] w-full">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-4 px-5 py-10">
          <p
            className="text-[#650029] text-[32px] leading-10 whitespace-nowrap"
            style={{ fontFamily: "'Playfair Display:SemiBold', sans-serif", fontWeight: 600 }}
          >
            Luxury Salon Logo
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            {["Privacy Policy", "Terms of Service", "Booking Rules"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[#574145] text-[12px] tracking-[1.2px] whitespace-nowrap hover:text-[#650029] transition-colors"
                style={{ fontFamily: "'Inter:Semi Bold', sans-serif", fontWeight: 600 }}
              >
                {link}
              </a>
            ))}
          </div>
          <p
            className="text-[#574145] text-[14px] leading-5 text-center opacity-70"
            style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400 }}
          >
            © 2024 Luxury Nail Boutique. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
