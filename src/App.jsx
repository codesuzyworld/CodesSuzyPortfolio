import './App.css'
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from  "./components/Footer"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contacts from "./components/Contacts"

function App() {
  return (
    <>
    <div className="app-container">
      <Header />
      <Hero/> 
      <About/> 
      <Skills/>
      <Projects/>
    </div>
    <Footer/>
    </>
  )
}

export default App

