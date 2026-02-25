import React, { useEffect, useRef, useState } from "react";
import ResultModal from "./ResultModal";
function TimerChallenge({ title, challengeDuration }) {
    const timer = useRef();
    const openModal = useRef();
    const [remainingTime, setRemaningTIme] = useState(challengeDuration * 1000);
    const leftTime = useRef();
//to stop the timer and open you lose modal screen
   useEffect(()=>{
     if (remainingTime <= 0) {
        console.log(remainingTime)
        handelStop()
    }
   },[remainingTime])
    //function which is called when user click start btn
    const handelStart = () => {
        //storing setinterval id in timer ref
        timer.current = setInterval(() => {
            //reducing the timer 
            setRemaningTIme((prevTime) => {
                let newTime = prevTime - 10;
                //lefttime ref which stores the remaining time
                leftTime.current = newTime;
                return newTime;
            });
        }, 10);
    };
//function called when btn is presed when remaining time is less that challengeduarion*1000
    function handelStop() {
        console.log("interval ID",timer.current)
        //stops the setinterval fucntion --->timer.current stores interval id 
        clearInterval(timer.current);
        //open the modal screen
        openModal.current.open();
//reseting the state so we can again play the game
        setRemaningTIme(challengeDuration * 1000);
    }

    return (
        <>
            <ResultModal
                result="lose"
                challengeDuration={challengeDuration}
                openModal={openModal}
                time={Number(leftTime.current)}
            />

            <section className="challenge">
                <h2>{title}</h2>

                <p className="challenge-time">
                    {challengeDuration} second{challengeDuration > 1 ? "s" : ""}
                </p>
                <button
                    onClick={
                        remainingTime == challengeDuration * 1000 ? handelStart : handelStop
                    }
                >
                    {remainingTime < challengeDuration * 1000 ? "Stop " : "Start "}
                    challenge
                </button>
                <p
                    className={remainingTime == challengeDuration * 1000 ? "" : "active"}
                >
                    Timer is{" "}
                    {remainingTime == challengeDuration * 1000 ? "inactive" : "active"}
                </p>
            </section>
        </>
    );
}

export default TimerChallenge;
