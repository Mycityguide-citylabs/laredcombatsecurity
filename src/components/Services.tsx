import { Shield, Camera, Truck, Dog, Search, Building2, CheckCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  iconBg: string;
}

export function ServiceCard({ title, description, icon, features, iconBg }: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-heading font-semibold text-foreground">{title}</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">{description}</p>
      <ul className="space-y-2" role="list">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

interface ServicesProps {
  className?: string;
}

export function Services({ className }: ServicesProps) {
  const services = [
    {
      title: "Armed & Static Guards",
      description: "Licensed, trained professionals providing 24/7 protection for residential, commercial, and industrial properties.",
      icon: <Shield className="h-7 w-7" aria-hidden="true" />,
      iconBg: "bg-primary/10",
      features: [
        "Licensed & insured personnel",
        "24/7 static & mobile patrols",
        "Access control & perimeter security",
        "Incident reporting & documentation",
      ],
    },
    {
      title: "CCTV & Surveillance",
      description: "Modern IP-based monitoring systems with remote access, motion detection, and cloud storage.",
      icon: <Camera className="h-7 w-7" aria-hidden="true" />,
      iconBg: "bg-blue-100",
      features: [
        "HD/IP camera installation",
        "Remote monitoring via mobile app",
        "Motion alerts & cloud recording",
        "Night vision & PTZ cameras",
      ],
    },
    {
      title: "Rapid Response",
      description: "24/7 emergency response teams strategically positioned across Zimbabwe for immediate deployment.",
      icon: <Truck className="h-7 w-7" aria-hidden="true" />,
      iconBg: "bg-green-100",
      features: [
        "24/7 emergency dispatch",
        "GPS-tracked response vehicles",
        "Average response < 30 mins",
        "Armed & unarmed response teams",
      ],
    },
    {
      title: "K9 Patrols",
      description: "Trained detection and patrol dogs for enhanced perimeter security and threat detection.",
      icon: <Dog className="h-7 w-7" aria-hidden="true" />,
      iconBg: "bg-amber-100",
      features: [
        "Explosive & narcotic detection",
        "Perimeter patrol & intrusion alert",
        "Handler & dog teams certified",
        "Deterrent against intruders",
      ],
    },
    {
      title: "Private Investigations",
      description: "Discreet, professional investigative services for corporate and private clients.",
      icon: <Search className="h-7 w-7" aria-hidden="true" />,
      iconBg: "bg-purple-100",
      features: [
        "Corporate fraud investigation",
        "Background checks & due diligence",
        "Surveillance & evidence gathering",
        "Court-ready documentation",
      ],
    },
    {
      title: "Cash In Transit",
      description: "Secure transportation of cash, valuables, and high-value assets with armed escort.",
      icon: <Building2 className="h-7 w-7" aria-hidden="true" />,
      iconBg: "bg-orange-100",
      features: [
        "Armored vehicles with GPS tracking",
        "Armed crew with communication systems",
        "Bank & ATM replenishment services",
        "Valuable asset transportation",
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-background" aria-labelledby="services-heading">
      <div className="container-custom">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-4">
            Our Services
          </span>
          <h2 id="services-heading" className="mb-4 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Comprehensive Security Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From manned guarding to advanced surveillance, we provide end-to-end security
            solutions tailored to your specific needs across Zimbabwe.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              iconBg={service.iconBg}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 focus-visible-ring"
          >
            Discuss Your Security Needs
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}