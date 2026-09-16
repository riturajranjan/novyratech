import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  MessageSquare,
  Play,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

const trustItems = [
  { label: "Fast Delivery", icon: Zap, tone: "orange" },
  { label: "Trusted Partner", icon: ShieldCheck, tone: "blue" },
  { label: "Local Focus", icon: Users, tone: "green" },
] as const;

export function MobileHero() {
  return (
    <div className="mobile-hero md:hidden">
      <header className="mobile-hero-header">
        <Link href="/" className="mobile-hero-logo" aria-label="Novyra Technologies home">
          <Image
            src="/images/brand/novyra-mark.png"
            alt=""
            width={324}
            height={224}
            priority
            className="mobile-hero-logo-mark"
          />
          <span className="mobile-hero-logo-type">
            <span>NOVYRA</span>
            <small>TECHNOLOGIES</small>
            <em>Innovate · Build · Elevate</em>
          </span>
        </Link>

        <Link href="#contact" className="mobile-hero-discuss">
          <MessageSquare className="h-[17px] w-[17px]" aria-hidden />
          Let&apos;s Discuss
        </Link>
      </header>

      <div className="mobile-hero-inner">
        <div className="mobile-hero-copy">
          <span className="mobile-hero-badge">
            <span aria-hidden>🚀</span>
            Digital Solutions for a Brighter Bharat
          </span>

          <div aria-hidden className="mobile-bharat-note mobile-bharat-note-top">
            Ideas
            <br />
            from
            <br />
            Muzaffarpur
            <br />
            to a Digital
            <br />
            Bharat
            <span />
          </div>

          <h1 className="mobile-hero-title">
            <span>Technology</span>
            <span>
              <b>That</b> <strong>Empowers</strong>
            </span>
            <span>Real Business</span>
          </h1>

          <p className="mobile-hero-description">
            We help schools, hospitals, local businesses and growing brands build modern websites, web applications and
            AI solutions to reach more people and grow faster.
          </p>

          <div className="mobile-hero-actions">
            <Link href="#contact" className="mobile-hero-primary">
              Start Your Project
              <ArrowRight className="h-[18px] w-[18px]" aria-hidden />
            </Link>
            <Link href="#story" className="mobile-hero-secondary">
              <span>
                <Play className="ml-0.5 h-[16px] w-[16px] fill-current" aria-hidden />
              </span>
              Watch Our Story
            </Link>
          </div>

          <div className="mobile-trust-row" aria-label="Novyra benefits">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="mobile-trust-item" data-tone={item.tone}>
                  <span>
                    <Icon className="h-[20px] w-[20px]" aria-hidden />
                  </span>
                  <strong>{item.label}</strong>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mobile-hero-visual">
          <figure className="mobile-hero-image-frame">
            <Image
              src="/images/hero/novyra-hero.webp"
              alt="A young Indian entrepreneur sits above Muzaffarpur at golden hour with a laptop and backpack, surrounded by cards for school, hospital, business and SaaS solutions."
              fill
              priority
              sizes="(max-width: 767px) calc(100vw - 40px), 100vw"
              className="mobile-hero-image"
            />
            <figcaption className="mobile-location-pill">
              <MapPin className="h-[19px] w-[19px]" aria-hidden />
              <span>
                <strong>Muzaffarpur, Bihar</strong>
                <small>Local Roots. Global Vision.</small>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
