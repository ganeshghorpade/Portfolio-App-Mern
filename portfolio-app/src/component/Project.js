import React from "react";
import img1 from './img-p1.png';
import img2 from './img-p2.png';
import v1 from './e-com-P3.jpg';

const Project = ()=>{
    return (
      <>
        <div className="container mt-3 pt-3 ">
          <div className="row  pro-boxx">
            <div className=" skil-sty h1 fw-bold mt-5">Projects</div>
        <div className="text-center mt-2">
        <div className="card mb-3 pro-box box-s">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={img1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8 ">
                  <div className="card-body con-sty1">
                    <h5 className="card-title fw-bolder">TextUtils-App</h5>
                    <p className="card-text">
                    TextUtils is an essential React.js project designed to streamline text manipulation tasks, such as converting text to uppercase or lowercase and removing unnecessary spaces from paragraphs. Leveraging a technology stack that includes HTML, CSS, JavaScript, Node.js, and MongoDB, TextUtils offers a versatile solution for enhancing text formatting etc
                    </p>
                    <p className="card-text">
                    <a href="https://github.com/ganeshghorpade/TextUtils-App" target="_blank" rel="noopener noreferrer" ><small className="text-muted a-sty">Check Now</small></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="card mb-3 pro-box box-s">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={img2} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8 ">
                  <div className="card-body con-sty2">
                    <h5 className="card-title fw-bolder">Bmi-Calculator</h5>
                    <p className="card-text">
                    The BMI (Body Mass Index) Calculator is a web application built using React, a popular JavaScript library for building user interfaces. This application allows users to calculate their BMI based on their height and weight inputs.
                    </p>
                    <p className="card-text">
                    <a href="https://github.com/ganeshghorpade/Bmi-Calculator" target="_blank" rel="noopener noreferrer" ><small className="text-muted a-sty">Check Now</small></a>
                    </p>
                  </div>
                </div>
              
              </div>
            </div>

            <div className="card mb-3 pro-box box-s">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={v1} className="img-fluid rounded-start" alt="..." /> 
                </div>
                <div className="col-md-8 ">
                  <div className="card-body con-sty3">
                    <h5 className="card-title fw-bolder">E-commerce-dashbord</h5>
                    <p className="card-text">
                    The E-Commerce Dashboard is a comprehensive web application developed using HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB. The dashboard includes features such as user registration, login/logout functionality, as well as product addition, update, and search capabilities.
                    </p>
                    <p className="card-text">
                    <a href="https://github.com/ganeshghorpade/E-commerce-dashbord" target="_blank" rel="noopener noreferrer" ><small className="text-muted a-sty">Check Now</small></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
          </div>
        </div>
      </>
    );
}

export default Project;