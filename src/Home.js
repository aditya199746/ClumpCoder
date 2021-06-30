
import { FaSistrix } from 'react-icons/fa';
import { AiOutlineGlobal } from "react-icons/ai";

function Home() {
  return (
    <div className="App">
      
      <div className="backGround">
        <div className="topNav"><p>Get the latest on out COVID-19 response</p></div>

        <div>
          <div className="right">
            <h5 >Switch to hosting</h5>
           <span> <AiOutlineGlobal style={{color:"black"}} /></span>

          </div>
          
          <div className="center"><h4 >Places to stay</h4></div>

          <div className="flex">
            <div>
              <div>Location</div>
              <div>Where are you going</div>
            </div>

            <div className="vLine"></div>

            <div>
              <div>Check in</div>
              <div>Adds dates</div>
            </div>

            <div className="vLine"></div>

            <div>
              <div>Check out</div>
              <div>Add dates</div>
            </div>

            <div className="vLine"></div>

            <div>
              <div>Guests</div>
              <div>Add guests</div>
            </div>

            <div className="purple"><FaSistrix /></div>
        </div>

        <div className="margin">
          <div style={{fontSize:"50px"}}>
            <p><div>Go</div><div>Near</div></p>
            
            
          </div>
          <div className="capsule">Explore nearby stays</div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
