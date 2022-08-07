import React from 'react'
import "./card.css"
import { MdDeveloperMode} from 'react-icons/md';
import { FaLaptopCode} from 'react-icons/fa';
import Maincards from './maincards';
var lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, sapiente illo quod, reprehenderit dolores maxime, eos accusantium voluptate eaque necessitatibus tempore ratione debitis vitae. Ex fuga totam veritatis veniam magnam!";
export default function card() {
  return (
    <section className='cards' id='services'>
<h2 className='title'>Services</h2>
<div className='content'>
<Maincards icon={<MdDeveloperMode/>} service="Développeur Mobile" paraghraphe={lorem} />
<Maincards icon={<FaLaptopCode/>} service="Développeur Web" paraghraphe={lorem} />
</div>
    </section>
  )
}
