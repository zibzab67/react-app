import '../vehicles.css'
import {useState} from 'react'
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'



function Vehicles(){
    const[vehicles, setvehicles] = useState([])
    const[filter, setfilter]= useState("all")
    const Navigate = useNavigate();

    

    useEffect(()=>{
        setvehicles([{
        id : 1,    
        img :"images.jpg",
        rent : 1000,
        name : "BMW M5 Competition",
        catagory : "car",

    },{
        id : 2,
        img : "images.jpg",
        rent : 1000,
        name : "BMW M5 Competition",
        catagory : "car",
    },
     {
        id : 3,
        img : "bikes.jpg",
        rent : 200,
        name : "ns200",
        catagory : "bike",
     },
    {
        id : 4,
        img : "bikes.jpg",
        rent : 200,
        name : "ns200",
        catagory : "bike",

    }])
    console.log("items mounted");
    }, [])
    
    
    function handlebooking(vehicle){
        const v_id = vehicle.id
        Navigate(`/Bookings/${v_id}`,{
            state:{
                vehicle : vehicle

            }
        });
         


        
    };



    



    return(
        <>
        <header>
            <h1 className="hh1">You'd Love to Ride</h1>
            <h3 className="hh3">Drop a gear, and Dissappear</h3>
        </header>

        <div className="vehicle-filter">
            <select value={filter} onChange = {(e)=>{setfilter(e.target.value)}}>
                <option value="all" >all</option>
                <option value="car" >Cars</option>
                <option value="bike">Bikes</option>
                
            </select>
        </div>
        

        <div className="rendered-vehicles" >
            {
              vehicles.filter((vehicle)=>{
               return filter === "all" || vehicle.catagory === filter;
                }).map((vehicles)=>{
                    return(
                        
                    <div className="vehicle-div" key={vehicles.id}>
                        <img src={vehicles.img}></img>
                        <div>
                            {vehicles.name}

                          </div>
                          <div>
                            {vehicles.rent}
                          </div>
                          <button className = "book-btn" onClick={() => handlebooking(vehicles)} >book now</button>

                    </div>

                        
                    )

                })
            }
        </div> 

        </>
                   
    )
}
export default Vehicles
