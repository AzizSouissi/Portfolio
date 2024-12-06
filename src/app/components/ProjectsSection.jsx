"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Talent Nest",
    description:
      "A web application for HR management, including secure authentication, interactive dashboards, and real-time team communication. Integrated an NLP-powered chatbot for CV sorting and implemented a CI/CD pipeline using Docker, SonarQube, and Prometheus.",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Campmaster",
    description:
      "A web application for camping enthusiasts with user registration, CRUD operations for camping programs, and menu offerings. Designed a microservices architecture with service discovery using Eureka and centralized configuration management.",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Entity Management DevOps Pipeline",
    description:
      "Developed a DevOps pipeline for an entity management system, including unit testing, containerized deployment, monitoring with Prometheus and Grafana, and load balancing with NGINX.",
    tag: ["All", "DevOps"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "MindTrack",
    description:
      "An AI-powered learning platform for students and teachers with customizable learning paths, subject-specific quizzes, and AI insights using Transformers. Integrated a chatbot for user guidance.",
    tag: ["All", "Web", "AI"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="DevOps"
          isSelected={tag === "DevOps"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
