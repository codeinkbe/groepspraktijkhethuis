'use client'

import { motion } from "framer-motion";

function MotionHeader({ children, title, delay, className }: { children?: React.ReactNode, title?: string, delay?: number, className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={className}
        >
            {title && (
                <h2 className="text-3xl font-acumin-bold tracking-tight text-navy sm:text-5xl">
                    {title}
                </h2>
            )}
            {children}
        </motion.div>
    )
}

function FadeHeader({ children, delay, className }: { children: React.ReactNode, delay?: number, className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

function MotionCard({ children, index, className }: { children: React.ReactNode, index: number, className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

function MotionSection({ children, direction = 'left', className }: { children: React.ReactNode, direction?: 'left' | 'right', className?: string }) {
    const xOffset = direction === 'left' ? -100 : 100;
    
    return (
        <motion.div
            initial={{ opacity: 0, x: xOffset }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

function MotionImage({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

function MotionFeature({ children, index, className }: { children: React.ReactNode, index: number, className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export { MotionHeader, FadeHeader, MotionCard, MotionSection, MotionImage, MotionFeature }