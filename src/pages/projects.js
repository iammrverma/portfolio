import AnimatedText from "@/components/AnimatedText";
import { GithubIcon, LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import Image from "next/image";

import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, githubLink }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-dark dark:shadow-light p-12 relative rounded-br-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center ">
          <Link href={githubLink} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold"
          >
            Live
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, githubLink }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full ">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline dark:text-light"
          >
            Live
          </Link>
          <Link href={githubLink} target="_blank" className="w-8">
            <GithubIcon />
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
        <title>Raj Verma | About page</title>
        <meta content="Explore Raj Verma's Portfolio Projects. Each project exemplifies My Web Development Skills, creativity, and dedication to delivering high-quality work. Discover a diverse range of projects, including [Reacct projects Pure html css js projects and many  more. Get inspired and see how I can bring your ideas to life." />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 "
          />

          <div className="grid grid-col-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                link="/"
                githubLink="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                link="/"
                githubLink="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                link="/"
                githubLink="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                link="/"
                githubLink="/"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
