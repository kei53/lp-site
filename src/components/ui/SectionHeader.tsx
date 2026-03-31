interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} ${className}`}>
      {badge && (
        <span className="reveal inline-block bg-primary-50 text-primary-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 border border-primary-100">
          {badge}
        </span>
      )}
      <h2 className="reveal reveal-delay-1 text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 leading-snug">
        {title}
      </h2>
      {description && (
        <p className="reveal reveal-delay-2 mt-4 text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
