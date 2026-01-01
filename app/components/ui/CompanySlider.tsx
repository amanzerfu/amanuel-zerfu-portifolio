"use client";

import Image from "next/image";

const companies = [
  { name: "Safaricom", logo: "/companies/safaricom.svg" },
  { name: "Atlas Tech", logo: "/companies/atlas.svg" },
  { name: "UniCash", logo: "/companies/unicash.svg" },
  { name: "BunnaShop", logo: "/companies/bunnashop.svg" },
  { name: "Freelance", logo: "/companies/freelance.svg" },
];

// duplicate array for seamless loop
const looped = [...companies, ...companies];

export default function CompanySlider() {
  return (
    <div className="company-slider-wrapper">
      <p className="company-label">Worked with</p>

      <div className="company-slider">
        <div className="company-track">
          {looped.map((company, index) => (
            <div key={index} className="company-card">
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={60}
                className="company-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
