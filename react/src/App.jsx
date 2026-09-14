import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Reserve from './components/Reserve'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Events />
        <Gallery />
        <Reserve />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App