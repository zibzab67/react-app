import{BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavLink } from "react-router-dom";
import {Link} from 'react-router-dom'
import '../nav.css'
function Nav(){

    return(
        <>
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Vehicles">Vehicles</NavLink>
            <NavLink to="/Bookings/:id">Bookings</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>

        
        
        </>
    )
}
export default Nav