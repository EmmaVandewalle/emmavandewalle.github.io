"use client"

import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Gitlab } from "lucide-react";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "emmavandewalle@hotmail.be",
        href: "mailto:emmavandewalle@hotmail.be",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Ghent, Belgium",
        href: "https://www.google.com/maps?q=gent",
    },
];

const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/emma-vdwa", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/EmmaVandewalle", label: "GitHub" },
    { icon: Gitlab, href: "https://gitlab.com/EmmaVandewalle", label: "GitLab" }
];

export function Contact() {
    return (
        <section id="contact" className="py-24 md:py-32 bg-gray-500/20">
            <div className="w-full mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-orange-400 font-medium text-sm uppercase tracking-wider">
                        Get In Touch
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3">
                        Contact Me
                    </h2>
                </motion.div>

                <div className="max-w-md mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="bg-gray-600/30 rounded-xl p-8 shadow-soft">
                            <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                {contactInfo.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-black/30 flex items-center justify-center group-hover:bg-orange-400/20 transition-colors">
                                            <item.icon className="text-orange-400" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">{item.label}</p>
                                            <p className="text-foreground font-medium group-hover:text-orange-400 transition-colors">
                                                {item.value}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-600/30 rounded-xl p-8 shadow-soft">
                            <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">
                                Follow Me
                            </h3>
                            <div className="flex gap-4 justify-center">
                                {socialLinks.map((social) => (
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-12 h-12 rounded-lg bg-black/30 flex items-center justify-center hover:bg-orange-400/20 transition-colors group"
                                    >
                                        <social.icon
                                            className="text-muted-foreground group-hover:text-orange-400 transition-colors"
                                            size={20}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
