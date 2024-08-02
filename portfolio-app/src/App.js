import './App.css';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import About from './component/About';
import Skils from './component/Skils';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


/* function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
 */


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/skils' element={<Skils/>}/>
              <Route path='/project' element={<Project/>}/>
              <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;