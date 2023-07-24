import AnimatedText from "@/components/AnimatedText";
import { GithubIcon, LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

import { projectsData } from "../../public/data";

const FramerImage = motion(Image);
const FeaturedProject = ({
  skills,
  title,
  summary,
  images,
  link,
  githubLink,
  isLive = true,
}) => {
  const [currImg, setCurrImg] = useState(images[0]);
  const [hoveredImg, setHoveredImg] = useState(null);
  const handleHover = (img) => {
    setHoveredImg(img);
  };

  const handleMouseLeave = () => {
    setHoveredImg(null);
  };

  const handleClick = (img) => {
    setCurrImg(img);
  };

  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />

      <div className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:!w-full relative">
        <div key={currImg}>
          <FramerImage
            src={currImg}
            alt={title}
            className="w-auto h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>
        <div className="w-full h-[20%] flex absolute bottom-0 items-center justify-center p-1 dark:bg-light/0 backdrop-blur-[10px]">
          {images.map((img, index) => (
            <FramerImage
              key={index}
              src={img}
              alt={index}
              style={{ objectFit: "contain" }}
              className={`w-[15%] h-full mx-2 rounded-sm border-solid border-dark border-[3px] ${
                hoveredImg === img ? "opacity-50" : "opacity-100"
              } ${currImg === img ? "!border-primary" : ""}`}
              onClick={() => handleClick(img)}
              onMouseEnter={() => handleHover(img)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <div className="flex flex-wrap items-center">
          {skills.map((skill, index) => (
            <div
              className="p-2 mt-2 mr-2 text-md sm:p-1 font-bold sm:m-1 sm:text-sm border-2 border-solid rounded-lg border-dark text-dark dark:border-light dark:text-light"
              key={index}
            >
              {skill}
            </div>
          ))}
        </div>
        <p className="my-2 font-medium text-dark/75 dark:text-light/75 sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={githubLink} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className={`ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base ${
              isLive ? "block" : "hidden"
            }`}
          >
            Live
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Raj Verma | Projects page</title>
        <meta content="Explore Raj Verma's Portfolio Projects. Each project exemplifies My Web Development Skills, creativity, and dedication to delivering high-quality work. Discover a diverse range of projects, including [Reacct projects Pure html css js projects and many  more. Get inspired and see how I can bring your ideas to life." />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="flex flex-col items-center justify-center">
            {projectsData.map((project, index) => (
              <div key={index} className="w-[60vw] mb-32 sm:w-[80vw] md:mb-24">
                <FeaturedProject
                  title={project.title}
                  images={project.images}
                  summary={project.summary}
                  link={project.link ? project.link : ""}
                  githubLink={project.githubLink}
                  skills={project.skills}
                  isLive={project.link ? true : false}
                />
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
