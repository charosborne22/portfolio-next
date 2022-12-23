import Banner from "./banner";
import { useState } from "react";
import Footer from "./footer";

export default function Layout({ children}: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen px-4 ${darkMode ? "dark bg-gray-900 " : ""}`}>
      <Banner darkMode={darkMode} setDarkMode={setDarkMode} />
      <main id="content" className="max-w-7xl mx-auto min-h-[80vh]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
