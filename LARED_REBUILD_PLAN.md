# La'Red Combat Security — Rebuild Plan using 21st.dev Components

## Current Site Backup
Saved to: `/home/ubuntu/laredcombatsecurity_backup.json`

**Business:** La'Red Combat Security (PVT) LTD
- Registered under Act (Chapter 24:31)
- Location: Harare, Zimbabwe
- Services: Armed/Static Guards, CCTV, Rapid Response, K9, Event Security, Private Investigations, Cash In Transit, Security Audits, Debt Recovery

---

## 21st.dev Component Inventory for Rebuild

### **Hero Section** (choose one)
| Component | ID | Style | Best For |
|-----------|-----|-------|----------|
| **HeroSection – Enterprise-Ready** | 8156 | Professional, dual CTAs, accessibility, dark mode | **RECOMMENDED** - Professional security firm |
| **Agency Hero Section** | 28280 | Animated headline, trust avatars, client logos marquee | Good for showing client logos |
| **Marketing Hero Section** | 29522 | Stats pill, animated headline, spotlight effect | Modern, conversion-focused |
| **Product Hero with Demo Panel** | 26630 | Floating chat/demo panel over image | If showing CCTV demo |

**Recommendation:** **HeroSection – Enterprise-Ready (8156)** — professional, dual CTAs ("Get a Quote", "Our Services"), accessibility built-in, dark mode support.

### **Navigation**
| Component | ID | Style |
|-----------|-----|-------|
| **Header Navbar** | 18258 | Responsive, animated logo, mobile drawer, banner slot |
| **Navbar 1** | 2046 | Floating animated, responsive |
| **Navbar** | 4003 | Clean, simple |

**Recommendation:** **Header Navbar (18258)** — responsive, animated logo, mobile drawer, optional banner for emergency contact.

### **Services Section**
| Component | ID | Style |
|-----------|-----|-------|
| **Services** | 4192 | Showcase offerings clearly, video demo |
| **Services Card** | 7795 | Individual cards for each service |
| **Alqemist Security** | 14889 | Enterprise security block with interactive controls |

**Recommendation:** **Services (4192)** + **Services Card (7795)** combo — main section + individual cards for 6 services.

### **Security-Specific Components**
| Component | ID | Use Case |
|-----------|-----|----------|
| **Alqemist Security** | 14889 | Enterprise security feature block |
| **Shine Border Security Card** | 18018 | Animated security card for feature highlights |

### **Testimonials / Social Proof**
| Component | ID | Style |
|-----------|-----|-------|
| **Testimonial Basic** | 18913 | Editorial layout, video thumbnails, star ratings |
| **Testimonial** | 6286 | Professional, video support |

### **Contact Form**
| Component | ID | Style |
|-----------|-----|-------|
| **Contact Form** | 35258 | Two-column, validated, pending/success/error states |
| **Centered Contact Form** | 27904 | Centered, trust badges |

**Recommendation:** **Contact Form (35258)** — two-column with contact info + validated form, built-in states.

### **Footer**
| Component | ID | Style |
|-----------|-----|-------|
| **Footer with Suite** | 29773 | Split-section, oversized brand wordmark, nav + contact |
| **Footer** | 1614 | Clean, standard |

**Recommendation:** **Footer with Suite (29773)** — premium split layout with brand wordmark.

### **Pricing / Plans** (if offering packages)
| Component | ID | Style |
|-----------|-----|-------|
| **Pricing Section** | 6259 | Professional tiers, feature comparison |
| **Pricing Section 3** | 6259 | Alternative layout |

---

## Recommended Page Structure

```
1. Hero (Enterprise-Ready Hero 8156)
   - Headline: "Professional Security Services Across Zimbabwe"
   - Subtext: "Armed guards, CCTV, rapid response, K9 patrols — registered under Act Chapter 24:31"
   - CTAs: "Get a Quote" (primary), "Our Services" (secondary)
   - Trust indicators: "Registered under Act 24:31", "National coverage", "24/7 response"

2. Navigation Sticky Header (Header Navbar 18258)
   - Logo: La'Red Combat Security
   - Links: Services, About, Contact, Emergency: +263 715 077 419
   - Mobile drawer with emergency call button

3. Services Overview (Services 4192)
   - Grid of 6 service cards (Services Card 7795)
   - Each card: icon, title, brief description, "Learn More" link

4. Security Features (Alqemist Security 14889 + Shine Border Card 18018)
   - Enterprise-grade features: 24/7 monitoring, rapid response, licensed guards
   - K9 unit, CCTV monitoring, Cash-in-transit

5. Why Choose Us / Trust Indicators
   - Registered under Act Chapter 24:31
   - National coverage
   - 24/7 rapid response
   - Licensed & insured
   - Corporate clients

6. Testimonials (Testimonial Basic 18913)
   - Client logos/names (anonymized if needed)
   - Star ratings, video thumbnails

7. Contact Section (Contact Form 35258 + Footer with Suite 29773)
   - Two-column: contact info + validated form
   - Emergency numbers prominent
   - Footer with Suite: brand wordmark, nav links, contact details, social

8. Emergency Banner (optional, via Header Navbar banner slot)
   - "24/7 Emergency: +263 715 077 419"
```

