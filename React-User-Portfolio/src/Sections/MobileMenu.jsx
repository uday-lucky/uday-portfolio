export const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
    return (

        <div className={isMenuOpen ? "flex  md:hidden h-screen w-full px-10 py-4 opacity-100 flex-col  bg-[rgba(10,10,10,,0.8)] transition-all duration-300 ease-in-out text-white " : "hidden"}>
           
            <button className=" absolute z-40 top-4 right-14 text-white text-2xl  cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                &times;
            </button>  
            <div className="flex flex-col space-y-4 mt-10 text-lg">
            <a href="#Home" className={isMenuOpen ? 'translate-y-5' : 'translate-y-0'} onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#About" className={isMenuOpen ? 'translate-y-5' : 'translate-y-0'} onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="Skills" className={isMenuOpen ? 'translate-y-5' : 'translate-y-0'} onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#Projects" className={isMenuOpen ? 'translate-y-5' : 'translate-y-0'} onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#Contact" className={isMenuOpen ? 'translate-y-5' : 'translate-y-0'} onClick={() => setIsMenuOpen(false)}>Contact</a> 
            </div>    
            
        </div>
      
    )
}
            
           
       
    
    