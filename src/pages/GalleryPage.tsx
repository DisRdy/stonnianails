import { useState } from "react";
import svgPaths from "../../imports/svg-xuxx4r7zoq";

interface GalleryPageProps {
  onBack: () => void;
}

type Category = "All" | "Gel" | "Nail Art" | "Extensions";

interface GalleryItem {
  id: number;
  title: string;
  subtitle: string;
  categories: Category[];
  imageUrl: string;
  featured?: boolean;
}

const items: GalleryItem[] = [
  {
    id: 1,
    title: "Blossom Sparkle",
    subtitle: "Nail Art • Gel",
    categories: ["Nail Art", "Gel"],
    imageUrl:
      "https://images.unsplash.com/photo-1720343409646-960f6dcccae3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&w=600&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Modern French",
    subtitle: "Extensions",
    categories: ["Extensions"],
    imageUrl:
      "https://images.unsplash.com/photo-1604654894611-6973b376cbde?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=400&q=80",
  },
  {
    id: 3,
    title: "Burgundy Gold",
    subtitle: "Nail Art • Gel",
    categories: ["Nail Art", "Gel"],
    imageUrl:
      "https://images.unsplash.com/photo-1772322586785-3a34772cbc61?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=400&q=80",
  },
  {
    id: 4,
    title: "Minimalist Nude",
    subtitle: "Gel",
    categories: ["Gel"],
    imageUrl:
      "https://images.unsplash.com/photo-1588015810531-dd522c9c8bbb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=400&q=80",
  },
];

const filterCategories: Category[] = ["All", "Gel", "Nail Art", "Extensions"];

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: Category;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-[17px] py-[9px] text-[12px] tracking-[1.2px] transition-colors ${
        active
          ? "bg-[#8b0d3d] text-[#ff95ac] shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
          : "bg-[#fff8f7] text-[#574145] border border-[rgba(222,191,195,0.5)] shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
      }`}
      style={{ fontFamily: "'Inter:Semi Bold', sans-serif", fontWeight: 600 }}
    >
      {label}
    </button>
  );
}

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div className="bg-[#fff8f7] rounded-[12px] shadow-[0px_-4px_20px_0px_rgba(94,8,41,0.08)] w-full overflow-hidden relative group">
      <div className="relative w-full aspect-square">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,248,247,0.9)] via-[rgba(255,248,247,0.2)] to-[rgba(255,248,247,0)] flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <p
            className="text-[#650029] leading-8 mb-1"
            style={{
              fontFamily: item.featured
                ? "'Playfair Display:SemiBold', sans-serif"
                : "'Inter:Semi Bold', sans-serif",
              fontWeight: 600,
              fontSize: item.featured ? "24px" : "16px",
            }}
          >
            {item.title}
          </p>
          <p
            className="text-[#574145] text-[14px] leading-5"
            style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400 }}
          >
            {item.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage({ onBack }: GalleryPageProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = items.filter(
    (item) => activeCategory === "All" || item.categories.includes(activeCategory)
  );

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
            <path d={svgPaths.p300a1100} fill="#574145" />
          </svg>
        </button>
        <p
          className="text-[#650029] text-[24px] leading-8 tracking-[-1.2px] whitespace-nowrap"
          style={{ fontFamily: "'Playfair Display:SemiBold', sans-serif", fontWeight: 600 }}
        >
          Gallery
        </p>
        <div className="w-8" />
      </div>

      {/* Scrollable body */}
      <div className="max-w-[1200px] mx-auto px-5 pt-12 pb-32 flex flex-col gap-6">
        {/* Category filter */}
        <div className="flex gap-[10.7px] items-center justify-center flex-wrap">
          {filterCategories.map((cat) => (
            <FilterChip
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>

        {/* Gallery grid */}
        <div className="flex flex-col gap-6 w-full">
          {filtered.length === 0 ? (
            <p
              className="text-center text-[#574145] py-16"
              style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400 }}
            >
              No items in this category yet.
            </p>
          ) : (
            filtered.map((item) => <GalleryCard key={item.id} item={item} />)
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#fff8f7] border-t border-[rgba(222,191,195,0.2)] w-full">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-4 px-5 py-10">
          <p
            className="text-[#650029] text-[28px] leading-9 tracking-[1.2px] text-center whitespace-nowrap"
            style={{ fontFamily: "'Playfair Display:SemiBold', sans-serif", fontWeight: 600 }}
          >
            Luxury Salon Logo
          </p>
          <div className="flex gap-4 items-center justify-center flex-wrap">
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
