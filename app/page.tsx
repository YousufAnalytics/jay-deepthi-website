import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import HomeSolutions from "./components/sections/HomeSolutions";
import ProcessSection from "./components/sections/ProcessSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeSolutions />
      <ProcessSection />
    </>
  );
}
