import React, { useState } from "react";
import logoImg from "./logo.png";
import higherEdSvg from "./higher_ed.svg";

export default function HigherEdITSolutions() {
  const [formTab, setFormTab] = useState("assessment");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#125EAD] via-[#1869c6] to-[#4BB74E] relative overflow-x-hidden">
      {/* Animated Particles (background, can use tsParticles or similar) */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Place animated SVG or tsParticles here */}
        <svg className="absolute w-full h-full opacity-20" aria-hidden>
          <circle cx="25%" cy="75%" r="140" fill="#4BB74E" fillOpacity="0.07"/>
          <circle cx="80%" cy="20%" r="100" fill="#125EAD" fillOpacity="0.12"/>
          <circle cx="50%" cy="40%" r="120" fill="#4BB74E" fillOpacity="0.09"/>
        </svg>
      </div>

      {/* Header */}
      <header className="w-full z-10 bg-white/80 shadow-md fixed top-0 left-0 flex items-center justify-between px-8 py-3 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="Logical Front Logo" className="h-12 w-auto rounded-xl shadow-lg" />
          <span className="text-2xl font-extrabold bg-gradient-to-r from-[#125EAD] to-[#4BB74E] bg-clip-text text-transparent tracking-tight">
            Logical Front
          </span>
        </div>
        <nav className="flex items-center gap-8 text-[#125EAD] font-medium text-lg">
          <a href="#solutions" className="hover:text-[#4BB74E] transition">Solutions</a>
          <a href="#case-studies" className="hover:text-[#4BB74E] transition">Case Studies</a>
          <a href="#testimonials" className="hover:text-[#4BB74E] transition">Testimonials</a>
          <a href="#contact" className="bg-[#4BB74E] text-white px-4 py-2 rounded-full shadow hover:bg-[#125EAD] transition">Contact</a>
        </nav>
      </header>

      {/* Sidebar Form (floating, responsive) */}
      <aside className="fixed top-28 right-8 w-[340px] max-w-[90vw] z-20 hidden lg:block">
        <div className="rounded-2xl shadow-2xl bg-white/95 border-2 border-[#4BB74E] p-6 flex flex-col gap-4 animate-slidein">
          <div className="flex gap-2 mb-2">
            <button
              className={`flex-1 py-2 rounded-xl font-semibold ${formTab === "assessment" ? "bg-[#4BB74E] text-white" : "bg-gray-100 text-[#125EAD]"}`}
              onClick={() => setFormTab("assessment")}
            >
              Free Assessment
            </button>
            <button
              className={`flex-1 py-2 rounded-xl font-semibold ${formTab === "roi" ? "bg-[#125EAD] text-white" : "bg-gray-100 text-[#125EAD]"}`}
              onClick={() => setFormTab("roi")}
            >
              ROI Calculator
            </button>
          </div>
          {formTab === "assessment" ? (
            <form className="flex flex-col gap-3">
              <input type="text" className="p-2 border rounded-md" placeholder="Your Name" />
              <input type="email" className="p-2 border rounded-md" placeholder="Email" />
              <input type="text" className="p-2 border rounded-md" placeholder="Institution" />
              <button type="submit" className="bg-[#4BB74E] text-white rounded-lg py-2 mt-2 hover:bg-[#125EAD] transition font-bold shadow">
                Request Assessment
              </button>
            </form>
          ) : (
            <form className="flex flex-col gap-3">
              <input type="number" className="p-2 border rounded-md" placeholder="Annual IT Spend ($)" />
              <input type="number" className="p-2 border rounded-md" placeholder="User Count" />
              <button type="submit" className="bg-[#125EAD] text-white rounded-lg py-2 mt-2 hover:bg-[#4BB74E] transition font-bold shadow">
                Calculate ROI
              </button>
            </form>
          )}
        </div>
      </aside>

      {/* HERO SECTION */}
      <section className="flex flex-col lg:flex-row items-center justify-between pt-36 pb-24 px-8 max-w-7xl mx-auto relative z-10">
        {/* Hero Text */}
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-xl">
            IT Solutions for Higher Education
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 font-medium max-w-xl drop-shadow-md mx-auto lg:mx-0">
            Cut costs. Boost student success.<br />FERPA-compliant, cloud-smart, tailored to your university.
          </p>
          <div className="flex gap-6 justify-center lg:justify-start mt-3">
            <a href="#solutions" className="bg-[#4BB74E] text-white px-8 py-3 rounded-full text-xl font-bold shadow-lg hover:bg-[#125EAD] transition-all">See Solutions</a>
            <a href="#contact" className="bg-white text-[#125EAD] px-8 py-3 rounded-full text-xl font-bold shadow-lg hover:bg-[#4BB74E] hover:text-white transition-all">Contact Us</a>
          </div>
          {/* Stats */}
          <div className="flex gap-8 mt-8 justify-center lg:justify-start">
            <StatBlock number="33%" label="Average Cost Savings" />
            <StatBlock number="600K+" label="Users Supported" />
            <StatBlock number="100%" label="FERPA Compliant" />
          </div>
        </div>
        {/* Hero Visual (Placeholder) */}
        <div className="flex-1 flex items-center justify-center mt-12 lg:mt-0">
          {/* Replace below with campus/tech SVG or animation */}
          <img src={higherEdSvg} alt="Higher Education IT Solutions" className="h-48 w-48 rounded-3xl shadow-2xl border-8 border-[#4BB74E]/50 bg-white/40" />
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="max-w-6xl mx-auto px-8 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <SolutionTile icon="cloud" title="Private Cloud" desc="On-prem & hybrid options for max control, minimum cost." />
        <SolutionTile icon="desktop" title="Virtual Desktops (VDI)" desc="Empower anywhere learning & admin with secure virtual desktops." />
        <SolutionTile icon="shield" title="Security & Compliance" desc="FERPA, HIPAA, and advanced security baked in from day one." />
        <SolutionTile icon="server" title="Datacenter Modernization" desc="Refresh hardware & storage—no disruption, rapid ROI." />
      </section>

      {/* CASE STUDIES (Placeholder) */}
      <section id="case-studies" className="bg-white/90 py-16 px-8">
        <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-[#125EAD] to-[#4BB74E] bg-clip-text text-transparent mb-8">
          Proven Results in Higher Ed
        </h2>
        <div className="flex gap-8 flex-col md:flex-row justify-center">
          <CaseStudyCard
            title="Arkansas State University"
            result="Reduced costs by 29%, scaled to 35,000 users, zero compliance gaps."
          />
          <CaseStudyCard
            title="UAMS"
            result="Modernized infrastructure, improved uptime, protected PHI."
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-[#125EAD] to-[#4BB74E] bg-clip-text text-transparent">
          What Our Clients Say
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <Testimonial
            quote="Logical Front’s private cloud is a game changer for our IT and our students."
            name="Dr. Linda Faulkner"
            org="CIO, Arkansas State"
          />
          <Testimonial
            quote="The VDI rollout was the smoothest project we’ve ever done."
            name="James Martin"
            org="IT Director, UAMS"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-gradient-to-r from-[#125EAD] to-[#4BB74E] text-white py-10 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logoImg} className="h-10 w-10 rounded-lg" alt="Logical Front Logo" />
            <span className="font-bold text-2xl tracking-tight">Logical Front</span>
          </div>
          <nav className="flex gap-8 font-semibold">
            <a href="#solutions" className="hover:underline">Solutions</a>
            <a href="#case-studies" className="hover:underline">Case Studies</a>
            <a href="#testimonials" className="hover:underline">Testimonials</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="text-sm opacity-70">
            &copy; {new Date().getFullYear()} Logical Front. FERPA Compliant. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Component helpers below ---
// --- You can split these out or keep in same file for demo ---

function StatBlock({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl font-extrabold text-[#4BB74E] drop-shadow-lg">{number}</span>
      <span className="text-md text-white/80 font-semibold mt-1">{label}</span>
    </div>
  );
}

function SolutionTile({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  // You can swap for an icon library if desired
  const icons = {
    cloud: "☁️",
    desktop: "🖥️",
    shield: "🛡️",
    server: "🗄️",
  };
  return (
    <div className="bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform group border-2 border-transparent hover:border-[#4BB74E]">
      <div className="text-4xl mb-4">{icons[icon] || "💡"}</div>
      <h3 className="font-bold text-lg text-[#125EAD] mb-2">{title}</h3>
      <p className="text-gray-700 text-center">{desc}</p>
    </div>
  );
}

function CaseStudyCard({ title, result }: { title: string; result: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 flex-1 border-2 border-[#125EAD]/10">
      <h3 className="text-2xl font-bold text-[#125EAD] mb-2">{title}</h3>
      <p className="text-gray-700">{result}</p>
    </div>
  );
}

function Testimonial({ quote, name, org }: { quote: string; name: string; org: string }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex-1 flex flex-col items-center border-2 border-[#4BB74E]/20">
      <div className="text-3xl mb-3">“</div>
      <blockquote className="italic text-lg text-gray-700 text-center mb-4">{quote}</blockquote>
      <div className="font-semibold text-[#4BB74E]">{name}</div>
      <div className="text-sm text-[#125EAD]">{org}</div>
    </div>
  );
}
