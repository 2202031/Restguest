import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
}

export default function Button({ variant = 'primary', className, ...props }: ButtonProps) {
    return (
        <button
            className={`btn btn-${variant} ${className || ''}`}
            {...props}
        />
    );
}
