import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "gold" | "outline" | "outlineDark" | "ghost";
    size?: "sm" | "md" | "lg";
    className?: string;
    type?: "button" | "submit";
    external?: boolean;
}

export default function GoldButton({
    children, href, onClick, variant = "gold", size = "md",
    className = "", type = "button", external = false,
}: ButtonProps) {
    const sizeClasses = {
        sm: "px-6 py-2.5 text-xs tracking-[0.18em]",
        md: "px-10 py-3.5 text-xs tracking-[0.2em]",
        lg: "px-14 py-4 text-xs tracking-[0.22em]",
    };

    const variantClasses = {
        gold: "bg-[#A07848] text-white hover:bg-[#C4956A] border border-[#A07848] hover:border-[#C4956A]",
        outline: "bg-transparent text-[#A07848] border border-[#A07848] hover:bg-[#A07848] hover:text-white",
        outlineDark: "bg-transparent text-white border border-white/50 hover:border-white hover:bg-[#0A0A0A]/10",
        ghost: "bg-transparent text-[#F5F0E8]/60 border border-[#111]/20 hover:text-[#F5F0E8] hover:border-[#111]/50",
    };

    const base = `inline-flex items-center justify-center uppercase font-medium transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
    const style = { fontFamily: 'var(--font-inter)' };

    if (href) {
        if (external) return <a href={href} target="_blank" rel="noopener noreferrer" className={base} style={style}>{children}</a>;
        return <Link to={href} className={base} style={style}>{children}</Link>;
    }
    return <button type={type} onClick={onClick} className={base} style={style}>{children}</button>;
}
