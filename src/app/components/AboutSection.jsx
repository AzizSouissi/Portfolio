"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Angular</li>
        <li>React</li>
        <li>SpringBoot</li>
        <li>NestJS</li>
        <li>Django</li>
        <li>Flask</li>
        <li>MySQL</li>
        <li>OracleDB</li>
        <li>JavaScript</li>
        <li>Java</li>
        <li>.Net</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Software Engineering at ESPRIT</li>
        <li>Prepatory Diploma in Technology at IPEIS</li>
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
        <Image
          src="./images/about-image.png"
          width={500}
          height={500}
          alt="About Me"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a software engineer, web developer, and DevOps enthusiast.
            With a deep passion for crafting clean and efficient code, I
            specialize in building dynamic web applications, user-friendly
            interfaces, and robust DevOps pipelines. My journey in technology
            has equipped me with a strong foundation in both frontend and
            backend development, as well as experience in continuous integration
            and deployment (CI/CD), allowing me to deliver solutions that
            prioritize reliability and user experience. Recently, I&apos;ve also been
            exploring large language models (LLMs), integrating them to enhance
            application functionality and user engagement. I thrive in
            collaborative environments where I can contribute my expertise in
            problem-solving and my commitment to continuous learning. Outside of
            coding, I enjoy exploring new technologies, hiking, and immersing
            myself in diverse cultures through travel.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
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
