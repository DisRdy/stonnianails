import svgPaths from "./svg-o3y9iiahyc";
import imgHeroSection from "./b8f6bf2f7cb0c8d0ba3b42b2ffc9f127e08f6bba.png";

function Heading1() {
  return (
    <div className="content-stretch drop-shadow-[0px_2px_1px_rgba(0,0,0,0.06),0px_4px_1.5px_rgba(0,0,0,0.07)] flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[48px] text-center text-white tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[56px]">Price List</p>
      </div>
    </div>
  );
}

function Shadow() {
  return (
    <div className="content-stretch drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] flex flex-col items-center max-w-[672px] relative shrink-0 w-full" data-name="Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.9)] text-center whitespace-nowrap">
        <p className="leading-[28px] mb-0">Discover our curated selection of luxury</p>
        <p className="leading-[28px]">nail services.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] max-w-[1200px] min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] px-[20px] relative size-full">
        <Heading1 />
        <Shadow />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="content-stretch flex h-[399px] items-center justify-center mb-[-48px] overflow-clip relative shrink-0 w-full" data-name="Hero Section">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgHeroSection} />
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" data-name="Overlay" />
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#574145] text-[12px] text-center tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[16px]">Gel Polish</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#650029] text-[32px] text-center whitespace-nowrap">
          <p className="leading-[40px]">From Rp40K</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#fff0f1] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(222,191,195,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[25px] relative size-full">
          <Margin />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#574145] text-[12px] text-center tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[16px]">Nail Art</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#650029] text-[32px] text-center whitespace-nowrap">
          <p className="leading-[40px]">From Rp80K</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#fff0f1] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(222,191,195,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[25px] relative size-full">
          <Margin1 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#574145] text-[12px] text-center tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[16px]">Extensions</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#650029] text-[32px] text-center whitespace-nowrap">
          <p className="leading-[40px]">From Rp150K</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#fff0f1] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(222,191,195,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[25px] relative size-full">
          <Margin2 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function QuickOverviewGrid() {
  return (
    <div className="relative shrink-0 w-full" data-name="Quick Overview Grid">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <BackgroundBorder />
        <BackgroundBorder1 />
        <BackgroundBorder2 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[9px] relative shrink-0 w-full" data-name="Heading 3">
      <div aria-hidden className="absolute border-[rgba(222,191,195,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#650029] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Gel Polish</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#24181b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Classic Gel Manicure</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#24181b] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Rp 40K</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Item">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#24181b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Classic Gel Pedicure</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#24181b] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Rp 50K</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Item">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[60.53px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#24181b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">Gel Removal (Done</p>
        <p className="leading-[24px]">elsewhere)</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#24181b] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Rp 20K</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Item">
      <Container11 />
      <Container12 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function CategoryGelPolish() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Category: Gel Polish">
      <Heading2 />
      <List />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[9px] relative shrink-0 w-full" data-name="Heading 3">
      <div aria-hidden className="absolute border-[rgba(222,191,195,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#650029] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">{`Nail Art & Design`}</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#24181b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Simple Design (Per Nail)</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#24181b] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Rp 10K</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Item">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#24181b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Complex Design (Per Nail)</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#24181b] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Rp 25K</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Item">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[12.04px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#24181b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">Full Set Custom</p>
        <p className="leading-[24px]">Art</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#24181b] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">From Rp 120K</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Item">
      <Container17 />
      <Container18 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function CategoryNailArt() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Category: Nail Art">
      <Heading3 />
      <List1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[9px] relative shrink-0 w-full" data-name="Heading 3">
      <div aria-hidden className="absolute border-[rgba(222,191,195,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#650029] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">{`Extensions & Enhancements`}</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#24181b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Soft Gel Extensions</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#24181b] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Rp 150K</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Item">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#24181b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Hard Gel Extensions</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#24181b] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Rp 200K</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Item">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#24181b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Extension Removal</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#24181b] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Rp 40K</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Item">
      <Container23 />
      <Container24 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item6 />
      <Item7 />
      <Item8 />
    </div>
  );
}

