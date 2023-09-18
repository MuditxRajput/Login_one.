import React, { useState } from 'react';



const App=()=>{
    const[fullName , setFullName] = useState({
        fname:"",
        lname:"",
        email:"",
    });
    // const[] = useState();
    const InputEvent = (e)=>{
        
        const value = e.target.value;
        const name = e.target.name;

        setFullName((preValue)=>{
            if(name==="fName")
            {
                return{
                    fname:value,
                    lname : preValue.lname,
                    email:preValue.email,

                }
                
            }
            else if(name=='lName'){
                return{

                    fname : preValue.fname,
                    lname : value,
                    email:preValue.email,
                }
            }
            else{
                return{
                    fname:preValue.fname,
                    lname:preValue.lname,
                    email:value,
                }
            }
        })

    }
    const submit = ()=>{

    }


    return(
        <>
        <div className='input-box'>

        <h1>{`Hello ${fullName.fname} ${fullName.lname}`}</h1>
        <hr></hr>
        <h3 className='email'>{fullName.email}</h3>
        <input type="text" placeholder='Enter your Name'
        className='text-input' onChange={InputEvent}
        name ="fName" value={fullName.fName}
         />
        <input type="text" placeholder='Enter your LastName'
        className='text-input' onChange={InputEvent}
        name = "lName" value={fullName.lName}
         />
        <input type="text" placeholder='Enter your Email'
        className='text-input' onChange={InputEvent}
        name = "eMail" value={fullName.lName}
         />
        

        <div className='Btn'>

        <button onClick={submit}  >Click me</button>
        </div>
        </div>
        </>
    );
};
export default App;