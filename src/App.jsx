import React from 'react'
import {} from "react-dom"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Details from './pages/Details'
import Home from './pages/Home'


function App() {
 
      
  return (<>
 <BrowserRouter>
 <div style={{display:'flex'}}>

 <div>
 <Navbar/>
 </div>
 <div>

 <Routes>
  <Route path='/' element={<Home/>}  />
  <Route path='/details/:id' element={<Details/>}  />
  <Route path='*' element={<h1>Page Not Found</h1>}  />
 </Routes>
 </div>
 
 </div>
 
 </BrowserRouter>
 

  

 
  
</>


  )
}

export default App