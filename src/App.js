import React from "react";
import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Graduating from "./Pages/Graduating";
import StudentFaq from "./Pages/StudentFaq";
import Authentication from "./Components/Auth/Authentication/Authentication";
import NotFound from "./Components/404Page/NotFound.js";
import Dashboard from './Pages/Dashboard'
import MainLayout from './layout/MainLayout'
import Blank from './Pages/Blank'
import Opportunity from "./Pages/Opportunity";


function App() {
  return (
    <>
 <Router>
   <Routes>
    <Route  path='/' element={ <HomePage/>}/>
    <Route  path='/about' element={ <About/>}/>
    <Route  path='/graduating-batch' element={ <Graduating/>}/>
    <Route  path='/graduating-batch' element={ <Graduating/>}/>
    <Route path="/student-faq" element={<StudentFaq/>}/>  
    <Route path="/auth" element={<Authentication/>}/>  
    <Route path="*" element={<NotFound/>}/>

    <Route path="/Dashboard" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="Notifications" element={<Blank />} />
                    <Route path="opportunity" element={<Opportunity />} />
                    <Route path="StudyMaterial" element={<Blank />} />
                    <Route path="AlumniNetwork" element={<Blank />} />
                    <Route path="Account" element={<Blank />} />
                </Route>

   </Routes>
 </Router>
    </>
    
   
  );
}

export default App;
