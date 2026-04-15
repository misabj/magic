import { useRef, ReactNode } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface RevealProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "left" | "right" | "none";
    className?: string;
    once?: boolean;
}

export function Reveal({
    children,
    delay = 0,
    direction = "up",
    className = "",
    once = true,
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once, margin: "-80px 0px" });

    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 40 : 0,
            x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.7,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface StaggerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    baseDelay?: number;
}

export function StaggerContainer({ children, className = "", staggerDelay = 0.1, baseDelay = 0 }: StaggerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px 0px" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: baseDelay,
                    },
                },
                hidden: {},
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
};
