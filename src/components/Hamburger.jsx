import hamburgerMenu from "../../public/assets/hamburgerMenu.svg";
import React, { useState } from 'react'
import { Image } from "astro:assets";
import ArrowDown from "../../public/assets/arrow-down.svg";


export default function Hamburger() {
  const [open, setOpen] = useState(false)
  const handleModal = () => {
    setOpen(prev => !prev)
    console.log("Hello")
  }
  return (
    <div className="lg:hidden flex">
    <button onClick={handleModal} className={`${open ? "hidden" : "flex"}`}>
        <img src={hamburgerMenu} width={24} height={24} alt="menu icon"/>
      </button>
      
      {open &&
        <div className="absolute">
          
        <ul className='lg:flex pt-4 hidden'>
          <li className='cursor-pointer'><a href="#">About Us</a></li>
          <li className='px-5 cursor-pointer'><a href="/Portfolio">Portfolio</a></li>
          <li className='flex pr-5 cursor-pointer'>
              <select name="" id="">
                
           </select>
          </li>
          <li className='cursor-pointer'><a href="/resources">Resources</a></li>
		</ul>

		<a
			href="/contact"
			className='bg-[#FF601F] text-white py-3 px-5 rounded-lg hover:transform hover:scale-105 hover:duration-700 lg:flex hidden font-bold mr-2'>
			LET'S TALK
		</a>
      </div>}

</div>
  )
}
