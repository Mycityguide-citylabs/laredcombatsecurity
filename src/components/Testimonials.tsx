import { Star, Quote, User, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating?: number;
}

export function Testimonial({ quote, author, role, company, rating = 5 }: TestimonialProps) {
  return (
    <article className="relative rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg">
      <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10" aria-hidden="true" />
      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-1" aria-label="Rating: 5 out of 5 stars">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={i < 5 ? "h-5 w-5 fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}
              aria-hidden="true"
            />
          ))}
        </div>
        <blockquote className="mb-6 text-lg text-foreground leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <footer className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
            {author.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-foreground">{author}</div>
            <div className="text-sm text-muted-foreground">{role}{company && `, ${company}`}</div>
          </div>
        </footer>
      </div>
    </article>
  );
}

interface TestimonialsProps {
  className?: string;
}

export function Testimonials({ className }: TestimonialsProps) {
  const testimonials = [
    {
      quote: "La'Red Combat Security has been our trusted partner for over 3 years. Their armed guards are professional, punctual, and their rapid response team has always arrived within 20 minutes. Highly recommended for any business serious about security.",
      author: "Tendai M.",
      role: "Operations Manager",
      company: "Delta Corporation",
    },
    {
      quote: "The CCTV installation was seamless and the remote monitoring app gives us peace of mind 24/7. Their team was professional, clean, and explained everything clearly. The remote access works perfectly even from my phone.",
      author: "Sarah K.",
      role: "Property Manager",
      company: "Harare CBD Properties",
    },
    {
      quote: "We've used La'Red for cash-in-transit services for our retail chain for 2 years. Their armored vehicles are always on time, the crew is professional, and we've never had an incident. Their GPS tracking gives us full visibility.",
      author: "James R.",
      role: "Finance Director",
      company: "OK Zimbabwe",
    },
  ];

  return (
    <section id="testimonials" className="section-padding" aria-labelledby="testimonials-heading">
      <div className="container-custom">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-4">
            Trusted by Leading Organizations
          </span>
          <h2 id="testimonials-heading" className="mb-4 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Trusted by Industry Leaders Across Zimbabwe
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hear from our clients who trust La'Red Combat Security with their most valuable assets.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {testimonials.map((testimonial, i) => (
            <Testimonial key={i} {...testimonial} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 focus-visible-ring"
          >
            Join Our Satisfied Clients
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}