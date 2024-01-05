import React, { useState } from 'react';
import {gapi} from 'gapi-script';
import { useEffect } from 'react';
import './Navbar.css';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { login} from '../../action/auth.js';
import currentUserReducer from '../../Reducers/currentUser.js';


import {GoogleLogin} from 'react-google-login';
import Auth from '../../Pages/Auth/Auth.js';

const Navbar =({toggleDrawer,setEditCreateChanelBtn})=> {

  const [AuthBtn,setAuthBtn]=useState(false);
//  const currentUser=null;
  // const currentUser={
  //   result:{
  //     email:"sudhagrg2102@gmail.com",
  //     joinedOn:"2222-07-15T09:57:23.4892"
  //   }
  // }

  const currentUser=useSelector(state=>state.currentUserReducer)
  // console.log(currentUserReducer);
  
  const dispatch=useDispatch();
  
  const onSuccess=(response)=>{
   const Email=response?.profileObj.email;
   console.log(Email);
   dispatch(login({email:Email}));
  }

  const onFailure=(response)=>{
    console.log("Failed",response);
  }

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:"114518002181-e4p7m3nnfm7ahsuqripi3viac0nlmiag.apps.googleusercontent.com",
        scope:"email"
      })
    }
    gapi.load("client:auth2",start);
  },[]);

    return (
      <>
         <div className='Container_Navbar'>
          <div className="Burger_Logo_Navbar">
            <div className="burger" onClick={()=>toggleDrawer()}>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <NavLink to={"/"} className='logo-div_Navbar'>
                <img src="images/favicon.svg" alt="" />
                <p className='logo_title_navbar'>Youtube</p>
            </NavLink>
          </div>  
          <SearchBar/>
          <RiVideoAddLine size={22} className={"vid_ball_Navbar"}/>
          <div className="apps_box">
            <p className="appBox"></p>
            <p className="appBox"></p>
            <p className="appBox"></p>
            <p className="appBox"></p>
            <p className="appBox"></p>
            <p className="appBox"></p>
            <p className="appBox"></p>
            <p className="appBox"></p>
            <p className="appBox"></p>
          </div>

          <IoMdNotificationsOutline size={22} className='Mic_SearchBar'/>
           <div className="Auth_cont_Navbar">
           {currentUser?(<>
             <div className="chanel_logo_App" onClick={()=>setAuthBtn(true)}>
              <div className="fstChar_logo_App">
               {
                currentUser?.result.name ?(
                  <>
                    {currentUser?.result.name.charAt(0).toUpperCase()}
                  </>
                ):( <>
                    {currentUser?.result.email.charAt(0).toUpperCase()}
                  </>)
               }
              </div>
             </div>
           </>):(<>
           <GoogleLogin
            clientId={'114518002181-e4p7m3nnfm7ahsuqripi3viac0nlmiag.apps.googleusercontent.com'}
            buttonText='Login'
            onSuccess={onSuccess}
            onFailure={onFailure}
            render={(renderProps)=>(
              <p onClick={renderProps.onClick} className="Auth_Btn">
              <FaRegCircleUser/>
              Sign in
            </p>)
            }
           />
          

           </>)}
            
           </div>

        </div>
        { AuthBtn &&
          <Auth User={currentUser}
            setAuthBtn={setAuthBtn}
            setEditCreateChanelBtn={setEditCreateChanelBtn}
          />
        }
      </>
       
    );
};

export default Navbar;
