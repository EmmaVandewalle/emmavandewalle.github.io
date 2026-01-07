"use client"

import {motion} from "framer-motion";

const experiences = [
    {
        role: "Supervising hands-on sessions Programming",
        company: "UGent",
        companyHref: "https://www.ugent.be/",
        period: "Sep - Dec 2025",
        description:
            "Guided university students through Python programming concepts during hands-on lab sessions at Ghent University. " +
            "It helped me to develop strong communication skills by breaking down complex programming topics into digestible explanations. " +
            "It gained me valuable experience in mentoring, adapting explanations to different learning styles, and providing constructive feedback. " +
            "This role significantly improved my patience, active listening, and ability to explain technical concepts clearly."
    },
    {
        role: "Backend Developer",
        company: "Sensolus",
        companyHref: "https://www.sensolus.com",
        period: "Aug 2025",
        description:
            "Enhanced an MCP connector to generate comprehensive tracker journey reports, enabling data-driven insights and analytics. " +
            "Also started to implement a chatbot solution that provides customers with real-time information about their devices."
    },
    {
        role: "Internship: Full Stack Developer",
        company: "DAVO Group",
        companyHref: "https://www.davogroup.be/",
        period: "Jul 2025",
        description:
            "Enhanced CRM system integrations within the customer portal, improving user experience to manage their products and provide better information. " +
            "Secondly, I designed and implemented a scalable architecture for processing and analyzing phone call data. " +
            "This was done by integrating AI tools to generate call summaries, providing customers with valuable business insights. "
    },
    {
        role: "Backend Developer",
        company: "Codefever",
        companyHref: "https://codefever.be",
        period: "Jul 2024",
        description:
            "Developed test scripts in JavaScript to evaluate and provide constructive feedback on children's Scratch programming projects. " +
            "Designed assessment criteria that not only checked for correct solutions but also encouraged good programming practices. " +
            "This experience enhanced my ability to create educational tools and provide clear, actionable feedback to learners."
    },
    {
        role: "Research",
        company: "Sigasi",
        period: "Jul 2023",
        companyHref: "https://www.sigasi.com/",
        description:
            "Conducted comprehensive market research to identify and evaluate time-tracking solutions for project management. " +
            "Assessed various platforms based on features including employee time logging, project-based tracking, and data visualization capabilities. " +
            "Delivered recommendations for implementing the most suitable time-tracking system to improve project management and resource allocation."
    },
];

const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {staggerChildren: 0.15},
    },
};

const itemVariants = {
    hidden: {opacity: 0, x: -30},
    visible: {
        opacity: 1,
        x: 0,
        transition: {duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const},
    },
};

export function Experience() {
    return (
        <section id="experience" className="py-24 md:py-32 bg-black/30 pb-40">
            <div className="w-full mx-auto px-6">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: "-100px"}}
                    transition={{duration: 0.6}}
                    className="text-center mb-16"
                >
                    <span className="text-orange-400 font-medium text-sm uppercase tracking-wider">
                        Career Path
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3">
                        Work Experience
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px 0px 200px 0px" }}
                    className="max-w-3xl mx-auto"
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative pl-8 pb-12 last:pb-0"
                        >
                            {/* Timeline line */}
                            {index !== experiences.length - 1 && (
                                <div className="absolute left-2.75 top-3 w-0.5 h-full bg-gray-500/40"/>
                            )}

                            {/* Timeline dot */}
                            <div
                                className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-orange-400 bg-background flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-orange-400"/>
                            </div>

                            <div
                                className="bg-gray-600/30 rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
                                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                    <div>
                                        <h3 className="font-display text-xl font-semibold text-foreground">
                                            {exp.role}
                                        </h3>
                                        <a
                                            href={exp.companyHref}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-orange-400 font-medium hover:underline"
                                        >
                                            {exp.company}
                                        </a>
                                    </div>
                                    <span className="text-muted-foreground text-sm bg-gray-500/40 px-3 py-1 rounded-full">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
