import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Palette,
  RefreshCw,
  Zap,
  Monitor,
  Smartphone,
  Globe,
  ShieldCheck,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Custom Web Development Services",
  description:
    "Professional custom web development, landing page design, website redesign, and speed optimization. Fast, responsive, and conversion-focused websites for businesses in USA, Canada, and Europe.",
};

const services = [
  {
    icon: Code2,
    title: "Custom Web Development",
    description:
      "Every business is unique — your website should be too. I build fully custom websites from scratch, tailored to your brand, your audience, and your business goals. No cookie-cutter templates.",
    features: [
      "Clean, semantic code for better SEO",
      "Mobile-first responsive design",
      "Fast load times under 2 seconds",
      "Built for scalability and growth",
      "CMS integration if needed",
    ],
  },
  {
    icon: Palette,
    title: "Landing Page Design",
    description:
      "A high-converting landing page is the fastest way to start generating leads online. I design conversion-optimized landing pages that guide visitors toward one clear action — contacting you.",
    features: [
      "Persuasive copywriting structure",
      "Clear call-to-action placement",
      "A/B testing ready",
      "Lead capture integration",
      "Mobile-optimized layout",
    ],
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description:
      "If your current website looks outdated, loads slowly, or doesn't convert — it's costing you money. I redesign existing websites to meet modern standards while preserving your SEO equity.",
    features: [
      "Preserve existing SEO rankings",
      "Modern, premium visual overhaul",
      "Improved user experience & navigation",
      "Performance optimization included",
      "301 redirect mapping",
    ],
  },
  {
    icon: Zap,
    title: "Speed Optimization",
    description:
      "A slow website kills conversions. Google says 53% of users leave a page that takes longer than 3 seconds to load. I optimize every layer — from code to hosting — to make your site blazing fast.",
    features: [
      "Core Web Vitals optimization",
      "Image compression & lazy loading",
      "Code minification & caching",
      "CDN setup & configuration",
      "Server-side rendering where needed",
    ],
  },
];

export default function WebDevelopmentPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-6 border border-gray-200">
              Web Development Services
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6 text-black max-w-4xl">
              Websites That Work as Hard as{" "}
              <span className="text-gray-400">You Do.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Your website is your most important employee — it never sleeps,
              never takes a day off, and should be closing deals 24/7. I build
              custom, premium websites designed to convert visitors into paying
              clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group text-lg"
              >
                Start Your Project
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/portfolio"
                className="bg-white text-black border border-black px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center justify-center text-lg"
              >
                See My Work
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Custom */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Why Custom Development?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Templates are generic. Your business isn't. Here's what sets
              custom-built websites apart.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Monitor,
                title: "Pixel-Perfect Design",
                desc: "Every element is crafted to match your brand identity. No compromises, no workarounds.",
              },
              {
                icon: Smartphone,
                title: "Mobile-First Approach",
                desc: "Over 60% of web traffic is mobile. Your site will look and perform flawlessly on every device.",
              },
              {
                icon: ShieldCheck,
                title: "SEO-Ready Architecture",
                desc: "Clean code, semantic HTML, and proper structure that search engines love from day one.",
              },
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.15}>
                <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl h-full hover:border-gray-600 transition-colors">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-black">
              What I Build
            </h2>
          </AnimatedSection>

          <div className="space-y-12">
            {services.map((service, idx) => (
              <AnimatedSection key={idx} delay={0.1}>
                <div
                  className={`flex flex-col md:flex-row gap-8 p-8 md:p-12 rounded-3xl border ${
                    idx % 2 === 0
                      ? "bg-gray-50 border-gray-200"
                      : "bg-black text-white border-gray-800"
                  }`}
                >
                  <div className="flex-1">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                        idx % 2 === 0
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      <service.icon size={28} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {service.title}
                    </h3>
                    <p
                      className={`text-lg leading-relaxed ${
                        idx % 2 === 0 ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                  <div className="flex-1">
                    <ul className="space-y-4">
                      {service.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className={`flex items-start gap-3 ${
                            idx % 2 === 0 ? "text-gray-700" : "text-gray-300"
                          }`}
                        >
                          <CheckCircle2
                            size={20}
                            className={`mt-0.5 flex-shrink-0 ${
                              idx % 2 === 0 ? "text-black" : "text-white"
                            }`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Technologies I Use
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Modern tools for modern websites. I choose the best stack for your
              specific needs.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "WordPress",
                "Shopify",
                "Webflow",
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 border border-gray-800 p-6 rounded-2xl text-center font-medium hover:border-gray-600 transition-colors"
                >
                  {tech}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-black">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Let's discuss your project. I'll provide a free proposal with a
              clear timeline and transparent pricing.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-black text-white px-10 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors text-lg group"
            >
              Get Your Free Proposal
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
