"use client"

import { motion } from "framer-motion";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-border">
            <div className="w-full flex justify-center mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    <p className="text-muted-foreground text-sm">
                        © {currentYear} Emma Vandewalle. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
