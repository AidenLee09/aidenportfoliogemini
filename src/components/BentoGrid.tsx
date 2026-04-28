import { cn } from "@/utils/cn";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl glass border border-[var(--glass-border)] p-6 transition duration-200 hover:shadow-xl hover:shadow-[var(--accent)]/10 flex flex-col space-y-4 relative overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
