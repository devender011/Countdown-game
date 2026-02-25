import { useState,useRef } from "react";

export default function Player() {

  let invalidName=false;
  const [name, setName] = useState(null);
  const refName=useRef();
  const handelClick = () => {
    if(/^[a-zA-Z0-9]*$/.test(refName.current.value)){
      setName(refName.current.value);
      refName.current.value=""
    }
    else{
invalidName=true;
    }
  };
  return (
    <section id="player">
      <h2>Welcome {name??"unkown Entity"}</h2>
      <p>
        <input
          ref={refName}
          type="text"
          
        />
        <button onClick={handelClick}>Set Name</button>
      </p>
      {invalidName?<p>Enter a valid Name</p>:null}
    </section>
  );
}
