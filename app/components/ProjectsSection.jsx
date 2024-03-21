"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "AI-CartPole",
    description: "Artificial intelligence driven pole balancer",
    image: "/images/cartpole.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harbhulla/AI-CartPole",
    previewUrl: "https://user-images.githubusercontent.com/41172710/181115048-54dfdaba-bb65-4af1-be6a-781888068a07.gif",
  },
  {
    id: 2,
    title: "Lunar AI",
    description: "Lunar lander attempting to land, driven by AI",
    image: "/images/lunar.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harbhulla/AI-LunarLander",
    previewUrl: "https://user-images.githubusercontent.com/41172710/183311663-8af3d4cf-5630-4441-aa0d-393fdcef44e7.gif",
  },
  {
    id: 3,
    title: "AI Maze Solver",
    description: "AI attempts to solve 5x5 Maze",
    image: "/images/maze.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harbhulla/AI-MazeSolver",
    previewUrl: "https://user-images.githubusercontent.com/41172710/183312364-432fa301-1b6d-4668-b646-19d7263f1c15.gif",
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