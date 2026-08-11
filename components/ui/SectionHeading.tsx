export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-3 sm:mb-14 md:mb-16 md:gap-4">
      <span className="mono-accent flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest sm:text-sm">
        <span className="h-px w-6 bg-gradient-to-r from-accent to-transparent sm:w-8" />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-on-surface sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div className="relative h-1 w-20 overflow-hidden rounded-full sm:w-24">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-galaxy to-violet" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-40 blur-[2px]" />
      </div>
    </div>
  );
}