---

## Tech Stack Recommendation

Based on 21st.dev components (all shadcn/ui + Tailwind CSS):
- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 + shadcn/ui + Radix UI
- **Animations:** Framer Motion (built into components)
- **Icons:** Lucide React / Hugeicons
- **Forms:** React Hook Form + Zod validation
- **Deployment:** Vercel (recommended) or Netlify

---

## GitHub Repo Setup

```bash
# Create new repo
gh repo create laredcombatsecurity --public --description "La'Red Combat Security website - Next.js + 21st.dev components"
cd laredcombatsecurity

# Initialize with Next.js
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm

# Install shadcn/ui
npx shadcn@latest init

# Install 21st.dev components (replace IDs as needed)
npx shadcn@latest add "https://21st.dev/r/uniquesonu/hero-section-enterprise-ready-landing-page-hero-with-dual-ctas?api_key=$API_KEY_21ST"
npx shadcn@latest add "https://21st.dev/r/karthikmudunuri/header-02?api_key=$API_KEY_21ST"
npx shadcn@latest add "https://21st.dev/r/ravikatiyar162/services?api_key=$API_KEY_21ST"
npx shadcn@latest add "https://21st.dev/r/ravikatiyar162/services-card?api_key=$API_KEY_21ST"
npx shadcn@latest add "https://21st.dev/r/jasonmohab-ali/alqemist-security?api_key=$API_KEY_21ST"
npx shadcn@latest add "https://21st.dev/r/uilayout.contact/testimonial-basic?api_key=$API_KEY_21ST"
npx shadcn@latest add "https://21st.dev/r/kevingirelli/contact-form?api_key=$API_KEY_21ST"
npx shadcn@latest add "https://21st.dev/r/scrollxui/footer-with-suite?api_key=$API_KEY_21ST"
npx shadcn@latest add "https://21st.dev/r/jasonmohab-ali/alqemist-security?api_key=$API_KEY_21ST"
npx shadcn@latest add "https://21st.dev/r/shadcnspace/shine-border-02?api_key=$API_KEY_21ST"

# Additional dependencies
npm install framer-motion lucide-react clsx tailwind-merge zod react-hook-form @hookform/resolvers
```

---

## Content Migration Checklist

- [ ] Hero: headline, subtext, CTAs, trust badges
- [ ] Navigation: logo, links, emergency phone
- [ ] Services: 6 service cards with descriptions
- [ ] Security features: K9, CCTV, Cash-in-transit, Rapid response
- [ ] About/Trust: Act 24:31 registration, national coverage, 24/7
- [ ] Testimonials: client quotes (anonymize if needed)
- [ ] Contact: form + emergency numbers + address
- [ ] Footer: brand, links, contact, social
- [ ] SEO: meta tags, Open Graph, structured data
- [ ] Analytics: GA4 + Search Console
- [ ] Performance: Image optimization, font optimization
- [ ] Accessibility: WCAG 2.1 AA, keyboard nav, focus states

---

## 21st.dev API Key Usage

Your API key: `21st_sk_1cd3ed142560147b9737a2830e1a9cbd62ad360f70840dff25253fd46096696e`

Free tier: 2 component retrievals/day (1 remaining today)
Paid plan: Unlimited retrievals

Use in install commands: `?api_key=$API_KEY_21ST`

---

## Next Steps

1. **Create GitHub repo** (run the commands above)
2. **Get remaining component code** (use daily quota or upgrade)
3. **Build pages** in Next.js App Router
4. **Add content** from backup JSON
5. **Deploy to Vercel** with custom domain `laredcombatsecurity.co.zw`
6. **Configure DNS** (CNAME to Vercel)
7. **Test** all forms, mobile, accessibility
8. **Launch** and monitor

---

## Files Created

- `/home/ubuntu/laredcombatsecurity_backup.json` — current site content
- This plan: `/home/ubuntu/LARED_REBUILD_PLAN.md`

---

## Notes

- Free tier: 1 component retrieval left today (used 1 for Hero)
- Consider upgrading 21st.dev plan for unlimited component access
- All components use shadcn/ui + Tailwind CSS v4 — consistent design system
- Components are React + TypeScript ready for Next.js 16 App Router
- All components include dark mode support
- Accessibility built-in (WCAG 2.1 AA target)