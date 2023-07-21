import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import article3 from "../../public/images/articles/create modal component in react using react portals.png";

import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{opacity:0}}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li 
    initial={{y:200}}
    whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
    viewport={{once:true}}
    className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4">
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 ">{date}</span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline dark:text-light">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 dark:text-light">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold ">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Raj Verma | Articles page</title>
        <meta
          name="description"
          content="Discover a collection of insightful and informative articles on [Topic/Niche]. Raj Verma's articles cover a wide range of topics, including [Article/Topics]. Gain valuable knowledge, tips, and perspectives to stay informed and inspired. Whether you're a [Audience/Target Readers], there's something here to pique your interest. Explore the world of [Topic/Niche] through engaging and well-crafted articles."
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="words can change the world!" className="mb-16 " />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              time={"9 min"}
              summary={
                "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              }
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              link={"/"}
              img={article1}
            />
            <FeaturedArticle
              time={"9 min"}
              summary={
                "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              }
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              link={"/"}
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              img={article3}
              date={"June 2023"}
              link={"/"}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              img={article3}
              date={"June 2023"}
              link={"/"}
            />{" "}
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              img={article3}
              date={"June 2023"}
              link={"/"}
            />{" "}
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              img={article3}
              date={"June 2023"}
              link={"/"}
            />{" "}
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              img={article3}
              date={"June 2023"}
              link={"/"}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};
export default articles;
