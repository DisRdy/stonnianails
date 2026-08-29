import svgPaths from "./svg-944hbp6db5";
import imgStonniaNailsProfile from "./2bdbf0e8c27c78b8ec9f593312e9caaab7451c95.png";
import imgStonniaNailsLogo from "./32608fe45bb969a298a22f5f4675d5c5803b13fb.png";

function StonniaNailsProfile() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Stonnia Nails Profile">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgStonniaNailsProfile} />
      </div>
    </div>
  );
}

function OverlayBorderShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[9999px] shrink-0 size-[96px]" data-name="Overlay+Border+Shadow">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <StonniaNailsProfile />
      </div>
      <div aria-hidden className="absolute border-4 border-[#ffe9eb] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Margin">
      <OverlayBorderShadow />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Margin">
      <Margin1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#650029] text-[28px] text-center whitespace-nowrap">
        <p className="leading-[36px]">STONNIANAILS</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[318.92px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#574145] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Show off your pretty nails to the world</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#ffe9eb] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] py-[4px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#574145] text-[12px] text-center tracking-[1.2px] whitespace-nowrap">
            <p className="leading-[16px]">Gel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#ffe9eb] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] py-[4px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#574145] text-[12px] text-center tracking-[1.2px] whitespace-nowrap">
            <p className="leading-[16px]">Nail Art</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#ffe9eb] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] py-[4px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#574145] text-[12px] text-center tracking-[1.2px] whitespace-nowrap">
            <p className="leading-[16px]">Extensions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0" data-name="Container">
      <Background />
      <Background1 />
      <Background2 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667" width="9.33333">
        <g id="Container">
          <path d={svgPaths.p3d8f00c0} fill="#9E3D59" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[rgba(158,61,89,0.1)] content-stretch flex gap-[3.99px] items-center px-[24px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Link">
      <Container3 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9e3d59] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Bali | DM For Booking</p>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Link:margin">
      <Link />
    </div>
  );
}

function Section1HeroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center pt-[24px] relative shrink-0 w-full" data-name="Section - 1. HERO SECTION">
      <Margin />
      <Container />
      <Margin2 />
      <LinkMargin />
    </div>
  );
}

function Link1() {
  return (
    <a className="block cursor-pointer h-[30px] relative shrink-0 w-full" data-name="Link">
      <div className="absolute h-[16px] left-[41px] top-[4px] w-[22px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 22 16" width="22">
          <path d={svgPaths.p26835240} fill="#24181B" id="Icon" />
        </svg>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[74.02px] not-italic text-[#24181b] text-[16px] text-left top-[12px] whitespace-nowrap">
        <p className="leading-[24px]">Price List</p>
      </div>
    </a>
  );
}

function Link2() {
  return (
    <a className="block cursor-pointer h-[30px] relative shrink-0 w-full" data-name="Link">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[74.02px] not-italic text-[#24181b] text-[16px] text-left top-[18px] whitespace-nowrap">
        <p className="leading-[24px]">Gallery</p>
      </div>
      <div className="absolute left-[42px] size-[20px] top-[9px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <path d={svgPaths.p2d60240} fill="#24181B" id="Icon" />
        </svg>
      </div>
    </a>
  );
}

function Link3() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Link">
      <div className="absolute left-[42px] size-[20px] top-[8px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <path d={svgPaths.p3ffd6800} fill="#24181B" id="Icon" />
        </svg>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[74.02px] not-italic text-[#24181b] text-[16px] top-[18px] whitespace-nowrap">
        <p className="leading-[24px]">WhatsApp for Booking</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Link">
      <div className="absolute h-[18px] left-[42px] top-[9px] w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 20 18" width="20">
          <path d={svgPaths.p15b83880} fill="#24181B" id="Icon" />
        </svg>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[74.02px] not-italic text-[#24181b] text-[16px] top-[18px] whitespace-nowrap">
        <p className="leading-[24px]">Instagram</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Link">
      <div className="absolute left-[43px] size-[18px] top-[9px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
          <path d={svgPaths.p1f25e00} fill="#24181B" id="Icon" />
        </svg>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[74.02px] not-italic text-[#24181b] text-[16px] top-[18px] whitespace-nowrap">
        <p className="leading-[24px]">Location</p>
      </div>
    </div>
  );
}

function Section2PrimaryCtaButtons() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section - 2. PRIMARY CTA BUTTONS">
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function MainContentContainerMobileFirstLinkInBioStyle() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-0 max-w-[600px] px-[20px] py-[48px] right-0 top-[64px]" data-name="Main Content Container (Mobile-first Link-in-bio style)">
      <Section1HeroSection />
      <Section2PrimaryCtaButtons />
    </div>
  );
}

function StonniaNailsLogo() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Stonnia Nails Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgStonniaNailsLogo} />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[32px]" data-name="Container">
      <StonniaNailsLogo />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#650029] text-[24px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[32px]">STONNIANAILS</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container4() {
  return (
    <div className="max-w-[600px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[20px] py-[16px] relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function HeaderTopNavigationAnchorSharedComponentMapping() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-0 right-0 shadow-[0px_20px_30px_0px_rgba(94,8,41,0.08)] top-0" data-name="Header - Top Navigation Anchor (Shared Component Mapping)">
      <Container4 />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 248, 247) 0%, rgb(255, 248, 247) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <MainContentContainerMobileFirstLinkInBioStyle />
      <HeaderTopNavigationAnchorSharedComponentMapping />
    </div>
  );
}