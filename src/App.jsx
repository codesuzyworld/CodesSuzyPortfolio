import './App.css'
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from  "./components/Footer"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


//page content components
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Hero /> 
        <About /> 
        <Skills />
        <Projects /> 
        <Footer />
    </BrowserRouter>
  )
}

export default App

