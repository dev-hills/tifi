import {Image} from "astro:assets";
import hamburgerMenu from "../../public/assets/hamburgerMenu.svg";
import React from 'react'

export default function Hamburger() {
  return (
    <div class="lg:hidden flex">
    <div class="p-3">
        <Image src={hamburgerMenu} width={24} height={24} alt="menu icon"/>
    </div>

</div>
  )
}
