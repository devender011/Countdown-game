import React, { useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

function ResultModal({challengeDuration,openModal,time}) {
   const dialog=useRef()
   //new implimentation of modal to prevent the change in dialog to affect the time challenge compontent
   //it will work as long as the implementation of useimperitive hook aslo changes
   useImperativeHandle(openModal,()=>{
    return {
        open(){
            dialog.current.showModal()
        }
    }
   })
   const formatedTime=(time/1000).toFixed(2)
   const score=Math.round((1-time/(challengeDuration*1000))*100)
   
   //previous function to get score
//    const getScore=()=>{
//     let score=0;
//     if(time>=(challengeDuration*1000)*95/100)return score=10
//     else if(time<(challengeDuration*1000)*95/100 && time>=(challengeDuration*1000)*90/100 )return score=20
    
//     else if(time<(challengeDuration*1000)*90/100 && time>=(challengeDuration*1000)*80/100 )return score=30
//     else if(time<(challengeDuration*1000)*70/100 && time>=(challengeDuration*1000)*60/100 )return score=40
//     else if(time<(challengeDuration*1000)*60/100 && time>=(challengeDuration*1000)*50/100 )return score=50
//     else if(time<(challengeDuration*1000)*50/100 && time>=(challengeDuration*1000)*40/100 )return score=60
//     else if(time<(challengeDuration*1000)*40/100 && time>=(challengeDuration*1000)*30/100 )return score=70
//     else if(time<(challengeDuration*1000)*30/100 && time>=(challengeDuration*1000)*20/100 )return score=80
//     else if(time<(challengeDuration*1000)*20/100 && time>=(challengeDuration*1000)*10/100 )return score=90
//     else if(time<(challengeDuration*1000)*10/100 && time>0 )return score=100
//     return score;
//    }
//    const res=getScore()

  return createPortal(
    <dialog  className='result-modal'  ref={dialog}     >
        {time==0?<h2>You Lose</h2>:<h2>Your Score is {score}</h2>}
      
        <p>The target time was <strong>{challengeDuration} {challengeDuration>1?"seconds":"second"}</strong></p>
        {time>0?<p>You stoped the timer with <strong> {formatedTime} seconds</strong> left</p>
        :<p>Your timer stoped at <strong> {formatedTime} seconds</strong> left</p>}
   
        <form method='dialog' >

            <button>Close</button>
        </form>
    </dialog>,
    document.getElementById("modal")
  )
}

export default ResultModal