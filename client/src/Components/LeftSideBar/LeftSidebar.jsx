import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import './LeftSidebar.css';
import { NavLink } from 'react-router-dom';

const LeftSidebar = () => {
    return (
        <div className='container_leftSidebar'>
           <NavLink to={"/"} className='icon_sidebar_div'>
              <IoHomeOutline size={22} className='icon_sidebar'/>
              <div className="text_sidebar_icon">
                 Home
              </div>
   
            </NavLink>

             <NavLink to={"/explore"} className='icon_sidebar_div'>
                <MdOutlineExplore size={22} className='icon_sidebar'/>
                <div className="text_sidebar_icon">
                   Explore
                </div>
     
             </NavLink>

             <NavLink to={"/subscription"} className='icon_sidebar_div'>
                <MdOutlineSubscriptions size={22} className='icon_sidebar'/>
                <div className="text_sidebar_icon">
                   Subscription
                </div>
     
             </NavLink>
     
              <NavLink to={"/library"} className='icon_sidebar_div'>
                 <MdOutlineVideoLibrary size={22} className='icon_sidebar'/>
                 <div className="text_sidebar_icon">
                    Library
                 </div>
      
              </NavLink>
            
        </div>
    );
}

export default LeftSidebar;
