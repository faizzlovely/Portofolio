export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-6 md:px-10 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}
