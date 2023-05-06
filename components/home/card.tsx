import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import { Github } from "../shared/icons";

export default function Card({
  title,
  description,
  coverImage,
  demoLink,
  repoLink,
  technologies,
}: {
  title: string;
  description: string;
  coverImage: string;
  demoLink: string;
  repoLink: string;
  technologies: Array<string>;
}) {
  return (
    <div className="relative h-96 overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-md">
      <div>
        <h2 className="mb-3 bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
          <Balancer>{title}</Balancer>
        </h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="w-full">
            <Image
              alt="Auth.js logo"
              src={coverImage}
              width={250}
              height={250}
            />
          </div>
          <div className="w-full">
            <div className="prose-sm -mt-2 mb-4 leading-normal text-gray-500 md:prose">
              {description}
            </div>
            <div className="mb-3 flex flex-wrap">
              {technologies.map((technology) => (
                <div
                  key={title + "_" + technology}
                  className="mx-1 mb-1 w-fit cursor-pointer rounded-full bg-red-100 px-2 text-sm text-gray-700 transition-all duration-150 hover:bg-red-200"
                >
                  {technology}
                </div>
              ))}
            </div>
            <div className="flex text-sm">
              <a className="flex rounded-full items-center justify-center bg-black text-white space-x-2 px-4 mr-3" href={demoLink}
                target="_blank"
                rel="noopener noreferrer">Demo</a>
              <a
                className="flex h-10 max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-gray-600 shadow-md transition-colors hover:border-gray-800"
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
                <p>Source code</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
