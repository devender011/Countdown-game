import React from 'react'

function ResultModal({result,time,openModal}) {
   

  return (
    <dialog  className='result-modal'  ref={openModal} >
        <h2>You {result}</h2>
        <p>The target time was <strong>{time} {time>1?"seconds":"second"}</strong></p>
        <p>You stoped the timer with <strong>X seconds</strong> left</p>
        <form method='dialog' >

            <button>Close</button>
        </form>
    </dialog>
  )
}

export default ResultModal