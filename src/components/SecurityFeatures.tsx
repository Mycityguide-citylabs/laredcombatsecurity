import { Clock, Shield, Camera, Dog, Star, Award, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor?: string;
}

export function SecurityFeature({ icon, title, description, accentColor = "primary" }: FeatureProps) {
  const colorMap = {
    primary: "bg-primary/10 text-primary",
    blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    green: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    amber: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    orange: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  };

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
      <div className={cn("mb-4 flex h-14 w-14 items-center justify-center rounded-xl", colorMap[accentColor as keyof typeof colorMap] || colorMap.primary)}>
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-heading font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </article>
  );
}

export function SecurityFeatures() {
  const features = [
    {
      icon: <Clock className="h-7 w-7" aria-hidden="true" />,
      title: "24/7 Monitoring & Response",
      description: "Round-the-clock monitoring with dedicated response teams strategically positioned across Zimbabwe for immediate deployment.",
      accentColor: "primary",
    },
    {
      icon: <Shield className="h-7 w-7" aria-hidden="true" />,
      title: "Licensed & Insured Professionals",
      description: "All guards are licensed under Act Chapter 24:31, fully insured, and undergo continuous training and background checks.",
      accentColor: "blue",
    },
    {
      icon: <Camera className="h-7 w-7" aria-hidden="true" />,
      title: "Advanced CCTV & AI Analytics",
      description: "IP cameras with AI-powered motion detection, facial recognition, license plate recognition, and cloud storage.",
      accentColor: "green",
    },
    {
      icon: <Dog className="h-7 w-7" aria-hidden="true" />,
      title: "K9 Detection & Patrol Units",
      description: "Certified K9 teams for explosive detection, narcotic detection, and perimeter patrol with trained handlers.",
      accentColor: "amber",
    },
    {
      icon: <MapPin className="h-7 w-7" aria-hidden="true" />,
      title: "National Coverage Across Zimbabwe",
      description: "Operational in Harare, Bulawayo, Mutare, Gweru, Masvingo, and all major centers with local response teams.",
      accentColor: "purple",
    },
    {
      icon: <Award className="h-7 w-7" aria-hidden="true" />,
      title: "ISO 9001 Quality Certified",
      description: "ISO 9001:2015 certified quality management system ensuring consistent, reliable service delivery standards.",
      accentColor: "orange",
    },
  ];

  return (
    <section className="section-padding" aria-labelledby="features-heading">
      <div className="container-custom">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-4">
            Why Choose La'Red
          </span>
          <h2 id="features-heading" className="mb-4 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Security Features That Set Us Apart
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We combine cutting-edge technology with highly trained personnel to deliver
            security solutions that exceed industry standards.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {features.map((feature, i) => (
            <article key={i} role="listitem">
              <SecurityFeature {...feature} />
            </article>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {[
            { value: "500+", label: "Active Clients" },
            { value: "1,200+", label: "Deployed Guards" },
            { value: "99.9%", label: "Response Rate" },
            { value: "15+", label: "Years Experience" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-card border border-border">
              <div className="mb-2 text-4xl sm:text-5xl font-heading font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}