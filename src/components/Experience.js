import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";
const Details = ({ position, company, link, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex felx-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl ">
          {position}&nbsp;
          <a
            href={link}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize underline underline-offset-2 "
          >
            @{company}
          </a>
        </h3>

        <span className="capitalize font-medium text-dark/75 dark:text-light/75">{` ${time} | ${address}`}</span>
        <p className="fontt-medium w-full ">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 ">
          <Details
            position="Frontend-developer | Intern"
            company="webmistry"
            link="https://askwebmistry.com"
            time={`June' 23-Present`}
            address={"Krishna Colony Palwal, 121102 India"}
            work={
              "Work as a junior Front-end developer and help the company to convert their designs into code, worked under a creative team and enhance their design by my design thinking and effective implementations completely Designed and developed their landing page in a user centric way."
            }
          />
          <Details
            position="Frontend-developer | Intern"
            company="webmistry"
            link="https://askwebmistry.com"
            time={`June' 23-Present`}
            address={"Krishna Colony Palwal, 121102 India"}
            work={
              "Work as a junior Front-end developer and help the company to convert their designs into code, worked under a creative team and enhance their design by my design thinking and effective implementations completely Designed and developed their landing page in a user centric way."
            }
          />
          <Details
            position="Frontend-developer | Intern"
            company="webmistry"
            link="https://askwebmistry.com"
            time={`June' 23-Present`}
            address={"Krishna Colony Palwal, 121102 India"}
            work={
              "Work as a junior Front-end developer and help the company to convert their designs into code, worked under a creative team and enhance their design by my design thinking and effective implementations completely Designed and developed their landing page in a user centric way."
            }
          />
          <Details
            position="Frontend-developer | Intern"
            company="webmistry"
            link="https://askwebmistry.com"
            time={`June' 23-Present`}
            address={"Krishna Colony Palwal, 121102 India"}
            work={
              "Work as a junior Front-end developer and help the company to convert their designs into code, worked under a creative team and enhance their design by my design thinking and effective implementations completely Designed and developed their landing page in a user centric way."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
