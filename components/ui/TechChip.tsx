export default function TechChip({ label }: { label: string }) {
  return (
    <span className="rounded-md border border-accent/25 bg-accent/[0.06] px-2.5 py-1 font-mono text-xs text-accent transition-colors hover:border-accent/50 hover:bg-accent/10">
      {label}
    </span>
  );
}
