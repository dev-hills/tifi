import hamburgerMenu from "/public/assets/hamburgerMenu.svg";
import React, { useState } from 'react'

export default function Hamburger() {
  const [open, setOpen] =useState(false)
  return (
    <div className="lg:hidden flex">
    <button onClick={() => setOpen(prev => !prev)} className="p-3">
        <img src={hamburgerMenu} width={24} height={24} alt="menu icon"/>
    </button>

</div>
  )
}
