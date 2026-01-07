"use client"

import { motion } from "framer-motion";
import profileImage from "@/public/profile.png";
import Image from "next/image";

const skills = [
    "Java",
    "Spring Boot",
    "RESTful APIs",
    "Python",
    "Algorithms",
    "React & TypeScript",
    "Kotlin",
    "Gradle",
    "PHP & CodeIgniter",
    "Model-View-Controller",
    "C++ & QT"
];

export function About() {
    return (
        <section id="about" className="py-24 md:py-32 bg-black/30">
            <div className="w-full mx-auto px-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="relative max-w-3/4"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-strong">
                            <Image
                                src={profileImage}
                                alt="Profile"
                                className="w-full aspect-3/4 object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-foreground/20 to-transparent" />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-400/20 rounded-2xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-orange-400/30 rounded-2xl -z-10" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                    <span className="text-orange-400 font-medium text-sm uppercase tracking-wider">
                      About Me
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-6">
                        Hello, I am Emma
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                        <p>
                            I am a software developer currently completing my Master degree at Ghent University
                            with a passion for creating elegant solutions to complex problems.
                        </p>
                        <p>
                            I am a Kotlin enthusiast who loves crafting mobile applications.
                            My passion for learning drives me to explore new technologies and frameworks,
                            and I enjoy building small projects to master different programming languages.
                        </p>
                        <p>
                            When I am not programming, you can find me swimming laps, getting lost in a good book,
                            or challenging myself to improve my chess game.
                        </p>
                    </div>

                    {/* Skills */}
                    <div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                            Skills & Expertise
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 rounded-lg bg-gray-600/30 text-foreground text-sm font-medium shadow-soft hover:shadow-medium transition-shadow duration-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
