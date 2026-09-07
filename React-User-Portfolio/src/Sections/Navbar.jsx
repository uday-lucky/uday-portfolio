import { useEffect, useState } from 'react'
import { MobileMenu } from './MobileMenu'


function Navbar({ isMenuOpen, setIsMenuOpen }) {
useEffect(()=>{
  document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
})
  return (
<nav className={isMenuOpen ? "fixed top-0 w-full h-16 text-white z-40  bg-[rgba(10,10,10,0.8)] " : "opacity-100 w-full fixed backdrop-blur-lg shadow-md duration-300" }  >
<div className="flex max-w-4xl justify-between items-center mx-auto  border-b-0 border-gray-700 px-10 py-4">
<a href="#Home" className="text-white-500 text-lg font-regular">U K</a>

<div className=" md:hidden relative w-7 h-5 focus:outline-none cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>

  &#9776;
</div>


<div className="hidden md:flex items-center justify-between space-x-4">
<a href="#Home" >Home</a>
<a href="#About">About</a>
<a href="#Skills">Skills</a>
<a href="#Projects">Projects</a>
<a href="#Contact">Contact</a>
</div>
</div>

</nav>
    
  )
}

export default Navbar