function CategoryExtensions() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Category: Extensions">
      <Heading4 />
      <List2 />
    </div>
  );
}

function DetailedBreakdown() {
  return (
    <div className="relative shrink-0 w-full" data-name="Detailed Breakdown">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[64px] items-start relative size-full">
        <CategoryGelPolish />
        <CategoryNailArt />
        <CategoryExtensions />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#574145] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Ready for a touch of luxury?</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[15.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 15.8333 13.3333" width="15.8333">
        <g id="Container">
          <path d={svgPaths.pf594000} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#8b0d3d] relative rounded-[9999px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[16px] relative size-full">
          <Container26 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[1.2px] whitespace-nowrap">
            <p className="leading-[16px]">Book via WhatsApp</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CtaSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="CTA Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pt-[16px] relative size-full">
        <Container25 />
        <Button />
      </div>
    </div>
  );
}

function SectionMainContentCanvas() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(255,248,247,0.9)] content-stretch flex flex-col gap-[48px] items-start p-[21px] relative rounded-[12px] shrink-0 w-[359px]" data-name="Section - Main Content Canvas">
      <div aria-hidden className="absolute border border-[rgba(222,191,195,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_-4px_30px_0px_rgba(94,8,41,0.08)]" />
      <QuickOverviewGrid />
      <DetailedBreakdown />
      <CtaSection />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 pb-[48px] right-0 top-[65px]" data-name="Main">
      <HeroSection />
      <SectionMainContentCanvas />
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#650029] text-[32px] whitespace-nowrap">
          <p className="leading-[40px]">Luxury Salon Logo</p>
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[40px] content-stretch flex flex-col items-start left-[calc(50%-70.86px)] top-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#574145] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[16px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[40px] content-stretch flex flex-col items-start left-[calc(50%+61.13px)] top-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#574145] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[16px]">Terms of Service</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col items-start left-[calc(50%-0.01px)] top-[40px]" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#574145] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[16px]">Booking Rules</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[56px] relative shrink-0 w-[359px]" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container27 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#574145] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">© 2024 Luxury Nail Boutique. All rights reserved.</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#fff8f7] max-w-[1200px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden className="absolute border-[rgba(222,191,195,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[inherit] pb-[40px] pt-[41px] px-[20px] relative size-full">
          <Heading5 />
          <Margin3 />
          <Margin4 />
        </div>
      </div>
    </div>
  );
}

function FooterMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[48px] right-0 top-[1855px]" data-name="Footer:margin">
      <Footer />
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Container">
          <path d={svgPaths.p300a1100} fill="#650029" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonBack() {
  return (
    <div className="flex h-[20.9px] items-center justify-center relative shrink-0 w-[15.2px]">
      <div className="flex-none scale-x-95 scale-y-95">
        <div className="content-stretch flex flex-col items-center justify-center pb-[6px] relative" data-name="Button - Back">
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function ButtonBackCssTransform() {
  return (
    <a className="cursor-pointer h-[33px] relative shrink-0" data-name="Button - Back:css-transform">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pb-[2.75px] pt-[1.75px] relative size-full">
        <ButtonBack />
      </div>
    </a>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#650029] text-[24px] tracking-[-1.2px] whitespace-nowrap">
          <p className="leading-[32px]">Luxury Salon Logo</p>
        </div>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,248,247,0.7)] content-stretch flex items-center justify-between left-0 px-[20.6px] py-[16px] right-0 top-0" data-name="Header - TopAppBar">
      <div aria-hidden className="absolute border-[rgba(222,191,195,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <ButtonBackCssTransform />
      <Heading />
    </div>
  );
}

export default function PriceListStonnianails() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 248, 247) 0%, rgb(255, 248, 247) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Price List - STONNIANAILS">
      <Main />
      <FooterMargin />
      <HeaderTopAppBar />
    </div>
  );
}