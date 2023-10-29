import React from 'react'
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';
// this contains images and array of objects.
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png'
import { useState } from 'react';
import { motion } from 'framer-motion'

const Testimonials = () => {
  //defiing the state of transition
  const transition = {type: 'spring', duration: 3}

  // here we will use useState hook of react
  const[selected, setSelected] = useState(0);
  // selected is the index of the current selected review and useState hook is used that takes bydefault 0th index.
  const tLength  =testimonialsData.length;
  // this checks the length of the review
  return (
    <div className="Testimonials">
        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>What they</span>
            <span>say about us</span>
            <motion.span
            key={selected}
            initial={{ opacity: 0, x:-100 }}
            animate = {{ opacity:1, x: 0 }}
            exit = {{opacity:0, x:100}}
            transition={ transition }
            >
              {testimonialsData[selected].review}
            </motion.span>
            <span>
              <span style={{color: 'var(--orange)'}}>
                {testimonialsData[selected].name}
                </span>{" "}
                - {testimonialsData[selected].status}
              </span>
        </div>
        <div className="right-t">
          <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration:2 }}
          whileInView = {{ opacity:1, x:0 }}>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, x:100 }}
          transition={{ ...transition, duration:2 }}
          whileInView = {{ opacity:1, x:0 }}>
          
          </motion.div>

          <motion.img 
          key={selected}
          initial={{ opacity: 0, x:100 }}
          animate = {{ opacity:1, x: 0 }}
          exit = {{opacity:0, x:-100}}
          transition={ transition }
          src={testimonialsData[selected].image} alt="" />
          <div className="arrows">
            <img 
            onClick={() => {
              selected === 0
              ? setSelected(tLength -1)
              : setSelected((prev) => prev-1);
              // so, what's happening here se.. on clicking left arrow, if its already the first img, it will take you to the last one and if not- it will take you to the previous one!
            }}
            src={leftArrow} alt="" />
            <img 
            onClick={()=> {
              selected===tLength-1
              ? setSelected(0)
              : setSelected((prev) => prev+1);
              //so here, if it is already the last testimonial, then we press next, it will give the first testimonial again(0th index) and if not, then it will give the next testimonial.
            }}
            src={rightArrow} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Testimonials