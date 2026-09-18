'use client';

import React from 'react';

const websites = [
  {
    name: 'Vini Grow Holidays',
    url: 'https://vinigrowholidays.com',
    description: 'Travel & Tourism Experience',
    useScreenshot: false,
    image: '/assets/vini-grow-preview.jpg',
  },
  {
    name: 'Tattoos Delhi',
    url: 'https://www.tattoosdelhi.com',
    description: 'Tattoo Studio Portfolio',
    useScreenshot: false,
  }
];

export function DigitalCanvas() {


  return (
    <section 
      className="py-24 relative transition-colors duration-500 ease-in-out bg-white" 
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Our Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1524ca] to-[#3b82f6]">Canvas</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Experience the digital storefronts we've crafted for our partners. 
            Real brands, real growth, real results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          {websites.map((site, index) => (
            <div 
              key={site.name}
              className="group relative rounded-3xl p-8 md:p-12 border border-gray-200 transition-all duration-300 hover:border-transparent hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] bg-white"
            >
              <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{site.name}</h3>
                  <p className="text-gray-600 font-medium text-lg">{site.description}</p>
                </div>
                <a 
                  href={site.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#1524ca] hover:text-blue-600 transition-colors"
                >
                  Visit Live
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"/>
                  </svg>
                </a>
              </div>
              
              {/* Sleek Website Container */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl bg-gray-50">
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <span className="text-gray-400 font-mono text-sm animate-pulse tracking-widest uppercase">Loading preview...</span>
                </div>
                
                {site.image ? (
                   <img 
                     src={site.image}
                     alt={`${site.name} preview`}
                     className="absolute inset-0 w-full h-full object-cover object-top border-0 z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                     loading="lazy"
                   />
                ) : site.useScreenshot ? (
                   <img 
                     src={`https://api.microlink.io/?url=${site.url}&screenshot=true&meta=false&embed=screenshot.url`}
                     alt={`${site.name} preview`}
                     className="absolute inset-0 w-full h-full object-cover object-top border-0 z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                     loading="lazy"
                   />
                ) : (
                  /* Scaled wrapper to force desktop view and show the full homepage */
                  <div className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25]">
                    <iframe 
                      src={site.url} 
                      title={site.name}
                      className="absolute inset-0 w-full h-full border-0 z-10 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      sandbox="allow-scripts allow-same-origin"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a 
            href="/showcase" 
            className="inline-flex items-center gap-3 rounded-full bg-[#1524ca] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:-translate-y-1"
          >
            View All Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
