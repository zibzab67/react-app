
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import Vehicles from './pages/vehicles.jsx'
import Bookings from './pages/bookings.jsx'
import Nav from './pages/nav.jsx'
import Contact from './pages/contact.jsx'


import {Link} from 'react-router-dom'


function App() {
  

  return (
    <>
    
  
    <BrowserRouter>
    <Nav className="navbar" />
    
      <Routes>
        <Route path = "/" element={<Home />} className="route"></Route>
        <Route path ="/contact" element={<Contact />} className="route"></Route>
        <Route path = "/Vehicles" element={<Vehicles />} className="route"></Route>
        <Route path = "/Bookings/:id" element={<Bookings />} className="route"></Route>
      </Routes>
      
    </BrowserRouter>
    
    </>
   )
}

export default App
