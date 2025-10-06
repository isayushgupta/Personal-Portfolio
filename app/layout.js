"use client";
import React from "react";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
      console.log("Dark mode enabled", html.classList.contains("dark")); // Debug log
    } else {
      html.classList.remove("dark");
      console.log("Dark mode disabled", html.classList.contains("dark")); // Debug log
    }
  }, [isDarkMode]);

  return (
    <html lang="en" className="scroll-smooth">
      {/* <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden bg-white dark:bg-darkTheme transition-colors duration-200`}
      > */}
      {/* <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden bg-white dark:bg-[#11001F] transition-colors duration-200`}
      > */}
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden
    bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200`}
        data-mode={isDarkMode ? "dark" : "light"}
      >
        {React.cloneElement(children, { isDarkMode, setIsDarkMode })}
      </body>
    </html>
  );
}
