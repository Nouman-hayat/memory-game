import { useState ,useEffect } from "react";
import Grid from "./components/Grid";
import Emptygrid from "./components/Emptygrid";
function App() {
  const [inputvalue, setinputvalue] = useState(4);
  const [btnvalue, setBtnvalue] = useState(false);
  const [second, setsecond] = useState(0);
  const [starttime, setStarttimer] = useState(false);
  const [timerid, setTimerid] = useState(0);
  const [counter, setcounter] = useState(0);
const [imgdata, setimgdata] = useState("?");

  const updatecounter =() =>{
    setcounter(counter+1)
  }
  const updateimg = (data) => {
   setimgdata(data)
  };
  function inputhandle(e) {
   setinputvalue(e.target.value);
  }
  const updatesdata = () => {
   
  
 
  setcounter(0);
    setStarttimer(false);

  };
 
  useEffect(() => {
    let intervalid = null;

    if (starttime) {
      intervalid = setInterval(() => {
        setsecond((prev) => (prev += 1));
      }, 1000);
      setTimerid(intervalid);
    }
    else {
      clearInterval(timerid)
    }
  }, [starttime]);
  
  function setnumber(event) {
     event.preventDefault()
    setBtnvalue(true);
    setStarttimer(true)
    
   
  }
  function stop(event) {
    event.preventDefault();
    setBtnvalue(false);
    setsecond(0)
    setcounter(0)
    setStarttimer(false)
    window.location.reload()
  }
  return (
    <div className="App">
      <div className="header">
        <form>
          <label>Select pair</label>
          <input
            type="number"
            value={inputvalue}
            min="2"
            max="6"
            onChange={inputhandle}
          />
          {btnvalue ? (
            <button className="btns stop-btn" onClick={stop}>
              {" "}
              Stop
            </button>
          ) : (
            <button className="btns start-btn" onClick={setnumber}>
              {" "}
              Start
            </button>
          )}
        </form>

        <span>Total card = {inputvalue * 2}</span>

        <span>Time = {second}</span>
        <span>Pairs = {counter}</span>
        <span>{imgdata}</span>
      </div>
      <div className="grid-wrapper">
        {btnvalue ? (
          <Grid
            tcard={inputvalue * 2}
            updatecounter={updatecounter}
            updatesdata={updatesdata}
            updateimg={updateimg}
          />
        ) : (
          <Emptygrid />
        )}
      </div>
    </div>
  );
}

export default App;
