"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Technologies",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>GraphQL</li>
        <li>SQL</li>
        <li>React</li>
        <li>Linux Ubuntu</li>
        <li>MongoDB</li>
        <li>Docker</li>
      </ul>
    ),
  },
  {
    title: "Languages",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>C/C++</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>HTML / CSS</li>
        <li>Assembly</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Fundamentals</li>
        <li>Agile Project Management</li>
        <li>DevOps: Foundations (2016)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpeg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          As a versatile developer skilled in both front-end and back-end technologies, I have a particular passion for delving into the realm of AI, particularly exploring reinforcement learning algorithms to create innovative projects. Proficient in JavaScript, Python, React, Node.js, Express, HTML, and CSS, I possess a strong aptitude for learning and continually strive for personal and professional growth in the field of programming. Collaborating with teams is where I excel, and I eagerly anticipate the opportunity to collaborate with others to craft exceptional applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Technologies{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;