import React, { useState } from 'react';



const App=()=>{
    
const[name,setName] = useState("");
const[fullName , setFullName] = useState();
const InputEvent =(e)=>{
   setName(e.target.value);
}
const changes =()=>{
    setFullName(name);
}
    return(
        <>
        <div className='input-box'>

        <h1>{"Hello "}{fullName}</h1>
        <input type="text" placeholder='Enter your Name'
        className='text-input' onChange={InputEvent}
        value={name} />
        {/* <input type="text" placeholder='Enter your Password'
        className='text-input' onChange={pass} /> */}
        

        <div className='Btn'>

        <button onClick={changes} >Click me</button>
        </div>
        </div>
        </>
    );
};
export default App;