"use client";

import Image from "next/image";
import Link from "next/link";
import {
  type PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  Building2,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  GraduationCap,
  HeartPulse,
  Leaf,
  MapPin,
  Settings2,
  ShieldCheck,
  Store,
  TrendingUp,
  Users,
} from "lucide-react";

const INDUSTRIES = [
  {
    number: "01",
    title: "Education",
    description: "Digital experiences for schools & edtech.",
    image: "/images/industries/education.webp",
    alt: "Indian students representing education technology solutions",
    icon: GraduationCap,
    iconClass: "text-blue-700",
    lineClass: "bg-blue-200",
    glow: "rgba(20,84,168,0.08)",
    objectPosition: "center 35%",
    chips: ["School Websites", "Admissions", "LMS"],
  },
  {
    number: "02",
    title: "Healthcare",
    description: "Trusted platforms for modern healthcare.",
    image: "/images/industries/healthcare.webp",
    alt: "Indian doctor representing healthcare digital solutions",
    icon: HeartPulse,
    iconClass: "text-cyan-600",
    lineClass: "bg-cyan-200",
    glow: "rgba(18,188,196,0.08)",
    objectPosition: "center 28%",
    chips: ["Hospital Websites", "Appointments", "Patient Experience"],
  },
  {
    number: "03",
    title: "Retail & Business",
    description: "Helping local businesses grow online.",
    image: "/images/industries/retail-business.webp",
    alt: "Indian shopkeeper representing retail and local business digital growth",
    icon: Store,
    iconClass: "text-saffron-600",
    lineClass: "bg-saffron-100",
    glow: "rgba(245,106,36,0.08)",
    objectPosition: "center 40%",
    chips: ["E-commerce", "Branding", "POS"],
  },
  {
    number: "04",
    title: "Hospitality",
    description: "Digital experiences built for hospitality.",
    image: "/images/industries/hospitality.webp",
    alt: "Premium Indian resort property representing hospitality websites",
    icon: BedDouble,
    iconClass: "text-blue-700",
    lineClass: "bg-blue-200",
    glow: "rgba(23,104,197,0.08)",
    objectPosition: "center center",
    chips: ["Hotel Websites", "Bookings", "Guest Experience"],
  },
  {
    number: "05",
    title: "Finance",
    description: "Secure solutions built for growth.",
    image: "/images/industries/finance.webp",
    alt: "Coins and green plant representing finance business growth",
    icon: TrendingUp,
    iconClass: "text-amber-500",
    lineClass: "bg-amber-200",
    glow: "rgba(245,184,38,0.08)",
    objectPosition: "center center",
    chips: ["Business Platforms", "Analytics", "Automation"],
  },
  {
    number: "06",
    title: "Fitness & Wellness",
    description: "Digital platforms for healthier brands.",
    image: "/images/industries/fitness.webp",
    alt: "Indian fitness professional representing wellness digital platforms",
    icon: Dumbbell,
    iconClass: "text-green-700",
    lineClass: "bg-green-200",
    glow: "rgba(19,122,67,0.08)",
    objectPosition: "center 28%",
    chips: ["Gym Websites", "Memberships", "Lead Generation"],
  },
] as const;

const LOOP_OFFSET = INDUSTRIES.length;
const LOOPED_INDUSTRIES = Array.from({ length: INDUSTRIES.length * 3 }, (_, index) => ({
  industry: INDUSTRIES[index % INDUSTRIES.length],
  logicalIndex: index % INDUSTRIES.length,
  renderIndex: index,
}));

const getLogicalIndex = (index: number) => ((index % INDUSTRIES.length) + INDUSTRIES.length) % INDUSTRIES.length;

