"use client"

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import background from "@/public/background.png";
import Image from "next/image";

export function Intro() {
    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={background}
                    alt="Abstract background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/60 to-background" />
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-6 py-32 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-4 leading-tight"
                >
                    Emma Vandewalle
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-orange-400 text-xl md:text-2xl lg:text-3xl mb-12"
                >
                    Software Developer
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="#contact"
                        onClick={(e) => handleScrollTo(e, '#contact')}
                        className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-black/70 text-primary-foreground font-medium hover:bg-orange-400/50 hover:text-orange-400 transition-colors"                    >
                        Get In Touch
                    </a>
                    <a
                        href="#projects"
                        onClick={(e) => handleScrollTo(e, '#projects')}
                        className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-border text-foreground font-medium hover:border-orange-400/50 hover:text-orange-400 transition-colors"
                    >
                        View Projects
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ArrowDown className="text-muted-foreground" size={24} />
                </motion.div>
            </motion.div>
        </section>
    );
}
