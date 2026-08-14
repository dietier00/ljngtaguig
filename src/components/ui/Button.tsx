import { forwardRef } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-cyan-400 text-slate-950 shadow-[0_0_24px_-6px_rgba(34,211,238,0.6)] hover:shadow-[0_0_36px_-4px_rgba(34,211,238,0.8)] hover:brightness-110",
        outline:
          "border border-zinc-300 text-foreground hover:border-cyan-400/60 hover:text-cyan-500 dark:border-zinc-700 dark:hover:border-cyan-400/60 dark:hover:text-cyan-400",
        ghost:
          "text-foreground/70 hover:bg-zinc-100 hover:text-foreground dark:hover:bg-zinc-800/60",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, children, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size }), className)}
        >
          {children}
        </Link>
      );
    }
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { buttonVariants };
