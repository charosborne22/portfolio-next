import Link from "next/link";

export interface HeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  link: string;
  url: string;
}

export default function Header({
  title,
  subtitle,
  description,
  link,
  url,
}: HeaderProps) {
  return (
    <header className="text-center">
      <h1 className="text-4xl text-teal-600 text-theme py-2">{title}</h1>
      {subtitle && (
        <h2 className="text-2xl py-2 dark:text-white">{subtitle}</h2>
      )}

      {description && (
        <p className="py-2 text-gray-800 dark:text-gray-200">{description}</p>
      )}

      <Link
        href={url}
        className="underline mb-2 block text-gray-800 dark:text-gray-200"
      >
        {link}
      </Link>
    </header>
  );
}
