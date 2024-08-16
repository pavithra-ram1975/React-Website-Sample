import React from "react";
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Landing from "./components/Landing/Landing";
import Header from "./components/Header/Header";

const App =()=>{
  return(
    <BrowserRouter>
    <Routes>
     
      {/* <Route path="/" element={<Signup/>}></Route>
      <Route path="/Login" element={<Signin/>}></Route>  */}
      <Route path="/Home" element={<Landing/>}></Route>
      <Route path= "/" element = {<Header/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App;