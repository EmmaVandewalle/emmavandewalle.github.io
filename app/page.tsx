import {Intro} from "@/app/components/Intro";
import {Projects} from "@/app/components/Projects";
import {Experience} from "@/app/components/Experience";
import {About} from "@/app/components/About";
import {Footer} from "@/app/components/Footer";
import {Navigation} from "@/app/components/Navigation";
import {Contact} from "@/app/components/Contact";

export default function Home() {
  return (
      <div className="min-h-screen bg-background">
          <Navigation />
          <main>
              <Intro />
              <About />
              <Projects />
              <Experience />
              <Contact />
          </main>
          <Footer />
      </div>
  );
}
