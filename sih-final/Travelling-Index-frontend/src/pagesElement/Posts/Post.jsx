import React from 'react'
import { Badge } from "@/components/ui/badge"
import { IoStarSharp } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { BsAirplaneFill } from "react-icons/bs";
import displayImage1 from '../../assets/displayImage1.jpg'
import displayImage2 from '../../assets/displayImage2.jpg'
import displayImage5 from '../../assets/displayImage5.jpg'
import displayImage4 from '../../assets/displayImage4.jpg'
import displayImage6 from '../../assets/displayImage6.jpg'
import InnerPost from '@/propPages/InnerPost';


function Post() {
  return (
    <>
    <InnerPost displayImage1={displayImage1} displayImage2={displayImage2} displayImage4={displayImage4} displayImage5={displayImage5} displayImage6={displayImage6} Time=' 1 Year Ago' Area='Mysore , Karnataka' Description='Mysore, often called the "City of Palaces", is a charming city in Karnataka, India, known for its rich cultural heritage and royal legacy. Famous for the magnificent Mysore Palace, the city beautifully blends history, tradition, and modernity. It’s a hub of art, silk, and sandalwood crafts, and comes alive during the vibrant Dasara festival, celebrated with grandeur and enthusiasm. Surrounded by serene gardens, historic temples, and bustling markets, Mysore offers a perfect mix of tranquility and cultural vibrancy for visitors and locals alike.' Country='India' State='Karnataka' ExactLocation='Mysore , Karnataka' ThingsToTakeCareOf='While visiting Mysore, dress modestly when entering temples and historic sites, and stay hydrated in the warm climate. Plan your visits early to avoid crowds at popular attractions like Mysore Palace and Chamundi Hills. Respect local traditions, and shop wisely in markets for authentic silk and sandalwood products.' RecommandThisPlace='Yes' />
    </>
  )
}


export default Post