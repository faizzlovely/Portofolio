import Image from "next/image";

type Screenshot = {
  src: string;
  alt: string;
};

export default function ProjectImage({
  images,
  className = "",
  primaryObjectFit = "cover",
}: {
  images: Screenshot[];
  className?: string;
  primaryObjectFit?: "cover" | "contain";
}) {
  const [primary, secondary] = images;

  if (!primary) return null;

  return (
    <div
      className={`relative flex flex-col gap-1 overflow-hidden bg-surface-high ${className}`}
    >
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <Image
          src={primary.src}
          alt={primary.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className={`transition-transform duration-700 group-hover:scale-[1.03] ${
            primaryObjectFit === "contain"
              ? "object-contain"
              : "object-cover object-top"
          }`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#04070f]/20 via-transparent to-transparent" />
      </div>
      {secondary && (
        <div className="grid shrink-0 grid-cols-2 gap-1">
          {[secondary, images[2]]
            .filter(Boolean)
            .map((shot) => (
              <div
                key={shot!.src}
                className="relative aspect-[16/9] overflow-hidden"
              >
                <Image
                  src={shot!.src}
                  alt={shot!.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover object-top"
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
