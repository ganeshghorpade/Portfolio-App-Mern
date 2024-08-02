
import React from 'react';
import img from './img-abt.png';

const About = ()=>{
    
    return(
    <>
        <div className="row container-fluid mx-auto mt-5" id="abt-sty" >
            <div className="col col-lg-6 col-sm-12 col-12">
                <div><img src={img} alt="" id="hex-abt" className="img-fluid"></img></div>
            </div>
            <div className=" col col-lg-6 col-sm-12 col-12" id="about-box">
                <div>
                    <h1 id="db">About Me</h1>
                    <div className="about">
                    <i>
                    "Hello, I'm Ganesh Ghorpade, a Computer Engineering graduate with a passion for crafting innovative digital solutions. With a solid foundation built through my BE specialization and diploma in Computer Engineering, achieving CGPAs of 8.39 and 7.93 respectively, I bring a blend of academic excellence and practical skills to the table. Proficient in a range of frontend technologies including HTML, CSS, JavaScript, Bootstrap, and React, alongside backend expertise in Node.js, Express.js, Java, and Python, I thrive in creating dynamic and responsive web applications. My proficiency extends to database management with expertise in MongoDB and MySQL. Let's collaborate and bring your digital ideas to life!"
                    </i>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default About;