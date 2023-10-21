import hamburgerMenu from "../../public/assets/hamburgerMenu.svg";
import React from 'react'

export default function Hamburger() {
  return (
    <div className="lg:hidden flex">
    <div className="p-3">
        <img src={hamburgerMenu} width={24} height={24} alt="menu icon"/>
    </div>

</div>
  )
}
