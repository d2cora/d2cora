import Image from 'next/image';

export interface GrowthPartnerContent {
  title?: string;
  titleHighlight?: string;
  paragraph1?: string;
  paragraph2?: string;
  ctaButton?: string;
}

export function GrowthPartner({ content }: { content?: GrowthPartnerContent }) {
  const title = content?.title ?? "Your Partner in";
  const titleHighlight = content?.titleHighlight ?? "Brand Growth";
  const paragraph1 = content?.paragraph1 ?? "Scaling a business requires more than just basic advertising. Whether you're a direct-to-consumer ecommerce brand or a local service business, growth demands a holistic, data-driven approach to performance marketing, conversion rate optimization, and customer acquisition.";
  const paragraph2 = content?.paragraph2 ?? "We combine creative excellence with rigorous analytics to ensure every campaign is optimized for maximum ROI, turning your traffic into loyal customers and your spend into measurable profit.";
  const ctaButton = content?.ctaButton ?? "Start Growing Today";

  return (
    <section className="flex w-full flex-col lg:flex-row bg-[#fffbeb] text-blue-950 min-h-screen lg:min-h-[80vh]">
      {/* Text Section (Left Half) */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center px-8 py-20 md:px-16 lg:px-24">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            {title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1524ca] to-[#3b82f6]">
              {titleHighlight}
            </span>
          </h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-700">
            {paragraph1}
          </p>
          <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-700">
            {paragraph2}
          </p>
        </div>
        
        <div className="pt-10">
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 border-2 px-8 py-4 font-mono text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 bg-transparent border-[#1524ca] text-[#1524ca] hover:bg-[#1524ca] hover:text-[#fffbeb] w-full max-w-sm md:w-auto md:max-w-none"
          >
            {ctaButton}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M3 8H13M13 8L8 3M13 8L8 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Full Image Section (Right Half) */}
      <div className="relative hidden w-full md:block lg:w-1/2 md:min-h-[500px] lg:min-h-full">
        <Image 
          src="/assets/d2c-growth-partner.jpg" 
          alt={`${title} ${titleHighlight}`} 
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
