import React, { useState } from 'react';
import './VideoUpload.css';
import { useDispatch, useSelector } from 'react-redux';
import { uploadVideo } from '../../action/video';
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar';

const VideoUpload = ({setVidUploadPage}) => {
  const currentUser=useSelector(state=>state.currentUserReducer)
 const dispatch=useDispatch();
  
  const [title,setTitle]=useState("");
  const [videoFile,setVideoFile]=useState("");
  // console.log(title);

  const handleVideoFile=(e)=>{
    setVideoFile(e.target.files[0]);
  }

  const [progress,setProgress]=useState(0)

  const fileOptions={
onUploadProgress:(ProgressEvent)=>{
  const {loaded,total}=ProgressEvent;
  const percentage=Math.floor(((loaded/1000) * 100) / (total / 1000));
  setProgress(percentage)
  if(percentage===100){
    setTimeout(function () {},3000);
    setVidUploadPage(false);
  }
}

  };
  const uploadVideoFile=()=>{
    if(!title){
      alert("Plz Enter the a Title of the Video")
    }
    else if(!videoFile){
      alert("Plz attach a Video file");
    }
    else if(videoFile.size>1000000){
      alert("Plz attach the video file less than 1kb")
    }
    else{
      const fileData=new FormData();
      fileData.append("file",videoFile);
      fileData.append("title",title);
      fileData.append("chanel",currentUser?.result._id);
      fileData.append("uploader",currentUser?.result.name);
      console.log(videoFile);
      dispatch(uploadVideo({
        fileData:fileData,
        fileOptions:fileOptions
      }));
    }
  }
    return (
        <div className="container_VidUpload">
          <input type="submit" name="text"  className="ibtn_x" value={"x"}  onClick={()=>setVidUploadPage(false)} />
          <div className="container2_VidUpload">
            <div className="ibox_div_VidUpload">
            <input 
              type="text" 
              onChange={(e)=>setTitle(e.target.value)}
              value={title}
              className="ibox_vidupload"
              placeholder="Enter title of your Video"
              maxLength={30} />
          </div>
          <label htmlFor="file" className='ibox_vidupload btn_vidUpload'>
            <input 
              type="file" 
              name="file"
              className='ibox_vidupload'
              onChange={(e)=>handleVideoFile(e)}
              style={{fontSize:"1rem"}}
                />
          </label>
          <div className="ibox_vidupload">
          <input type="submit" value="upload"
           className='ibox_vidupload btn_vidUpload'
            onClick={uploadVideoFile}
           />
         </div>
         <div className="loader ibox_div_vidupload">
          <CircularProgressbar
          value={progress}
          text={`${progress}`}
          styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              textSize: "20px",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(255,255,255,${progress / 100})`,
              textColor: "#f88",
              trailColor: "#adff2f",
              backgroundColor: "#3e98c7",
            })} />
         </div>
         </div>
        
        </div> 
    );
}

export default VideoUpload;
