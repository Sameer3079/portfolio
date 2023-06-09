import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import LinkedIn from "@/components/shared/icons/linkedin";
import Mail from "@/components/shared/icons/mail";

const emailLink = "mailto:smrbasil4@gmail.com";

export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/steven-tey/precedent",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 60 seconds
      next: { revalidate: 60 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-red-900 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Hi, I{`'`}m Sameer <br /> a Full-stack Engineer
          </Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>5+ years of experience</Balancer>
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href={emailLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail />
            <p>Contact me</p>
          </a>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/Sameer3079"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>GitHub Profile</p>
          </a>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-cyan-900 px-5 py-2 text-sm text-white shadow-md transition-colors hover:border-gray-800"
            href="https://www.linkedin.com/in/sameer-basil-b5961a49/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
      <div className="my-10 grid w-3/4 animate-fade-up grid-cols-1 gap-5 px-5">
        {projects.map(
          ({
            name,
            description,
            coverImage,
            demoLink,
            repoLink,
            technologies,
          }) => (
            <Card
              key={name}
              title={name}
              description={description}
              coverImage={coverImage}
              demoLink={demoLink}
              repoLink={repoLink}
              technologies={technologies}
            />
          ),
        )}
      </div>
    </>
  );
}

const projects = [
  {
    name: "Chat Room",
    description: `A simple unauthenticated global chat room. Supports sending images, infinite scrolling, and optimistic updates for faster responsiveness.`,
    coverImage: "/chat-room-cover-image.png",
    technologies: [
      "Next JS",
      "React JS",
      "tRPC",
      "React Query",
      "TypeScript",
      "MongoDB",
      "AWS S3",
    ],
    demoLink: "https://chat-room-ten-gules.vercel.app",
    repoLink: "https://github.com/Sameer3079/chat-room",
  },
  {
    name: "Adeptus Notes - A Modern Notes app",
    description: "A highly customizable notes & journal app",
    coverImage: "",
    technologies: [],
    demoLink: "",
    repoLink: "",
  },
  {
    name: "To do app",
    description:
      "A privacy focused simple to-do app that stores all-data locally.",
    coverImage: "",
    technologies: [],
    demoLink: "",
    repoLink: "",
  },
];
