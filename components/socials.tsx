import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faCodepen,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Socials() {
  const links: { name: string; url: string; icon: any }[] = [
    {
      name: "GitHub",
      url: "https://github.com/charosborne22",
      icon: faGithub,
    },

    {
      name: "Codepen",
      url: "https://codepen.io/charlotteosborne/pens/public",
      icon: faCodepen,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/charlotte-osborne-bb5a591a6/",
      icon: faLinkedin,
    },
  ];
  return (
    <nav className="mt-5">
      <ul className="flex gap-3 w-100 justify-center">
        {links.map((link, index) => (
          <li className="w-5 h-5" key={index}>
            <Link
              href={link.url}
              target="_blank"
              title={link.name}
              className="dark:text-white"
            >
              <FontAwesomeIcon icon={link.icon} />
              <span className="sr-only">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
