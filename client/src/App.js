import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import AllRoutes from "./Components/AllRoutes";
import LeftSidebar from "./Components/LeftSideBar/LeftSidebar";
import DrawerSidebar from "./Components/LeftSideBar/DrawerSidebar";
import { useEffect, useState } from "react";
import CreateEditChanel from "./Pages/chanel/CreateEditChanel";
import { useDispatch } from "react-redux";
import { fetchAllChanel } from "./action/chanelUser";
import VideoUpload from "./Pages/VideoUpload/VideoUpload";
import { getAllVideo } from "./action/video";
import { getAlllikedVideo } from "./action/likedVideo";
import { getAllWatchLater } from "./action/watchLater";
import { getAllHistory } from "./action/History";
import { getAllComment } from "./action/comment";



function App() {
  const  dispatch=useDispatch();
 

  useEffect(()=>{
    dispatch(fetchAllChanel());
    dispatch(getAllVideo());
    dispatch(getAlllikedVideo());
    dispatch(getAllWatchLater());
    dispatch(getAllHistory());
    dispatch(getAllComment());
  },[dispatch]);

  const[toggleDrawerSidebar,setToggleDrawerSidebar]=useState({
    display:"none"
  });

 
  const toggleDrawer=()=>{
      if(toggleDrawerSidebar.display==="none"){
        setToggleDrawerSidebar({
          display:"flex"})
      }
      else{
        setToggleDrawerSidebar({
          display:"none"}) 
      }
      console.log(toggleDrawerSidebar);
  }
  const [vidUploadPage,setVidUploadPage]=useState(false);
  const [EditCreateChanelBtn,setEditCreateChanelBtn]=useState(false);
  return (
    <Router>
    {vidUploadPage &&  <VideoUpload setVidUploadPage={setVidUploadPage}/>}

      {EditCreateChanelBtn && <CreateEditChanel setEditCreateChanelBtn={setEditCreateChanelBtn}/>}
      <Navbar toggleDrawer={toggleDrawer} setEditCreateChanelBtn={setEditCreateChanelBtn} />
      {
      <DrawerSidebar toggleDrawer={toggleDrawer}
      toggleDrawerSidebar={toggleDrawerSidebar} />
      }
      <AllRoutes setVidUploadPage={setVidUploadPage} setEditCreateChanelBtn={setEditCreateChanelBtn}/>
      </Router>
  );
}

export default App;
