import Navbar from "../components/layout/Navbar";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";

 

export default function Home() {
  return (
    <main className="bytespace-grid min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Features/>
    </main>
  );
}