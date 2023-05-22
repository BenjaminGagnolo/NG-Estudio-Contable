import { BrowserRouter, Route, Routes} from 'react-router-dom';
import * as React from "react";
//import  NavBar from "../src/components/NavBar/NavBar";
import  Home  from "../src/components/Home/Home";
import About from '../src/components/About/About'
import Contact from '../src/components/Contact/Contact'
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
