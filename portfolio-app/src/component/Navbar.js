
import React,{ useEffect } from 'react';
import {Link} from  'react-router-dom';

const Navbar = ()=>{
/* const [activeLink, setActiveLink] = useState('Home'); 
 */
/* const handleLinkClick = (link) => {
  setActiveLink(link);
}; */

/* .. */
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

useEffect(() => {
  const handleClick = () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  };
  document.addEventListener('click', handleClick);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark  fixed-top " id="nav-box">
              <div className="container-fluid">
                        <Link className="navbar-brand  mx-3 fw-bold sty" to="/">Ganesh</Link>
                        <button className="navbar-toggler  b-sty " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon navbar-dark"></span>
                        </button>
              <div className="collapse navbar-collapse navbar" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto me-auto mb-2 mb-lg-0 justify-content-right">
                        <li className="nav-item  nav__link s">
                              {/* <li className={activeLink === 'Home' ? 'active' : '' } nav-item active nav__link s> */}
                              <Link
        className="nav-link js-scroll-trigger active mx-2 fw-bolder nav__link" /* onClick={() => handleLinkClick('Home')} */
        aria-current="page"
        to="/"
      >
        Home
      </Link>
                                {/* <Link className="nav-link js-scroll-trigger active mx-2 fw-bolder nav__link "  onClick={() => handleLinkClick('Home') }  routerLinkActive="active_route" aria-current="page" to="/">Home</Link> */}
                              </li>
                              

                              <li className=" nav-item nav__link s">
                              {/* <li className={activeLink === 'Skils' ? 'active' : ''} nav-item nav__link s> */}
                              <Link
        className="nav-link js-scroll-trigger active mx-2 fw-bolder nav__link" /* onClick={() => handleLinkClick('Skils')} */
        aria-current="page"
        to="/skils"
      >
        Skils
      </Link>
                                {/* <Link className="nav-link js-scroll-trigger active mx-2 fw-bolder nav__link" onClick={() => handleLinkClick('Skils')}aria-current="page" to="/skils">Skils</Link> */}
                              </li>
                              <li className="nav-item nav__link s">
                              {/* <li className={activeLink === 'Project' ? 'active' : '' } nav-item nav__link s> */}
                              <Link
        className="nav-link js-scroll-trigger active mx-2 fw-bolder nav__link" /* onClick={() => handleLinkClick('Project')} */
        aria-current="page"
        to="/project"
      >
        Project
      </Link>
                                
                                {/* <Link className="nav-link js-scroll-trigger active mx-2 fw-bolder nav__link" onClick={() => handleLinkClick('Project')} aria-current="page" to="/project">Project</Link> */}
                              </li>
                              <li className="nav-item nav__link s">
                              {/* <li className={activeLink === 'Contact' ? 'active' : '' }nav-item nav__link s> */}
                              <Link
        className="nav-link js-scroll-trigger active mx-2 fw-bolder nav__link" /* onClick={() => handleLinkClick('Contact')} */
        aria-current="page"
        to="/contact"
      >
        Contact
      </Link>
                               {/*  <Link className="nav-link js-scroll-trigger active mx-2 fw-bolder nav__link" onClick={() => handleLinkClick('Contact')}  aria-current="page" to="/contact" >Contact</Link> */}
                              </li>

                              <li className= " nav-item nav__link s">
                              {/* <li className= {activeLink === 'About' ? 'active' : ''} nav-item nav__link s> */}
                              <Link
        className="nav-link js-scroll-trigger active mx-2 fw-bolder nav__link" /* onClick={() => handleLinkClick('About')} */
        aria-current="page"
        to="/about"
      >
        About
      </Link>
                               {/*  <Link className="nav-link js-scroll-trigger active mx-2 fw-bolder nav__link" onClick={() => handleLinkClick('About')} aria-current="page" to="/about">About</Link> */}
                              </li>
                        </ul>
                <div className="mx-5 justify-content-center">
                        <span className="mx-2"><a href="https://www.linkedin.com/ganesh-ghorpade-012456302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" ><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png" alt="linkedin"/></a></span>
                        <span className="mx-2"><a href="https://github.com/ganeshghorpade" target="_blank" rel="noopener noreferrer" ><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/github.png" alt="github"/></a></span>
                        <span className="mx-2"><a href="https://www.youtube.com/@technicalbugg" target="_blank" rel="noopener noreferrer" ><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/youtube.png" alt="youtube"/></a></span>
                        <span className="mx-2"><a href="https://www.youtube.com/@technicalbugg" target="_blank" rel="noopener noreferrer" ><img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1"/></a></span>
                </div>
                </div>
              </div>
        </nav>
      </>
    )
}
export default Navbar;

