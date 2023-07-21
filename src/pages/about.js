import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import {useMotionValue, useSpring, useInView} from "framer-motion"
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimateNumber = ({value}) =>{
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration:3000})
    const isInView = useInView(ref, {once:true});

    useEffect(() =>{
        if (isInView){
            motionValue.set(value);
        }
    },[isInView, value, motionValue] );

    useEffect(() =>{
        springValue.on("change", (latest) =>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value]);

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>Raj Verma | About page</title>
        <meta
          name="description"
          content="Welcome to Raj Verma's Portfolio! I am a passionate Front-end Developer with a strong focus on Designing simple yet effective website. Explore my diverse projects and works that showcase my skills in reactjs, tailwind css amd figma. I believe in creativity, innovation, and user-centric design. Let's connect and collaborate on exciting projects."
        />
      </Head>
      <main className="flex w-full flex-col items-center justtify-center">
        <Layout className="pt-16">
          <AnimatedText text={"Passion Fuels Purpose!"} className="mb-16"/>
          <div className="grid w-full grid-cols-8 gap-16">
            <div
              className="col-span-3 flex flex-col items-start justify-start
            "
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Bio
              </h2>
              <p className="font-medium">
                Hi, I'm Raj Verma, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. I am always looking for new and innovative
                ways to bring my clients' visions to life.
              </p>

              <p className="font-medium my-4">
                I believe that design is about more than just making things look
                pretty, it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>

              <p className="my-6 font-medium"> 
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-soild -border-dark bg-light p-8">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"/>
                <Image src={profilePic} className="w-full h-auto rounded-2xl"/>
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
                <div className="flex flex-col items-end justify-center"><span className="inline-block text-7xl font-bold"><AnimateNumber value={50}/>+</span>
                <h2 className="text-xl font-medium capitalize text-dark">Stisfied clients</h2></div>
                <div className="flex flex-col items-end justify-center"><span className="inline-block text-7xl font-bold"><AnimateNumber value={40}/>+</span>
                <h2 className="text-xl font-medium capitalize text-dark">Projects</h2></div>
                <div className="flex flex-col items-end justify-center"><span className="inline-block text-7xl font-bold"><AnimateNumber value={2}/>+</span>
                <h2 className="text-xl font-medium capitalize text-dark">years of experience</h2></div>
            </div>
          </div>
          <Skills/>
          <Experience/>
          <Education/>
        </Layout>
      </main>
    </>
  );
};

export default about;
