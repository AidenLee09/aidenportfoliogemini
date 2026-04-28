"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface Sprint {
  title: string;
  description: string;
  formula?: React.ReactNode;
}

interface ProjectCardProps {
  title: string;
  description: string;
  sprints?: Sprint[];
  isFuture?: boolean;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  sprints,
  isFuture = false,
  className,
}: ProjectCardProps) {
  if (isFuture) {
    return (
      <div className={cn("flex items-center justify-center h-full min-h-[200px]", className)}>
        <motion.div 
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-center"
        >
          <p className="text-lg font-medium text-[var(--accent)] tracking-widest uppercase">
            Upcoming Project
          </p>
          <p className="text-sm text-gray-400 mt-2">[Processing...]</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col h-full", className)}>
      <h3 className="text-2xl font-bold mb-2 tracking-tight">{title}</h3>
      <p className="text-sm opacity-80 mb-6">{description}</p>
      
      {sprints && sprints.length > 0 && (
        <div className="mt-auto space-y-4">
          {sprints.map((sprint, idx) => (
            <div key={idx} className="bg-black/5 dark:bg-white/5 rounded-lg p-4 border border-[var(--glass-border)]">
              <h4 className="font-semibold text-[var(--accent)] mb-1">{sprint.title}</h4>
              <p className="text-sm opacity-90 mb-2">{sprint.description}</p>
              {sprint.formula && (
                <div className="font-mono text-xs bg-black/10 dark:bg-black/40 p-2 rounded overflow-x-auto">
                  {sprint.formula}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
