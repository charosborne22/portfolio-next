import Seo from "../components/seo";
import Socials from "../components/socials";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Charlotte from "../public/charlotte.gif";

import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Seo
        title="Charlotte Osborne - Front-end Developer Portfolio"
        description="Description"
      />
      <Header
        title="Charlotte Osborne"
        subtitle="Front-end Developer"
        description="Hi! I'm Charlotte and I'm a Front-end Web Developer from Peterborough, Ontario. I first developed an interest in programming while I was studying chemistry at Trent University and took several computer science courses. After graduating Trent I went on to study Web Design at McMaster University and graduated in April 2021. When I'm not working on web development things you'll find me reading or playing games."
        link="Let's Chat"
        url="/contact"
      />
      <Socials />
      <section className="my-10">
        <figure>
          <Image
            src={Charlotte.src}
            alt="Animation of Charlotte drinking coffee"
            width={300}
            height={300}
            object-fit="cover"
            className="mx-auto rounded-lg"
            priority={true}
          />
          <figcaption className="pt-2 text-gray-800 dark:text-gray-200 text-center text-sm">
            Image by{" "}
            <Link
              href="https://www.instagram.com/____.milk.____/"
              className="underline"
              target="_blank"
            >
              Kyle Velez
            </Link>
          </figcaption>
        </figure>
      </section>
      <Skills />
      <Projects />
    </div>
  );
}
