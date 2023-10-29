import React from 'react'
import "./Plans.css";
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
// this plans data is also an array of objects that contains icon img, name, price, features 


const Plans = () => {
  return (
    <div className="plans-container">
        <div className="blur blur-p-1"></div>
        <div className="blur blur-p-2"></div>
        <div className="programs-header" style={{gap:'2rem'}}>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITH US</span>
        </div>

        {/* Plans Card */}
        <div className="plans">
            {plansData.map((plan,i)=>(
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>
                    {/* since feature also have another array within, we'll again fetch data using key function*/}
                    <div className="features">
                        {plan.features.map((features,i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{features}</span>
                            </div>
                        ))}
                    </div>
                    <div><span>See more benifits </span></div>
                    <button className="btn">Join Now</button>
                </div>
            ))}
        </div>


    </div>
  )
}

export default Plans