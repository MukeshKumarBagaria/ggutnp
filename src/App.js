import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Graduating from "./Pages/Graduating";
function App() {
  return (
    <>
 <Router>
   <Routes>
    <Route  path='/' element={ <HomePage/>}/>
    <Route  path='/about' element={ <About/>}/>
    <Route  path='/graduating-batch' element={ <Graduating/>}/>


   </Routes>
 </Router>
    </>
    
   
  );
}

export default App;