export function Industries() {
  const [activeRenderIndex, setActiveRenderIndex] = useState<number>(LOOP_OFFSET);
  const [translateX, setTranslateX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);
  const dragStartX = useRef(0);
  const lastDragX = useRef(0);
  const draggedRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);

  const activeIndex = getLogicalIndex(activeRenderIndex);
  const activeIndustry = INDUSTRIES[activeIndex];

  const updateTranslate = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const activeSlide = slideRefs.current[activeRenderIndex];

    if (!viewport || !track || !activeSlide) {
      return;
    }

    const viewportWidth = viewport.clientWidth;
    const slideCenter = activeSlide.offsetLeft + activeSlide.offsetWidth / 2;
    const desired = viewportWidth / 2 - slideCenter;

    setTranslateX(desired);
  }, [activeRenderIndex]);

  useEffect(() => {
    updateTranslate();
    const frame = window.requestAnimationFrame(updateTranslate);
    const midTransition = window.setTimeout(updateTranslate, 120);
    const lateTransition = window.setTimeout(updateTranslate, 360);
    const afterTransition = window.setTimeout(updateTranslate, 760);

    window.addEventListener("resize", updateTranslate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(midTransition);
      window.clearTimeout(lateTransition);
      window.clearTimeout(afterTransition);
      window.removeEventListener("resize", updateTranslate);
    };
  }, [updateTranslate]);

  useLayoutEffect(() => {
    updateTranslate();
  }, [updateTranslate]);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return () => {
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const pauseAfterInteraction = useCallback(() => {
    setIsPaused(true);
    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => {
      resumeTimerRef.current = null;
      setIsPaused(false);
    }, 7000);
  }, []);

  useEffect(() => {
    if (activeRenderIndex >= LOOP_OFFSET && activeRenderIndex < LOOP_OFFSET * 2) {
      return;
    }

    const normalize = window.setTimeout(() => {
      const normalizedIndex = LOOP_OFFSET + activeIndex;
      setTransitionEnabled(false);
      setActiveRenderIndex(normalizedIndex);
      window.requestAnimationFrame(() => {
        updateTranslate();
        window.requestAnimationFrame(() => setTransitionEnabled(true));
      });
      window.setTimeout(updateTranslate, 40);
      window.setTimeout(updateTranslate, 140);
    }, reducedMotionRef.current ? 20 : 720);

    return () => window.clearTimeout(normalize);
  }, [activeIndex, activeRenderIndex, updateTranslate]);

  useEffect(() => {
    if (isPaused || isDragging || reducedMotionRef.current) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveRenderIndex((index) => index + 1);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isDragging, isPaused, activeRenderIndex]);

  const goTo = useCallback((logicalIndex: number) => {
    pauseAfterInteraction();
    setActiveRenderIndex((current) => {
      const candidates = [
        logicalIndex,
        logicalIndex + LOOP_OFFSET,
        logicalIndex + LOOP_OFFSET * 2,
      ];

      return candidates.reduce((best, candidate) => (
        Math.abs(candidate - current) < Math.abs(best - current) ? candidate : best
      ));
    });
  }, [pauseAfterInteraction]);

  const goPrevious = useCallback(() => {
    pauseAfterInteraction();
    setActiveRenderIndex((index) => index - 1);
  }, [pauseAfterInteraction]);

  const goNext = useCallback(() => {
    pauseAfterInteraction();
    setActiveRenderIndex((index) => index + 1);
  }, [pauseAfterInteraction]);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) {
      return;
    }

    setIsDragging(true);
    pauseAfterInteraction();
    setDragOffset(0);
    draggedRef.current = false;
    dragStartX.current = event.clientX;
    lastDragX.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging) {
      return;
    }

    const delta = event.clientX - dragStartX.current;
    lastDragX.current = event.clientX;

    if (Math.abs(delta) > 6) {
      draggedRef.current = true;
    }

    setDragOffset(Math.max(-120, Math.min(120, delta)));
  };

  const finishDrag = () => {
    if (!isDragging) {
      return;
    }

    const delta = lastDragX.current - dragStartX.current;
    setIsDragging(false);
    setDragOffset(0);

    if (delta < -56) {
      goNext();
    } else if (delta > 56) {
      goPrevious();
    }

  };

  const getSlidePosition = (renderIndex: number) => {
    const distance = renderIndex - activeRenderIndex;

    if (distance === 0) {
      return "active";
    }

    if (Math.abs(distance) === 1) {
      return "near";
    }

    return "far";
  };

  const getSlideSide = (renderIndex: number) => {
    const distance = renderIndex - activeRenderIndex;

    if (distance < 0) {
      return "left";
    }

    if (distance > 0) {
      return "right";
    }

    return "center";
  };

  return (
    <section id="industries" className="industries-section relative overflow-hidden bg-background py-12 md:py-14">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-28 -top-24 h-96 w-96 rounded-[48%_52%_58%_42%] bg-green-100/45 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-80 w-110 rounded-[44%_56%_48%_52%] bg-saffron-100/34 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(ellipse_at_center,rgba(255,240,229,0.62),transparent_68%)]"
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 hidden h-24 w-[430px] text-saffron-500/14 lg:block"
        viewBox="0 0 430 96"
        fill="none"
      >
        <path d="M4 88H426" stroke="currentColor" strokeWidth="2" />
        <path d="M36 88V58L58 40L80 58V88M50 88V70H66V88" stroke="currentColor" strokeWidth="2" />
        <path d="M112 88V48L144 28L176 48V88M124 88V62H164V88" stroke="currentColor" strokeWidth="2" />
        <path d="M208 88V36L232 18L256 36V88M220 88V58H244V88" stroke="currentColor" strokeWidth="2" />
        <path d="M292 88C316 52 360 52 420 88" stroke="currentColor" strokeWidth="2" />
        <path d="M306 88V72M330 88V64M354 88V60M378 88V66M402 88V76" stroke="currentColor" strokeWidth="2" />
      </svg>

      <div className="industries-shell relative mx-auto w-[calc(100%_-_32px)] max-w-[1880px] md:w-[calc(100%_-_64px)]">
        <div className="industries-header relative mx-auto max-w-[1180px] text-center">
          <div className="industries-eyebrow flex items-center justify-center gap-5">
            <span className="h-px w-13 bg-saffron-500/32" aria-hidden />
            <p className="text-[12px] font-extrabold uppercase tracking-[0.28em] text-navy-950/62">
              Our Industries
            </p>
            <span className="h-px w-13 bg-saffron-500/32" aria-hidden />
          </div>

          <h2 className="industries-heading mt-5 text-[clamp(2.35rem,3vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-navy-950">
            <span className="industries-heading-first">Building Digital India,</span>{" "}<span className="text-blue-700">One Industry</span>{" "}
            <span className="text-green-700">at a Time.</span>
          </h2>

          <p className="industries-description mx-auto mt-4 max-w-[860px] text-[15px] font-semibold leading-[1.5] text-text-secondary md:text-base">
            From education to healthcare, we create digital solutions for real-world businesses, especially in tier 2 &amp; tier 3 cities.
          </p>
        </div>

        <p
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-[128px] hidden select-none text-center text-[clamp(6rem,14vw,15rem)] font-extrabold uppercase leading-none tracking-[0.05em] text-navy-950/[0.026] lg:block"
        >
          Industries
        </p>

        <div className="industry-carousel relative z-10 mt-12" aria-label="Industries">
          <div
            aria-hidden
            className="industry-active-glow"
            style={{ background: activeIndustry.glow }}
          />

          <button
            type="button"
            aria-label="Previous industry"
            onClick={goPrevious}
            className="industry-nav industry-nav-left group"
          >
            <ChevronLeft className="industry-nav-icon h-6 w-6" aria-hidden />
          </button>

          <div
            ref={viewportRef}
            className={`industry-viewport ${isDragging ? "is-dragging" : ""}`}
            tabIndex={0}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              if (!resumeTimerRef.current) setIsPaused(false);
            }}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                goPrevious();
              }

              if (event.key === "ArrowRight") {
                event.preventDefault();
                goNext();
              }
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={finishDrag}
            onPointerCancel={finishDrag}
            onPointerLeave={finishDrag}
            onClick={(event) => {
              if (draggedRef.current) {
                draggedRef.current = false;
                return;
              }

              const target = event.target as HTMLElement;

              if (target.closest("a")) {
                return;
              }

              const card =
                target.closest<HTMLElement>(".industry-carousel-card") ??
                document
                  .elementsFromPoint(event.clientX, event.clientY)
                  .map((element) => element.closest<HTMLElement>(".industry-carousel-card"))
                  .find((element): element is HTMLElement => Boolean(element));
              const index = Number(card?.dataset.logicalIndex);

              if (Number.isInteger(index) && index !== activeIndex) {
                goTo(index);
              }
            }}
          >
            <div
              ref={trackRef}
              className={`industry-track ${transitionEnabled ? "" : "is-resetting"}`}
              style={{ transform: `translate3d(${translateX + dragOffset}px, 0, 0)` }}
            >
              {LOOPED_INDUSTRIES.map(({ industry, logicalIndex, renderIndex }) => {
                const Icon = industry.icon;
                const isActive = renderIndex === activeRenderIndex;
                const position = getSlidePosition(renderIndex);
                const side = getSlideSide(renderIndex);

                return (
                  <article
                    key={`${industry.title}-${renderIndex}`}
                    ref={(node) => {
                      slideRefs.current[renderIndex] = node;
                    }}
                    aria-current={isActive ? "true" : undefined}
                    className="industry-carousel-card group"
                    data-logical-index={logicalIndex}
                    data-state={isActive ? "active" : "inactive"}
                    data-position={position}
                    data-side={side}
                    aria-hidden={Math.abs(renderIndex - activeRenderIndex) > 2}
                  >
                    <div className="industry-card-image">
                      <Image
                        src={industry.image}
                        alt={industry.alt}
                        fill
                        sizes="(max-width: 767px) 86vw, (max-width: 1199px) 70vw, (max-width: 1599px) 430px, 470px"
                        style={{ objectPosition: industry.objectPosition }}
                        className="object-cover"
                      />
                      <div className="industry-image-fade" aria-hidden />
                      <Link
                        href="/industries"
                        aria-label={`Explore ${industry.title}`}
                        className="industry-image-link"
                        onClick={(event) => {
                          if (!isActive) {
                            event.preventDefault();
                            goTo(logicalIndex);
                          }
                        }}
                      >
                        <ArrowUpRight className="h-5 w-5" aria-hidden />
                      </Link>
                    </div>

                    <span className="industry-floating-icon" aria-hidden>
                      <Icon className={`h-7 w-7 ${industry.iconClass}`} />
                    </span>

                    <div className="industry-card-body">
                      <div className="industry-card-kicker">
                        <span>{industry.number}</span>
                        <span className={`industry-card-line ${industry.lineClass}`} aria-hidden />
                      </div>
                      <h3>{industry.title}</h3>
                      <p>{industry.description}</p>
                      <div className="industry-chips" aria-label={`${industry.title} services`}>
                        {industry.chips.map((chip) => <span key={chip}>{chip}</span>)}
                      </div>
                      <Link
                        href="/industries"
                        className="industry-card-link"
                        onClick={(event) => {
                          if (!isActive) {
                            event.preventDefault();
                            goTo(logicalIndex);
                          }
                        }}
                      >
                        {isActive ? "Explore Industry" : "Explore"}
                        <ArrowRight className="h-5 w-5" aria-hidden />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            aria-label="Next industry"
            onClick={goNext}
            className="industry-nav industry-nav-right group"
          >
            <ChevronRight className="industry-nav-icon h-6 w-6" aria-hidden />
          </button>

        </div>

        <div className="industry-indicator" aria-label={`Industry ${activeIndex + 1} of ${INDUSTRIES.length}`}>
          {INDUSTRIES.map((industry, index) => (
            <button
              key={industry.title}
              type="button"
              aria-label={`Show ${industry.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>

        <div className="industry-bottom-cta-wrap relative z-10 mt-7 flex justify-center">
          <Link href="/industries" className="industry-bottom-cta group">
            Explore All Industries
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-[5px]" aria-hidden />
          </Link>
        </div>

        <div className="industry-mobile-benefits" aria-label="Our impact">
          {[
            [Building2, "Diverse Industries", "blue"],
            [Users, "Local Businesses", "green"],
            [TrendingUp, "Real Impact", "orange"],
          ].map(([BenefitIcon, label, tone]) => (
            <div key={label as string}>
              <span data-tone={tone as string}><BenefitIcon aria-hidden /></span>
              <strong>{label as string}</strong>
            </div>
          ))}
        </div>

        <div className="industry-tablet-benefits" aria-label="Why businesses choose Novyra">
          {[
            [Settings2, "Modern Solutions", "blue"],
            [ShieldCheck, "Trusted Partnership", "green"],
            [MapPin, "Local Focus", "orange"],
            [Leaf, "Sustainable Growth", "green"],
          ].map(([BenefitIcon, label, tone]) => (
            <div key={label as string}>
              <span data-tone={tone as string}><BenefitIcon aria-hidden /></span>
              <strong>{label as string}</strong>
            </div>
          ))}
        </div>

        {/* <div className="relative z-10 mt-8 flex items-center justify-center gap-7 text-[10px] font-extrabold uppercase tracking-[0.32em] text-navy-950/45">
          <span className="hidden h-px w-28 bg-navy-950/14 sm:block" aria-hidden />
          <span>Empowering Businesses</span>
          <span aria-hidden>•</span>
          <span>Strengthening Bharat</span>
          <span className="hidden h-px w-28 bg-navy-950/14 sm:block" aria-hidden />
        </div> */}
      </div>
    </section>
  );
}
