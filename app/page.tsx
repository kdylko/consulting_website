import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Cases />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}

