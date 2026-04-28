"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/utils/cn";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-[var(--glass-border)]">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight">
          Aiden<span className="text-[var(--accent)]">.dev</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-[var(--accent)] transition-colors">Work</Link>
          <Link href="/about" className="hover:text-[var(--accent)] transition-colors">About</Link>
          <Link href="/resume" className="hover:text-[var(--accent)] transition-colors">Resume</Link>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-[var(--glass)] transition-colors"
            aria-label="Toggle Theme"
          >
            {mounted ? (
              theme === "dark" ? <Sun size={18} /> : <Moon size={18} />
            ) : (
              <div className="w-[18px] h-[18px]" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
