import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";
function TimerChallenge({ title, challengeDuration }) {
  const timer = useRef();
  const openModal = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const handelStart = () => {
    timer.current = setTimeout(() => {
        openModal.current.showModal()
        setTimerExpired(true);
         setTimerStarted(false); 
        
    }, challengeDuration * 1000);
    setTimerStarted(true); 
  };
  
  const handelStop = () => {
    openModal.current.showModal()
    console.log("Before",timerStarted)
    setTimerStarted(false); 
    clearTimeout(timer.current);
  };
  const handelModal=()=>{
    console.log(openModal.current)
  }

  return (
    <>

    <ResultModal result="lose" time={challengeDuration } openModal={openModal} />

    <section className="challenge">
      <h2>{title}</h2>
     
      <p className="challenge-time">
        {challengeDuration} second{challengeDuration > 1 ? "s" : ""}
      </p>
      <button onClick={timerStarted ? handelStop:handelStart}>
        {timerStarted ? "Stop " : "Start "}challenge
      </button>
      <p className={timerStarted ? "active" : ""}>
        Timer is {timerStarted ? "active" : "inactive"}
      </p>
    </section>
    </>
  );
}

export default TimerChallenge;
