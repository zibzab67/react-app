import '../home.css'



function Home(){
    
    return(
        
            <>
            <header className="the-header">
            
            
            
            <h3 className="H3">Rent VEHICLE</h3>
            

            <div className= "container-div">
               <h1>Find your "Perfect Ride"</h1>
               <h2>Cars, bikes, scooters — book in minutes. No hidden fees, full insurance, instant confirmation.</h2> 
            </div>

            <div className= "input-div">
                <input type="date"></input>
                <input type="text" placeholder="Enter your location"></input>
                <button className="subbtn">submit</button>
            </div>
        </header>
        <footer>
             
            
        </footer>
        
            </>
        )

    
}


export default Home
