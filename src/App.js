import './App.css'
import Navbar from './component/Navbar';
//字型套件
import 'typeface-quicksand';
import { BrowserRouter as Router, Route, Link,Routes  } from "react-router-dom";



//Contact
import Contact from './page/Contact';
//project
import Project from './page/Project';
import Home from './page/home';
//reseum
import Reseum from './page/Reseum';

function App() {
  return (
   <>
   <Router>
    <Navbar/>
 
    <Routes >
        <Route>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
        <Route>
          <Route path="/project" element={<Project/>}/>
        </Route>
        <Route>
          <Route path="/" element={<Home/>}/>
        </Route>
    </Routes>
    </Router>
    
   </>
  );
}

export default App;
