import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Projects from "./components/Projects";

export default function Home() {
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
