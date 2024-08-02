
import React, { useState, useEffect } from 'react';
import img from './img-2.png';

const Home = ()=>{
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 10); // Set timeout for 2 seconds
    
        return () => clearTimeout(timer); // Clean up the timer on component unmount
      }, []);


    return(
        <>
        <div className="row container-fluid mt-5 pt-3" id="main-box" >
        <div className=" col col-7" id="text-box">
                <div id="in-div" className={`headline ${isVisible ? 'visible' : ''}`}>
                    <h3 className="display-4 fw-bold"><b>Hi,</b></h3>
                    <h3 className="sty-1 display-4 fw-bold" id="content"><b>i'am Ganesh</b></h3>
                    <h1 className="display-4 fw-bold" id="content"><b>Full Stack Web Developer</b></h1>
                </div>
        </div>

        <div className={`headline1 ${isVisible ? 'visible' : ''} col col-5 imgSet` }>
              <img src={img} alt="" id="hexagon" className="img-fluid"></img>
        </div>
</div>
<button type="submit" className="btn text-light fw-bold box-btn"><a className="b-l" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1CtRfC_Yf4Q2lJZpiO1gT1rIxp6FmS_Bu/view?usp=sharing">Resume</a></button>
</>
    )
}

export default Home;