import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function Skills() {
  const skills = ["HTML5", "CSS3", "JavaScript", "React", "Next.js"];
  const skills2 = [
    "WordPress",
    "GSAP",
    "Web Accessbility",
    "Tailwind",
    "TypeScript",
  ];
  return (
    <section className="mb-10">
      <h2 className="text-2xl py-2 text-center dark:text-white">Skills</h2>
      <div className="flex justify-between  max-w-xs mx-auto my-3">
        <ul>
          {skills.map((skill, index) => (
            <li
              key={index}
              className="flex items-end text-gray-800 gap-2 dark:text-gray-200"
            >
              <FontAwesomeIcon icon={faCheck} className="w-4 h-4 mb-1" />
              {skill}
            </li>
          ))}
        </ul>
        <ul>
          {skills2.map((skill, index) => (
            <li
              key={index}
              className="flex items-end text-gray-800 gap-2 dark:text-gray-200"
            >
              <FontAwesomeIcon icon={faCheck} className="w-4 h-4 mb-1" />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
