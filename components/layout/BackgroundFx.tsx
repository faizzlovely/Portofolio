export default function BackgroundFx() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-[-2%]">
        <div className="orb orb-cyan" />
        <div className="orb orb-violet" />
        <div className="orb orb-blue" />
      </div>
      <div className="starfield" />
      <div className="starfield-bright" />
      <div className="aurora" />
      <div className="bg-grid absolute inset-0" />
    </div>
  );
}
