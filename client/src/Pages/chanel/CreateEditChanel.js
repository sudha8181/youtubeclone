import React, { useState } from 'react';
import './CreateEditChanel.css';
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../action/auth';
import { updateChanelDate }from '../../action/chanelUser.js';
import currentUserReducer from '../../Reducers/currentUser.js';
const CreateEditChanel = ({setEditCreateChanelBtn}) => {
   
    
   
    // const currentUser={
    //     result:{
    //       email:"sudhagrg2102@gmail.com",
    //       joinedOn:"2222-07-15T09:57:23.4892"
    //     }
    //   }

     const currentUser=useSelector((state)=>state.currentUserReducer);

      const[name,setName]=useState(currentUser?.result.name);
      const[desc,setDesc]=useState(currentUser?.result.desc);

      const dispatch=useDispatch();
      const handleSubmit=()=>{
        if(!name){
            alert('plz Enter the Name');
        }
        else if(!desc){
            alert("Plz Enter the Discription");
        }
        else{
            dispatch(updateChanelDate(currentUser?.result._id,{
              name:name,
              desc:desc
            }));
            setEditCreateChanelBtn(false);
            setTimeout(()=>{
                dispatch(login({email:currentUser?.result.email}))

            },5000);
           
        }
      }
    return (
       <div className='container_CreateEditChanel'>
        <input
        onClick={() => setEditCreateChanelBtn(false)}
        type="submit"
        name="text"
        value={"X"}
        className="ibtn_x"
      />
        {/* <RxCross2 className='btn_cancel' onClick={()=>setEditCreateChanelBtn(false)}/> */}
        <div className='container_CreateEditChanel2'>
            <h1>{currentUser?.result.name?<>Edit</>:<>Create</>}your Chanel </h1>
            <input 
            type="text" 
            name="chanelName"
             placeholder='Enter Your/Channel Name' 
             className='ibox'
             value={name}
             onChange={(e)=>setName(e.target.value)}   
             />
            <textarea 
            name="" 
            id="" 
            cols="30" 
            rows="15"
             placeholder='Enter Channel Description' 
             className='ibox'
             value={desc}
             onChange={(e)=>setDesc(e.target.value)} >
             </textarea>

            <input 
            type="submit" 
            value="Submit" 
            className='ibtn'
            onClick={handleSubmit}    
            />
        </div>
       </div>
    );
}

export default CreateEditChanel;
