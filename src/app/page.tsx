import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl">
      {/* Hero Section */}
      <section className="py-20 flex flex-col items-start justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
          Aiden <span className="text-[var(--accent)] font-light">//</span> Technical Product Lab.
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
          A collection of high-velocity prototypes and data-driven tools built at the intersection of Industrial Engineering and PM logic.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <BentoGrid>
          {/* Featured Project: Full Width */}
          <BentoGridItem className="md:col-span-3">
            <ProjectCard
              title="Omni-Channel Dealer Health Index"
              description="A robust data engine designed to evaluate and optimize dealer network performance using advanced logic models."
              sprints={[
                {
                  title: "Sprint 2: The Strategy Simulator",
                  description: "Focus on the 'What-If' Sensitivity Analysis engine to calculate the impact of delta inputs.",
                  formula: <span>S = &sum;(w<sub>i</sub> &middot; &delta;c<sub>i</sub>)</span>
                },
                {
                  title: "Sprint 3: The Profit Evaporator",
                  description: "Inventory Carrying-Cost Burn Engine. Real-time monitoring of 'Floorplan Drag' and persistent financial HUD.",
                }
              ]}
            />
          </BentoGridItem>

          {/* Additional Projects or Placeholders */}
          <BentoGridItem className="md:col-span-2">
            <ProjectCard
              title="Predictive Facility Optimizer"
              description="Algorithmic layout generation for warehouse efficiency, integrating AutoCAD data with Python-based optimization models."
            />
          </BentoGridItem>

          {/* Future Project Slot */}
          <BentoGridItem className="md:col-span-1">
            <ProjectCard title="" description="" isFuture={true} />
          </BentoGridItem>
        </BentoGrid>
      </section>
    </div>
  );
}
