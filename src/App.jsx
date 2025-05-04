import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import VoluntaryWork from './pages/VoluntaryWork';
import Education from './pages/Education';
import LanguagesAndExtras from './pages/LanguagesAndExtras';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      <Header />

      <section id="home">
        <Home />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="voluntary-work">
        <VoluntaryWork />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="languages">
        <LanguagesAndExtras />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <Footer />
    </div>
  );
}

export default App;