import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = "primary", size = "md", isLoading, children, className = "", ...props }, ref) => {
        const buttonClasses = `
            button 
            button-${variant} 
            button-${size}
            ${isLoading ? "button-loading" : ""}
            ${props.disabled ? "" : ""}
            ${className}
        `.trim().replace(/\s+/g, " ");

        return (
            <button
                ref={ref}
                className={buttonClasses}
                {...props}
            >
                {isLoading ? (
                    <>
                        <span className="spinner"></span>
                        Carregando...
                    </>
                ) : (
                    children
                )}
            </button>
        );
    }
);

Button.displayName = "Button";
