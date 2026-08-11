export default function MonoTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="mono-accent font-mono text-sm font-medium tracking-[0.05em]">
      {children}
    </span>
  );
}
