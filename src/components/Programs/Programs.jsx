import React from 'react'
import './Programs.css';
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';

// Programs of data is an array of objects where we have key values of image, heading, details 

const Programs = () => {
  return (
    <div className="Programs" id="programs">
        {/* hearder */}
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        <div className="program-categories">
            {/* here we'll iterate through programs data using maps and we'll return some jsx and well return div with class category! */}

            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow}></img>
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Programs