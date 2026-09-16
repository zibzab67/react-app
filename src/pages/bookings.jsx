
import { useLocation } from "react-router-dom"
import '../bookings.css'

function Bookings(){
    const location = useLocation()
    const vehicle = location.state?.vehicle;

    return(
        <>
        <h3>bookings</h3>
        {
           vehicle&&(
            <div>
                <img src= {vehicle.img}></img>
                <div>
                    {vehicle.name}
                    <h3>{vehicle.id}</h3>
                </div>
            </div>
           )
        }
        
        </>
    )
    
    
}
export default Bookings