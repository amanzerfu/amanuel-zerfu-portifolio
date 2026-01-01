"use client"

import { motion } from "framer-motion"

interface MetricProps {
    value: string
    label: string
}

export function Metric({ value, label }: MetricProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
        >
            <p className="text-5xl font-bold text-[#C9A227]">
                {value}
            </p>
            <p className="mt-2 text-zinc-400">
                {label}
            </p>
        </motion.div>
    )
}
