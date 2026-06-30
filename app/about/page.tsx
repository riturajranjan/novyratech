import { SectionHeading } from "@/components/sections/section-heading";
import { CtaBanner } from "@/components/sections/cta-banner";
import { team, timeline, stats } from "@/lib/data";
import { Target, Eye, Heart, Compass } from "lucide-react";

export const metadata = {
  title: "About",
  description:
    "Novyra Technologies — a small, senior software studio partnering with founders who care about the details.",
};

const values = [
  {
    icon: Target,
    title: "Outcomes over output",
    description:
      "We measure success by what our clients achieve after launch, not by lines of code shipped.",
  },
  {
    icon: Eye,
    title: "Transparency by default",
    description:
      "Weekly demos, open roadmaps, and honest estimates. You always know where your project stands.",
  },
  {
    icon: Heart,
    title: "Craft at every layer",
    description:
      "From database schema to pixel alignment, we sweat the details others skip.",
  },
  {
    icon: Compass,
    title: "Long-term partnership",
    description:
      "Most of our clients have worked with us for years. We build for the relationship, not the invoice.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Story"
            title="A studio for founders who ship"
            subtitle="Novyra Technologies started in 2024 as a two-person studio. We're a small, senior team that partners with founders and teams to design and build software that feels good to use."
          />
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl glass-card p-8">
              <h3 className="font-display text-xl font-semibold text-primary">
                Our Mission
              </h3>
              <p className="mt-4 text-muted-foreground">
                To help founders and teams turn ambitious ideas into software
                people actually love using. We believe great software comes from
                small, senior teams who care deeply about the craft — and we
                exist to be that team for the people we partner with.
              </p>
            </div>
            <div className="rounded-2xl glass-card p-8">
              <h3 className="font-display text-xl font-semibold text-accent">
                Our Vision
              </h3>
              <p className="mt-4 text-muted-foreground">
                A world where every founder, regardless of team size, can ship
                world-class software. We are building the studio that makes that
                possible — small, focused, and obsessed with the details that
                make products feel premium.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="What we believe"
            subtitle="The principles that guide every decision, every hire, and every line of code."
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl glass-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Journey"
            title="Milestones so far"
            subtitle="A young studio, growing with the founders we partner with."
          />
          <div className="relative mt-16 pl-8">
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent" />
            {timeline.map((t, i) => (
              <div key={t.year} className="relative pb-12 last:pb-0">
                <div className="absolute -left-[33px] flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent ring-4 ring-background" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                  <span className="font-display text-2xl font-bold text-gradient">
                    {t.year}
                  </span>
                  <h3 className="font-display text-lg font-semibold">
                    {t.title}
                  </h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Team"
            title="Senior people who ship"
            subtitle="A small, senior team. No layers, no handoffs — just people who love the craft."
          />
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {team.map((m) => (
              <div
                key={m.name}
                className="group rounded-2xl glass-card p-6 text-center transition-all hover:-translate-y-1 hover:border-primary/40">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-lg font-bold text-primary-foreground">
                  {m.initials}
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">
                  {m.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
