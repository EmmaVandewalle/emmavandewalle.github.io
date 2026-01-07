"use client"

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import delphi from "@/public/delphi.png";
import writand from "@/public/writand.png";
import medicine from "@/public/medicine.png";
import Image from "next/image";

const projects = [
    {
        title: "Delphi",
        category: "Web Application",
        description: "A submission platform for students to upload and manage their academic assignments. Built with a focus on user experience and accessibility, featuring secure file uploads, deadline tracking, and real-time submission status updates.",
        image: delphi,
        tags: ["React", "TypeScript", "Python"],
        href: "https://github.com/SELab-2/UGent-2"
    },
    {
        title: "Writand",
        category: "Mobile Development",
        description: "An integrated development environment (IDE) designed specifically for Android devices.",
        image: writand,
        tags: ["Kotlin", "Jetpack Compose", "Gradle"],
        href: "https://gitlab.com/emrodev/writand"
    },
    {
        title: "Medical visualisations",
        category: "Data Visualisation",
        description: "A website designed to visualise complex medical topics.",
        image: medicine,
        tags: ["NextJS", "Medical Education", "Responsive Design"],
        href: "https://github.com/EmmaVandewalle/geneeskunde-visualisaties"
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
};

export function Projects() {
    return (
        <section id="projects" className="py-24 md:py-32 bg-gray-500/20">
            <div className="w-full mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
          <span className="text-orange-400 font-medium text-sm uppercase tracking-wider">
            Projects
          </span>
                    <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3">
                        See My Work
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.article
                            key={index}
                            variants={itemVariants}
                            className="group bg-gray-600/30 rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300"
                        >
                            <div className="relative overflow-hidden aspect-4/3">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                            </div>
                            <div className="p-6">
                                <span className="text-orange-400 text-sm font-medium">
                                  {project.category}
                                </span>
                                <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3 group-hover:text-orange-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full bg-black/30 text-secondary-foreground text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={project.href}
                                    className="inline-flex items-center gap-1 text-foreground font-medium text-sm hover:text-orange-400 transition-colors"
                                >
                                    View Project
                                    <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
