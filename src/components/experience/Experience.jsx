import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
    return (
        <section className="section-wrapper" id="experience">
            <SectionHeader title="Experience" dir="l" />
            {experience.map((item) => (
                <ExperienceItem key={item.title} {...item} />
            ))}
        </section>
    );
};

const experience = [
    {
        title: "EJ Software LLC",
        position: "Full Stack Developer",
        time: "2024 - Present",
        location: "Remote",
        description:
            "Working closely with a talented team of 10+ developers, I contribute to regular upgrades, bug fixes, and new feature rollouts. Together, we follow a well-established Gitflow to maintain seamless collaboration and deliver high-quality results.",
        tech: [
            "Angular",
            "Python",
            "GCP",
            "Git",
            "GitHub",
            "Java",
            "Golang",
            "K8s",
        ],
    },
    {
        title: "Upwork",
        position: "Web Designer & Developer",
        time: "2020 - 2022",
        location: "San Francisco",
        description:
            "Worked as a Freelance Web Developer and Designer on Upwork, Helped businesses across diverse niches elevate their digital presence online.",
        tech: ["React", "Node", "PHP", "GraphQL", "Presto", "Cassandra"],
    },
    {
        title: "FrontEnd Development, Web Design, JavaScript, CSS, React, NextJs",
        position: "Software Engineer",
        time: "2024 - Present",
        location: "Seattle",
        description:
            "I run a YouTube channel, DevLab Tutorials, where I teach web development and guide viewers through building projects with HTML, CSS, JavaScript, React, TypeScript, and Next.js.",
        tech: [
            "Java",
            "Python",
            "S3",
            "RDS",
            "Redshift",
            "PySpark",
            "HDFS",
            "Apache Airflow",
        ],
    },
];
