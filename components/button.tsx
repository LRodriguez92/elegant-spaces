"use client"

import { type ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", children, ...props }, ref) => {
    const baseStyles = "transition-all duration-300 rounded-full font-sans"
    const variants = {
      primary: "bg-charcoal text-cream hover:bg-opacity-90",
      secondary: "bg-cream text-charcoal hover:bg-soft-blush hover:text-cream",
    }

    return (
      <button ref={ref} className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"

export default Button

