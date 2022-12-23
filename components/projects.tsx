import Image from "next/image";
import Link from "next/link";
import Weather from "../public/projects/weather-app.png";
import MessageBoard from "../public/projects/message-board.png";
import OrchidTheme from "../public/projects/orchid-theme.png";
import TE from "../public/projects/the-edited.png";
import SharingLight from "../public/projects/sharing-light.png";
import BHF from "../public/projects/behavioral-health-foundation.png";
import { motion } from "framer-motion";

export default function Projects() {
  const projects: {
    title: string;
    description: string;
    liveLink?: string;
    gitHub?: string;
    img: any;
  }[] = [
    {
      title: "Weather App",
      description: "React.js + Weather Api",
      liveLink: "https://react-weather-app-sage.vercel.app/",
      gitHub: "https://github.com/charosborne22/react-weather-app",
      img: Weather,
    },
    {
      title: "Message Board",
      description: "Next.js + Firebase",
      liveLink: "https://next-firebase-message-board.vercel.app/",
      gitHub: "https://github.com/charosborne22/next-firebase-message-board",
      img: MessageBoard,
    },
    {
      title: "Orchid WordPress Theme",
      description: "Classic WordPress Theme",
      gitHub: "https://github.com/charosborne22/orchid-classic-wordpress-theme",
      img: OrchidTheme,
    },
    {
      title: "The Edited",
      description: "WordPress Theme Development and WooCommerce Integration",
      liveLink: "https://theedited.ca/",
      img: TE,
    },

    {
      title: "Sharing Light",
      description: "Next.js + hygraph",
      liveLink: "https://sharinglight.ca",
      img: SharingLight,
    },
    {
      title: "Behavioral Health Foundation",
      description: "WordPress Theme Development",
      liveLink: "https://behavioralhealthfoundation.org/",
      img: BHF,
    },
  ];
  return (
    <section className="my-10">
      <h2 className="text-2xl py-2 text-center dark:text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-4">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            key={index}
          >
            <Image
              src={project.img}
              width={400}
              height={300}
              alt={project.title}
              className="mx-auto lg:mx-1 w-[400px] h-[300px] object-cover"
            />
            <div className="text-center">
              <h3 className="text-xl dark:text-white">{project.title}</h3>
              <h4 className="text-gray-800 dark:text-gray-200 my-2">
                {project.description}
              </h4>
              {project.gitHub && (
                <Link
                  href={project.gitHub}
                  target="_blank"
                  className="underline dark:text-gray-200"
                >
                  Code
                </Link>
              )}
              {project.gitHub && project.liveLink && (
                <span className="text-gray-800 dark:text-gray-200"> / </span>
              )}
              {project.liveLink && (
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="underline dark:text-gray-200"
                >
                  Live
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
