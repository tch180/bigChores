import React from "react";
import pic1 from '../assets/children-chores.jpg'
import pic2 from '../assets/image-20160929-27026-zawx70.jpg'
import pic3 from '../assets/family-chores.jpg'
import { BsArrowRight} from 'react-icons/bs'

function LandingCarousel() {
  return (
    <div className='container-fluid'>
      <div className='test row align-items-center ' >
        <img className=' col-md-6 float-md-start mt-0 img-fluid mt-5'  src={pic2} alt="girl-doing-dishes"/>
        <div className="textWrapper col-sm-4 ">
        <h1 style={{fontSize:"82px" }}>Big<span style={{color:'linear-gradient(45deg, #f3ec78, #af4261)'}}> Chores</span></h1>
        <h3>CHORES FROM SMALL TO BIG, REWARDS<br/> FOR ALL</h3>
        <button className="btn btn-danger rounded " onClick={()=>console.log("LearnMore Clicked")}> <a href='/login'> Check It Out !</a> <BsArrowRight/> </button>

        </div>
      

      </div>

    </div>
  );
}

export default LandingCarousel;
