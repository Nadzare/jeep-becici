import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full border border-current bg-opacity-10 backdrop-blur-xs select-none">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isDark ? "bg-adventure" : "bg-forest"
            }`}
          />
          <span className={isDark ? "text-adventure" : "text-forest"}>
            {badge}
          </span>
        </div>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[1.1] ${
          isDark ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-sand" : "text-muted-green"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
