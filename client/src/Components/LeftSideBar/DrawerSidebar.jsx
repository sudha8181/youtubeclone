import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { GoHistory } from "react-icons/go";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { NavLink } from 'react-router-dom';




const DrawerSidebar = ({toggleDrawer,toggleDrawerSidebar}) => {
    console.log(toggleDrawerSidebar);
    return (

       <div className='container_DrawerLeftSidebar' style={toggleDrawerSidebar}>
            <div className='container2_DrawerLeftSidebar'>
                <div className="Drawer_leftsidebar">
                    <NavLink to={"/"} className="icon_sidebar_div">
                        <p>
                           <IoHomeOutline size={22} className='icon_sidebar' style={{margin:"auto 0.7rem"}}/>
                           <div className="text_sidebar_icon">
                             Home
                           </div>
                        </p>
                    </NavLink>

                    <NavLink to={"/explore"}  className="icon_sidebar_div">
                        <p>
                          <MdOutlineExplore size={22} className='icon_sidebar' style={{margin:"auto 0.7rem"}}/>
                           <div className="text_sidebar_icon">
                             Explore 
                          </div>
                        </p>
                    </NavLink>

                    <NavLink to={"/shorts"} className="icon_sidebar_div">
                        <p>
                           <SiYoutubeshorts size={22} className='icon_sidebar' style={{margin:"auto 0.7rem"}}/>
                            <div className="text_sidebar_icon">
                              Shorts
                            </div>
                        </p>
                    </NavLink>

                    <NavLink to={"/subscription"} className="icon_sidebar_div">
                        <p>
                          <MdOutlineSubscriptions size={22} className='icon_sidebar' style={{margin:"auto 0.7rem"}}/>
                          <div className="text_sidebar_icon">
                            Subscriptions
                           </div>
                        </p>
                    </NavLink>
                </div>

                <div className="libraryBtn_Drawerleftsidebar">
                   <NavLink  to={"/library"} className="icon_sidebar_div">
                        <p>
                           <MdOutlineVideoLibrary size={22} className='icon_sidebar' style={{margin:"auto 0.7rem"}}/>
                            <div className="text_sidebar_icon">
                                Library
                            </div>

                        </p>
                    </NavLink>

                   <NavLink to={"/watchhistory"} className="icon_sidebar_div">
                        <p>
                           <GoHistory size={22} className='icon_sidebar' style={{margin:"auto 0.7rem"}}/>
                           <div className="text_sidebar_icon">
                            History
                              </div>
                        </p>
                    </NavLink>  

                    <NavLink to={"/yourvideo"} className="icon_sidebar_div">
                           <p>
                              <GoVideo size={22} className='icon_sidebar' style={{margin:"auto 0.7rem"}}/>
                              <div className="text_sidebar_icon">
                              Your Video 
                              </div>
                            </p>
                       </NavLink>     
    
                     <NavLink to={"watchlater"} className="icon_sidebar_div">
                           <p>
                              <MdOutlineWatchLater size={22} className='icon_sidebar' style={{margin:"auto 0.7rem"}}/>
                              <div className="text_sidebar_icon">
                               Watch Later
                               </div>
                           </p>
                     </NavLink>     
    
                     <NavLink to={"/likedvideo"} className="icon_sidebar_div">
                        <p>
                           <AiFillLike size={22} className='icon_ sidebar' style={{margin:"auto 0.7rem"}}/>
                           <div className="text_sidebar_icon">
                             Liked Videos
                           </div>

                        </p>
                    </NavLink>          

                </div>

                <div className="subScription_lsdbar">
                    <h3>Your Subscription</h3>
                    <div className="chanel_lsdar">
                          <p>c</p>
                          <div>chanel</div>
                    </div>

                    <div className="chanel_lsdar">
                          <p>c</p>
                          <div>chanel</div>
                    </div>

                    <div className="chanel_lsdar">
                          <p>c</p>
                          <div>chanel</div>
                    </div>

                    <div className="chanel_lsdar">
                          <p>c</p>
                          <div>chanel</div>
                    </div>
                 </div>
                 
            </div> 
            
            <div className='container3_DrawerLeftSidebar' onClick={()=>toggleDrawer()}></div>
        </div>
    );
}

export default DrawerSidebar;
