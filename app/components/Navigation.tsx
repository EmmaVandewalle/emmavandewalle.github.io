"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-background/90 backdrop-blur-md shadow-soft"
                    : "bg-transparent"
            }`}
        >
            <nav className="w-full mx-auto px-6 py-4 flex items-center justify-between">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="font-display text-2xl font-semibold text-foreground"
                    >
                        Portfolio
                    </a>
                </motion.div>

                <ul className="flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={link.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.1 * index,
                                duration: 0.3
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                href={link.href}
                                onClick={(e) => handleScrollTo(e, link.href)}
                                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium cursor-pointer"
                            >
                                {link.name}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </motion.header>
    );
}
