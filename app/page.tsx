"use client";

import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Projects from "./components/Projects";
import PreLoader from "./components/PreLoader";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // Check if document is already loaded
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      // Listen for the load event
      const handleLoad = () => {
        setIsLoading(false);
      };

      window.addEventListener("load", handleLoad);

      // Cleanup event listener
      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);
  if (isLoading) {
    return <PreLoader />;
  }
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Info />
      <Footer />
    </div>
  );
}
