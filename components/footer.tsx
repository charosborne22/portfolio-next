import Link from "next/link";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center dark:text-gray-200 py-6">
      <address className="text-base not-italic flex items-center gap-2">
        <FontAwesomeIcon icon={faLocationPin} className="w-3 h-3" />{" "}
        Peterborough, ON
      </address>
      <Link href="/privacy-policy" className="underline my-3">
        Privacy Policy
      </Link>
      <p>
        Copyright &copy; {currentYear} <Link href="/">Charlotte Osborne</Link>
      </p>
    </footer>
  );
}
