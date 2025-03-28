import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Services from "./components/Services"
import Process from "./components/Process"
import Packages from "./components/Packages"
import Projects from "./components/Projects"
import CTA from "./components/CTA"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        {/* <Stats /> */}
        <Services />
        <Process />
        <Packages />
        <Projects />
        <CTA />
        {/* <Newsletter /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App

