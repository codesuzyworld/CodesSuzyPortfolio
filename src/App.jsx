import './App.css'
import Header from "./components/Header"
import Footer from  "./components/Footer"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


//page content components
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  console.log("App is rendering");
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <About /> 
      <Projects /> 
      <Skills />
      <Footer />
    </BrowserRouter>
  )
}

export default App

