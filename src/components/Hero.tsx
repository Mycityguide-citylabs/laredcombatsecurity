import { ArrowRight, Shield, CheckCircle, Truck, Camera, Dog, Search, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  const services = [
    { icon: Shield, title: "Armed & Static Guards", desc: "Licensed, trained professionals for 24/7 protection" },
    { icon: Camera, title: "CCTV & Surveillance", desc: "Modern monitoring systems with remote access" },
    { icon: Truck, title: "Rapid Response", desc: "24/7 emergency response teams across Zimbabwe" },
    { icon: Dog, title: "K9 Patrols", desc: "Trained detection and patrol dogs" },
    { icon: Search, title: "Private Investigations", desc: "Discreet, professional investigative services" },
    { icon: Building2, title: "Cash In Transit", desc: "Secure transportation of valuables" },
  ];

  return (
    <section className={cn("relative min-h-[90vh] flex items-center justify-center overflow-hidden", className)}>
      {/* Body background shows through - no section background */}

      <div className="relative container-custom py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-2 mb-8 text-sm font-medium border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Registered under Act (Chapter 24:31) &bull; National Coverage
          </div>

          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
            Professional Security Services
            <br />
            <span className="text-accent">Across Zimbabwe</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
            La'Red Combat Security (PVT) LTD &mdash; registered under Act (Chapter 24:31). 
            Armed guards, static guards, CCTV, rapid response, K9 patrols, 
            event security across Zimbabwe. 24/7 protection you can trust.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 focus-visible-ring"
            >
              Get a Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border-2 border-border bg-transparent px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-muted focus-visible-ring"
            >
              Our Services
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "Act Chapter 24:31", desc: "Fully Registered" },
              { label: "National Coverage", desc: "All Zimbabwe" },
              { label: "24/7 Response", desc: "Emergency Ready" },
              { label: "Licensed & Insured", desc: "Fully Compliant" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <CheckCircle className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}