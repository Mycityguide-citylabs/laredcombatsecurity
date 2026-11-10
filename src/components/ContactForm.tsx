"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  { value: "armed-guards", label: "Armed & Static Guards" },
  { value: "cctv", label: "CCTV & Surveillance" },
  { value: "rapid-response", label: "Rapid Response" },
  { value: "k9", label: "K9 Patrols" },
  { value: "investigations", label: "Private Investigations" },
  { value: "cash-transit", label: "Cash In Transit" },
  { value: "security-audit", label: "Security Audit & Consultancy" },
  { value: "debt-recovery", label: "Debt Recovery" },
  { value: "other", label: "Other / General Inquiry" },
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // In production, send to your API endpoint
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
      
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <section id="contact" className="section-padding bg-background" aria-labelledby="contact-heading">
      <div className="container-custom">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-4">
            Get in Touch
          </span>
          <h2 className="mb-4 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Ready to Secure Your Peace of Mind?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fill out the form below and our security experts will contact you within 24 hours 
            to discuss a customized security solution for your needs.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-heading font-semibold text-foreground">
              Contact Information
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our team is ready to discuss your security requirements and provide a 
              customized quote. For emergencies, call our 24/7 hotline.
            </p>

            <div className="space-y-6">
              <a
                href="tel:+263715077419"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">24/7 Emergency Hotline</p>
                  <p className="text-lg font-semibold text-foreground">+263 715 077 419</p>
                </div>
              </a>

              <a
                href="tel:+263774314369"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Alternative Line</p>
                  <p className="text-lg font-semibold text-foreground">+263 774 314 369</p>
                </div>
              </a>

              <a
                href="mailto:info@laredcombatsecurity.co.zw"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email Us</p>
                  <p className="text-lg font-semibold text-foreground">info@laredcombatsecurity.co.zw</p>
                </div>
              </a>

              <address className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Physical Address</p>
                  <p className="text-lg font-semibold text-foreground not-italic">
                    No 8 Banchory Rd, Mandara, Harare, Zimbabwe
                  </p>
                </div>
              </address>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="mb-6 text-2xl font-heading font-semibold text-foreground">
              Request a Quote
            </h3>

            {status === "success" && (
              <div className="mb-6 rounded-lg bg-green-50 p-4 text-green-800 flex items-center gap-3" role="alert">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Message Sent Successfully!</p>
                  <p className="text-sm">We'll contact you within 24 hours. For emergencies, call +263 715 077 419.</p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-800 flex items-center gap-3" role="alert">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Something Went Wrong</p>
                  <p className="text-sm">{errorMessage || "Please try again or call us directly."}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                    Full Name <span className="text-destructive" aria-hidden="true">*</span>
                  </label>
                  <input
                    {...register("name")}
                    id="name"
                    type="text"
                    placeholder="John Moyo"
                    className={cn(
                      "flex h-10 w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                      errors.name && "border-destructive focus:border-destructive focus:ring-destructive"
                    )}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    disabled={status === "submitting"}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-sm text-destructive" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                    Email <span className="text-destructive" aria-hidden="true">*</span>
                  </label>
                  <input
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="john@company.co.zw"
                    className={cn(
                      "flex h-10 w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                      errors.email && "border-destructive focus:border-destructive focus:ring-destructive"
                    )}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    disabled={status === "submitting"}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-destructive" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                    Phone Number <span className="text-destructive" aria-hidden="true">*</span>
                  </label>
                  <input
                    {...register("phone")}
                    id="phone"
                    type="tel"
                    placeholder="+263 77 123 4567"
                    className={cn(
                      "flex h-10 w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                      errors.phone && "border-destructive focus:border-destructive focus:ring-destructive"
                    )}
                    aria-invalid={errors.phone ? "true" : "false"}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    disabled={status === "submitting"}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-sm text-destructive" role="alert">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-foreground">
                    Service Required <span className="text-destructive" aria-hidden="true">*</span>
                  </label>
                  <select
                    {...register("service")}
                    id="service"
                    className={cn(
                      "flex h-10 w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                      errors.service && "border-destructive focus:border-destructive focus:ring-destructive"
                    )}
                    aria-invalid={errors.service ? "true" : "false"}
                    aria-describedby={errors.service ? "service-error" : undefined}
                    disabled={status === "submitting"}
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p id="service-error" className="text-sm text-destructive" role="alert">
                      {errors.service.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                  Message <span className="text-destructive" aria-hidden="true">*</span>
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={4}
                  placeholder="Describe your security requirements, property type, location, and any specific concerns..."
                  className={cn(
                    "flex min-h-[120px] w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none",
                    errors.message && "border-destructive focus:border-destructive focus:ring-destructive"
                  )}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  disabled={status === "submitting"}
                />
                {errors.message && (
                  <p id="message-error" className="text-sm text-destructive" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className={cn(
                  "group w-full rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 focus-visible-ring disabled:opacity-50 disabled:cursor-not-allowed",
                  status === "submitting" && "opacity-75 cursor-wait"
                )}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    Submit Request
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                By submitting, you agree to our <a href="#" className="underline hover:text-primary">Privacy Policy</a> 
                and <a href="#" className="underline hover:text-primary">Terms of Service</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}