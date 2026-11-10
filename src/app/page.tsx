import { Hero } from "@/components/Hero";
import { SecurityFeatures } from "@/components/SecurityFeatures";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <SecurityFeatures />
      <Services />
      <Testimonials />
      <ContactForm />
    </>
  );
}