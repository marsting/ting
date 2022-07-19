import './App.css'
import Navbar from './component/Navbar';
import Footer from './component/Footer';


//字型套件
import 'typeface-quicksand';
import { BrowserRouter as Router, Route, Link,Routes  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



import Home from './page/home';
//Contact
import Contact from './page/Contact';
//project
import Project from './page/Project';
import ProjectCoffee from './page/ProjectCoffee';
import ProjectBurner from './page/ProjectBurner';
//reseum
import Reseume from './page/Reseume';


function App() {
  
  return (
   <>
   <main>
   <Router>
 
    <Navbar/>
    <Routes >
        <Route>
          <Route path="/reseume" element={<Reseume/>}/>
        </Route>
        <Route>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
        <Route>
          <Route path="/project/coffee" element={<ProjectCoffee/>}/>
        </Route>
        <Route>
          <Route path="/project/burner" element={<ProjectBurner/>}/>
        </Route>
        <Route>
          <Route path="/project" element={<Project/>}/>
        </Route>
        <Route>
          <Route path="/ting" element={<Home/>}/>
        </Route>
    </Routes>
    </Router>
    <Footer/>
    
    </main>
   </>
  );
}

export default App;
