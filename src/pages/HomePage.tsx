import svgPaths from "../../imports/svg-944hbp6db5";
import logoImg from "./img/StonniaNails.png";

interface HomePageProps {
  onNavigate: (page: "pricelist") => void;
}

function LogoMark() {
  return (
    <img src={logoImg} alt="Stonnia Nails" className="size-full object-cover" />
  );
}

function HeaderBar() {
  return (
    <div
      className="absolute left-0 right-0 top-0 shadow-[0px_20px_30px_0px_rgba(94,8,41,0.08)]"
      style={{ background: "rgba(255,255,255,0)" }}
    >
      <div className="max-w-[600px] mx-auto flex items-center px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full overflow-hidden shrink-0">
            <LogoMark />
          </div>
          <span
            className="text-[#650029] text-[24px] tracking-[-0.6px] leading-8 whitespace-nowrap"
            style={{ fontFamily: "'Playfair Display:SemiBold', sans-serif", fontWeight: 600 }}
          >
            STONNIANAILS
          </span>
        </div>
      </div>
    </div>
  );
}

function ProfileAvatar() {
  return (
    <div className="shrink-0 flex flex-col items-start pb-2">
      <div className="relative size-24 rounded-full shrink-0" style={{ background: "rgba(255,255,255,0)" }}>
        <div className="absolute inset-1 rounded-full overflow-hidden">
          <img
            src={logoImg}
            alt="Stonnia Nails profile"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            border: "4px solid #ffe9eb",
            boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)",
          }}
        />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-4 pt-6 w-full">
      <ProfileAvatar />
      <div className="flex flex-col gap-2 items-start w-full">
        <div className="flex items-center justify-center w-full">
          <p
            className="text-[#650029] text-[28px] leading-9 text-center whitespace-nowrap"
            style={{ fontFamily: "'Playfair Display:SemiBold', sans-serif", fontWeight: 600 }}
          >
            STONNIANAILS
          </p>
        </div>
        <div className="flex flex-col items-center w-[318.92px] mx-auto">
          <p
            className="text-[#574145] text-[16px] leading-6 text-center not-italic"
            style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400 }}
          >
            Show off your pretty nails to the world
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-start justify-center pt-2">
        {["Gel", "Nail Art", "Extensions"].map((tag) => (
          <div key={tag} className="bg-[#ffe9eb] rounded-full px-4 py-1">
            <p
              className="text-[#574145] text-[12px] leading-4 text-center tracking-[1.2px] not-italic"
              style={{ fontFamily: "'Inter:Semi Bold', sans-serif", fontWeight: 600 }}
            >
              {tag}
            </p>
          </div>
        ))}
      </div>
      <div className="pt-4">
        <div className="bg-[rgba(158,61,89,0.1)] flex items-center gap-1 px-6 py-2 rounded-full">
          <div className="size-[9.333px] h-[11.667px] shrink-0">
            <svg fill="none" viewBox="0 0 9.33333 11.6667" className="size-full">
              <path d={svgPaths.p3d8f00c0} fill="#9E3D59" />
            </svg>
          </div>
          <p
            className="text-[#9e3d59] text-[14px] leading-5 text-center whitespace-nowrap"
            style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 500 }}
          >
            Bali | DM For Booking
          </p>
        </div>
      </div>
    </div>
  );
}

interface NavLinkProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
}

function NavLink({ icon, label, onClick, href }: NavLinkProps) {
  const inner = (
    <div className="flex items-center gap-0 h-[30px] w-full relative">
      <div className="absolute left-[41px] flex items-center justify-center">{icon}</div>
      <p
        className="absolute left-[74.02px] top-1/2 -translate-y-1/2 text-[#24181b] text-[16px] leading-6 whitespace-nowrap"
        style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400 }}
      >
        {label}
      </p>
    </div>
  );

  if (onClick) {
    return (
      <button className="cursor-pointer h-[30px] w-full relative text-left" onClick={onClick}>
        {inner}
      </button>
    );
  }
  return (
    <a className="cursor-pointer h-[30px] w-full relative block" href={href ?? "#"}>
      {inner}
    </a>
  );
}

interface LinksProps {
  onNavigate: (page: "pricelist") => void;
}

function Links({ onNavigate }: LinksProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <NavLink
        label="Price List"
        onClick={() => onNavigate("pricelist")}
        icon={
          <svg fill="none" viewBox="0 0 22 16" width="22" height="16">
            <path d={svgPaths.p26835240} fill="#24181B" />
          </svg>
        }
      />
      <NavLink
        label="WhatsApp for Booking"
        href="https://wa.me/qr/WEKKRK6MZOTUI1"
        icon={
          <svg fill="none" viewBox="0 0 20 20" width="20" height="20">
            <path d={svgPaths.p3ffd6800} fill="#24181B" />
          </svg>
        }
      />
      <NavLink
        label="Location"
        href="https://maps.app.goo.gl/SgthTvvSQ5boEfy66"
        icon={
          <svg fill="none" viewBox="0 0 18 18" width="18" height="18">
            <path d={svgPaths.p1f25e00} fill="#24181B" />
          </svg>
        }
      />
    </div>
  );
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div
      className="relative size-full overflow-y-auto"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(255, 248, 247) 0%, rgb(255, 248, 247) 100%)",
      }}
    >
      <div className="absolute left-0 right-0 top-16 max-w-[600px] mx-auto px-5 py-12 flex flex-col gap-12">
        <HeroSection />
        <Links onNavigate={onNavigate} />
      </div>
      <HeaderBar />
    </div>
  );
}
