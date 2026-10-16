import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "forest" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  children,
  icon,
  iconPosition = "left",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-adventure focus-visible:outline-offset-2 active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5 tracking-wide",
    md: "px-5 py-2.5 text-sm gap-2 tracking-wide font-semibold",
    lg: "px-7 py-3.5 text-base gap-2.5 font-bold tracking-wider uppercase font-display",
  };

  const variantStyles = {
    primary:
      "bg-adventure hover:bg-adventure-hover text-charcoal shadow-sm hover:shadow-md",
    forest:
      "bg-forest hover:bg-forest-light text-white shadow-sm hover:shadow-md",
    secondary:
      "bg-sand hover:bg-sand-dark text-charcoal border border-sand-dark/40",
    outline:
      "border-2 border-forest text-forest hover:bg-forest hover:text-white bg-transparent",
    ghost:
      "bg-transparent hover:bg-charcoal/5 text-charcoal dark:hover:bg-white/10 dark:text-white",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        className={combinedClasses}
      >
        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  );
}
