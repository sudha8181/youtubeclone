import React from 'react';
import './Auth.css';
import { GoogleLogout } from 'react-google-login';
import {BiLogOut} from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../action/currentUser';
import { Link } from 'react-router-dom';

const Auth = ({User,setAuthBtn,setEditCreateChanelBtn}) => {
     const dispatch=useDispatch();
   const onLogoutSuccess=()=>{
     dispatch(setCurrentUser(null));
     alert("Log out Successfully");
    }
    console.log(User.result._id);
    return (
        <div className='Auth_container' onClick={()=>setAuthBtn(false)}>
            <div className='Auth_container2'>
              <p className='User_details'>
                <div className='chanel_logo_App'>
                  <p className="fstChar_logo_App">
                   {User?.result.name?(<>
                    {User?.result.name.charAt(0).toUpperCase()}
                   </>):(<>
                    {User?.result.email.charAt(0).toUpperCase()}
                   </>)}
                   </p>
                  
                </div>
                <div className='email_Auth'>
                {User?.result.email}
              </div>
              </p>
              <div className="btns_Auth" >
              {User?.result.name?<>{
                <Link to={`/chanelpage/${User?.result?._id}`} className="btn_Auth">
                  Your chanel
                </Link>
              
              } </>:<><input type="submit" className='btn_Auth' value="create your channel" /></>}
               
              
              <div>
                <GoogleLogout
                    clientId={'114518002181-e4p7m3nnfm7ahsuqripi3viac0nlmiag.apps.googleusercontent.com'}
                    onLogoutSuccess={onLogoutSuccess}
                   
                    render={(renderProps)=>(
              <div onClick={renderProps.onClick} className='btn_Auth'>
              <BiLogOut/>
             Log Out
            </div>)}
                />
              </div>
              </div>
            </div> 
        </div>
    );
}

export default Auth;
