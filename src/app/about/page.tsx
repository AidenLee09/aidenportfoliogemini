import React from "react";

export const metadata = {
  title: "About // Aiden",
  description: "The Professional Archive of Aiden.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">The Professional Archive</h1>

      <div className="space-y-16">
        {/* Professional Section */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-[var(--glass-border)] pb-2 mb-6 flex items-center gap-2">
            <span className="text-[var(--accent)]">01.</span> Professional
          </h2>
          <div className="space-y-8 pl-4 border-l-2 border-[var(--glass-border)] ml-2">
            <div className="relative">
              <div className="absolute -left-[23px] top-1.5 w-3 h-3 bg-[var(--accent)] rounded-full ring-4 ring-[var(--background)]" />
              <h3 className="text-xl font-bold">Product Manager</h3>
              <p className="text-[var(--accent)] font-medium mb-2">Cox Automotive</p>
              <p className="text-sm opacity-80 leading-relaxed">
                Driving technical product strategy and logic implementation for high-impact tools, bridging engineering and business objectives.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[23px] top-1.5 w-3 h-3 bg-gray-400 rounded-full ring-4 ring-[var(--background)]" />
              <h3 className="text-xl font-bold">Area Manager Intern</h3>
              <p className="text-[var(--accent)] font-medium mb-2">Amazon Operations</p>
              <p className="text-sm opacity-80 leading-relaxed">
                Managed high-velocity operations, optimizing fulfillment processes using data-driven insights and lean principles.
              </p>
            </div>
          </div>
        </section>

        {/* Academic Section */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-[var(--glass-border)] pb-2 mb-6 flex items-center gap-2">
            <span className="text-[var(--accent)]">02.</span> Academic
          </h2>
          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-bold">Industrial & Systems Engineering</h3>
            <p className="text-[var(--accent)] font-medium mb-4">Kennesaw State University</p>
            <p className="text-sm opacity-80 mb-4">
              Focus on Optimization, Facility Planning, and Process Engineering. Integrating engineering methodologies with modern product management.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs px-3 py-1 bg-black/5 dark:bg-white/10 rounded-full">Operations Research</span>
              <span className="text-xs px-3 py-1 bg-black/5 dark:bg-white/10 rounded-full">Systems Design</span>
              <span className="text-xs px-3 py-1 bg-black/5 dark:bg-white/10 rounded-full">Data Analytics</span>
            </div>
          </div>
        </section>

        {/* Entrepreneurial Section */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-[var(--glass-border)] pb-2 mb-6 flex items-center gap-2">
            <span className="text-[var(--accent)]">03.</span> Entrepreneurial
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-xl hover:border-[var(--accent)] transition-colors">
              <h3 className="text-lg font-bold mb-1">Founder</h3>
              <p className="text-[var(--accent)] text-sm mb-3">Luxe Computers</p>
              <p className="text-sm opacity-80">
                End-to-end service-based business logic, focusing on custom hardware solutions and premium client experiences.
              </p>
            </div>
            <div className="glass p-6 rounded-xl hover:border-[var(--accent)] transition-colors">
              <h3 className="text-lg font-bold mb-1">Founder</h3>
              <p className="text-[var(--accent)] text-sm mb-3">Luxe Pressure Washing LLC</p>
              <p className="text-sm opacity-80">
                Operational logistics, service optimization, and business development in a local service market.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Matrix */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-[var(--glass-border)] pb-2 mb-6 flex items-center gap-2">
            <span className="text-[var(--accent)]">04.</span> Skills Matrix
          </h2>
          <div className="flex flex-wrap gap-3">
            {["Next.js", "React", "Python", "SQL", "AutoCAD", "Vibe Coding", "Tailwind CSS", "Data Modeling", "Optimization"].map((skill) => (
              <div 
                key={skill} 
                className="px-4 py-2 glass rounded-lg text-sm font-medium hover:bg-[var(--accent)] hover:text-white transition-colors cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
