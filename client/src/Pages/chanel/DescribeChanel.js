import React from 'react';
import './DescribeChanel.css';
import {FaEdit,FaUpload} from 'react-icons/fa'; 
import {useSelector} from 'react-redux';

const DescribeChanel = ({ setEditCreateChanelBtn,cid,setVidUploadPage}) => {
    const chanels=useSelector((state)=>state.chanelReducers)
    // console.log(chanels);
    const currentChanel=chanels.filter(c=>c._id===cid)[0];
    const CurrentUser=useSelector((state)=>state.CurrentUserReducer);
    console.log(currentChanel);
    return (
        <div className='container3_chanel'>
        <div className='chanel_logo_chanel'>
           <b>{currentChanel?.name.charAt(0).toUpperCase()}</b>
        </div>
            <div className='description_chanel'>
                <b>{currentChanel?.name}</b>
                <p>{currentChanel?.desc}</p>
            </div>
            {CurrentUser?.result._id===currentChanel?.id && (<>
                <p className='editbtn_chanel' onClick={()=>setEditCreateChanelBtn(true)} >
               <FaEdit />
                <b>Edit button</b>
            </p>
            <p className='uploadbtn_chanel' onClick={()=>setVidUploadPage(true)}>
               <FaUpload/>
                <b>upload video</b>
            </p>
            </>)}
           
        </div>
            
       
    );
}

export default DescribeChanel;
