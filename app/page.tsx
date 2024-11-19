"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/data";
import dotenv from "dotenv";
import { PinContainer } from "./ui/pin";
import { FaLocationArrow } from "react-icons/fa6";
import { navItems, socialMedia, certificates } from "@/data";
import {
  motion,
  stagger,
  useAnimate,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Octokit } from "@octokit/rest";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

dotenv.config();
// unauthenticated client
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = React.useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <div className="main">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className=" text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  React.useEffect(() => {
    console.log(wordsArray);
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              // change here if idx is greater than 3, change the text color to #CBACF9
              className={` ${
                idx > 3 ? "text-purple" : "dark:text-white text-black"
              } opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      {/* mt-4 to my-4 */}
      <div className="my-4">
        {/* remove  text-2xl from the original */}
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

type SpotlightProps = {
  className?: string;
  fill?: string;
};

const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

//@ts-ignore
const AddGrid = ({ cert }) => {
  const newarr: Card[][] = [];
  for (let i = 0; i < cert.length; i += 2) {
    cert[i].key = Math.random();
    cert[i + 1].key = Math.random();
    newarr.push([cert[i], cert[i + 1]]);
  }
  return newarr.map((f, i) => (
    <div className="center">
      <div key={Math.random()}>
        <a href={f[0].orgUrl} target="_blank">
          <img
            src={f[0].path}
            alt={f[0].orgName}
            style={{ width: 50 + "vw", height: "auto" }}
          />
          {f[0].orgName} - Added {f[0].timeAdded}
        </a>
      </div>
      <div key={Math.random()}>
        <a href={f[1].orgUrl} target="_blank">
          <img
            src={f[1].path}
            alt={f[1].orgName}
            style={{ width: 50 + "vw", height: "auto" }}
          />
          {f[1].orgName} - Added {f[1].timeAdded}
        </a>
      </div>
    </div>
  ));
};

const Home = () => {
  const [files, setFiles] = React.useState<
    Array<{
      name: string;
      archived: boolean;
      url: string;
      description: string;
    }>
  >([]);

  React.useEffect(() => {
    async function getFiles() {
      octokit.rest.repos
        .listForUser({ username: "ridheshcybe" })
        .then(({ data }) => {
          const newarr = [];
          for (let i = 0; i < data.length; i++) {
            const repo = data[i];
            newarr.push({
              name: repo.name,
              archived: repo.archived || false,
              url: repo.html_url,
              description: repo.description || "[NO_DESCRIPTION]",
            });
          }
          setFiles(newarr);
        })
        .catch((err) => {
          console.error("Error fetching repositories:", err);
        });
      // Update state with the fetched projects
      //@ts-ignore
    }

    // Fetch files only if the `files` state is empty
    if (files.length === 0) {
      getFiles();
    }
  }, [files]); // This effect runs when `files` is empty (on mount or when `files` is reset)

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <div className="pb-20 pt-36" id="hero">
          <div>
            <Spotlight
              className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
              fill="white"
            />
            <Spotlight
              className="h-[80vh] w-[50vw] top-10 left-full"
              fill="purple"
            />
            <Spotlight
              className="left-80 top-28 h-[80vh] w-[50vw]"
              fill="blue"
            />
          </div>

          <div
            className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
          >
            <div
              className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
            />
          </div>

          <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                Website Building made Easy.
              </p>

              <TextGenerateEffect
                words="Transforming Concepts into Seamless User Experiences"
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
              />

              <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                Hi! I am Ridhesh W., a Web Developer based in Nepal.
              </p>

              <a
                href="#projects"
                className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

                <span
                  className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 `}
                >
                  Show my work
                  <FaLocationArrow />
                </span>
              </a>
            </div>
          </div>
        </div>

        <h1 className="heading" id="cert">
          A small selection of{" "}
          <span className="text-purple">Verified Certificates</span>
        </h1>
        <br></br>
        <AddGrid cert={certificates}></AddGrid>

        <a href="#projects">
          <img
            className="w-full"
            src="/bento.png"
            alt="Your best option for a dev"
          />
        </a>
        <div id="projects">
          <div className="py-20">
            <h1 className="heading">
              A small selection of{" "}
              <span className="text-purple">recent projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
              {files.map((item, i) => (
                <a href={item.url} target={"_blank"} key={i}>
                  <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                    <PinContainer title={item.url} href={item.url}>
                      <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                        <div
                          className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                          style={{ backgroundColor: "#13162D" }}
                        >
                          <Image
                            src={`https://placehold.co/500x400/png?text=${item.name}`}
                            width={1080}
                            height={1920}
                            alt="bgimg"
                          />
                        </div>
                      </div>

                      <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                        {item.name}
                      </h1>

                      <p
                        className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                        style={{
                          color: "#BEC1DD",
                          margin: "1vh 0",
                        }}
                      >
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between mt-7 mb-3">
                        {item.archived == true && (
                          <div className="flex items-center badge">
                            Archived
                          </div>
                        )}

                        <div className="flex justify-center items-center">
                          <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                            Check Live Site
                          </p>
                          <FaLocationArrow className="ms-3" color="#CBACF9" />
                        </div>
                      </div>
                    </PinContainer>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <footer className="w-full pt-20 pb-10" id="contact">
          <div className="w-full absolute left-0 -bottom-72 min-h-96">
            <Image
              width={1080}
              height={1920}
              src="/footer-grid.svg"
              alt="grid"
              className="w-full h-full opacity-50 "
            />
          </div>

          <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
              Ready to take <span className="text-purple">your</span> digital
              presence to the next level?
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">
              Reach out to me today and let&apos;s discuss how I can help you
              achieve your goals.
            </p>
            <a href="mailto:walavalkarridhesh@gmail.com">
              <button className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

                <span
                  className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
                >
                  Let's get in touch
                  <FaLocationArrow />
                </span>
              </button>
            </a>
          </div>
          <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light">
              Copyright © 2024 Ridhesh W.
            </p>

            <div className="flex items-center md:gap-3 gap-6">
              {socialMedia.map((info) => (
                <a
                  href={info.href}
                  key={info.id}
                  target="_blank"
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  <Image src={info.img} alt="icons" width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Home;
