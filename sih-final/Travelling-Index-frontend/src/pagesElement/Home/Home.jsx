import React from 'react'
import homeImage from '../../assets/homeBanner.png'
import './Home.css'
import InnerHome from '@/propPages/InnerHome'
function Home() {
  return (
    <> 
    <div className="image-home-area">
        <div className="image-section px-10 pt-10">
            <img className=' rounded-md' src={homeImage} alt="" />
        </div>
        <div className="information-home-image-section px-10 w-[92rem] flex justify-center items-center">
            <div className="poper-info-home flex justify-evenly items-center h-[6rem] bg-[#070f2be8] w-[67rem] rounded-md ">
              <InnerHome Headlines='Location:' Information='Mysore , Karnataka' />
              <InnerHome Headlines='Date:' Information='27-09-25' />
              <InnerHome Headlines='Description:' Information='Royal Heritage' />
              <InnerHome Headlines='Month:' Information='September' />
            </div>
        </div>
    </div>
    </ >
  )
}

export default Home