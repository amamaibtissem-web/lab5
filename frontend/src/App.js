import React, { useEffect, useState } from 'react';

function App(){
  const [msg, setMsg] = useState("loading...");
		 useEffect(()=>{
			fetch("http://backend:3001/api")
			  .then(r=>r.json())
			  .then(j=>setMsg(j.message))
			  .catch(()=>setMsg("Backend unreachable"));
		  },[]);
  return (
    <div style={{fontFamily:'Arial', padding:20}}>
      <h1>Frontend - Lab5</h1>
      <p>Backend says: {msg}</p>
    </div>
  );
}

export default App;
