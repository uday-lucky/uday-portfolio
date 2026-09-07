import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './Sections/Navbar'
import { MobileMenu } from './Sections/MobileMenu'
import { Contact } from './Sections/Contact'
import { About } from './Sections/About'
import { Home } from './Sections/Home'
import { Skills } from './Sections/Skills'

function App() {
  
const [isMenuOpen, setIsMenuOpen] = useState(false)
  return <div>
    <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    <Home />
    <About />
    <Skills />
    <Contact />
  </div>
}

export default App
