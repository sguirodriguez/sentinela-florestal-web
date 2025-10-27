import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
    label?: string;
    error?: string;
    helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, helperText, className = "", ...props }, ref) => {
        return (
            <div className="input-wrapper">
                {label && (
                    <label htmlFor={props.id} className="input-label">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={`input ${error ? "input--error" : ""} ${className}`}
                    {...props}
                />
                {error && (
                    <p className="input-error" role="alert">
                        {error}
                    </p>
                )}
                {helperText && !error && (
                    <p className="input-helper">{helperText}</p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";