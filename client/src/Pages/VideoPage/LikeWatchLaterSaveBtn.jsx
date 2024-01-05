import React, {  useState } from 'react';
import {BsThreeDots} from 'react-icons/bs';
import './LikeWatchLaterSave.css';
import {MdPlaylistAddCheck} from 'react-icons/md';
import {RiHeartAddFill, RiPlayListAddFill, RiShareForwardFill} from 'react-icons/ri';
import {AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike} from 'react-icons/ai';
import { useDispatch,useSelector } from "react-redux";
import { likeVideo } from '../../action/video';
import { useEffect } from 'react';

import { addToLikedVideo } from '../../action/likedVideo';
import { addToWatchLater } from '../../action/watchLater';
import { deleteWatchLater } from '../../action/watchLater';
import { deleteLikedVideo } from '../../action/likedVideo';

const LikeWatchLaterSaveBtn = ({ vv, vid}) => {
  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const dispatch = useDispatch();
 
  
  const [saveVideo,setSaveVideo]=useState(false);
  const[dislikeBtn,setDislikeBtn]=useState(false);
  const[likeBtn,setLikeBtn]=useState(false);

const likedVideoList= useSelector( state => state.likedVideoReducer);
 const watchLaterList=useSelector(state => state.watchLaterReducer);
 useEffect(() => {
  likedVideoList?.data
    .filter(
      (q) => q?.videoId === vid && q?.Viewer === CurrentUser?.result._id
    )
    .map((m) => setLikeBtn(true));
  watchLaterList?.data
    .filter(
      (q) => q?.videoId === vid && q?.Viewer === CurrentUser?.result._id
    )
    .map((m) => setSaveVideo(true));
}, []);


  const toggleSaveVideo=()=>{
    if(CurrentUser){
      if(saveVideo){
        setSaveVideo(false);
        dispatch(deleteWatchLater({
          videoId:vid,
          Viewer:CurrentUser?.result._id
        }));
      }
      else{
        setSaveVideo(true);
        dispatch(addToWatchLater({
          videoId: vid,
          Viewer: CurrentUser?.result._id 
        }))
       
      }
    }else{
      alert("Plz login to save a Video !");
    }
   
  }

  const toggleLikeBtn = (e, lk) => {
    if(CurrentUser){
      if(likeBtn){
        setLikeBtn(false);
        dispatch(
          likeVideo({ 
          id:vid,
          Like: lk - 1,
        }));
        dispatch(deleteLikedVideo({
          videoId: vid,
          Viewer: CurrentUser?.result._id,
        }))
      
      }
      else{
        setLikeBtn(true);
        dispatch(likeVideo({id:vid,Like: lk+ 1}))
        dispatch( addToLikedVideo({videoId: vid,Viewer: CurrentUser?.result._id,
      })
        )
       setDislikeBtn(false);
      }
    }
    else{
      alert("Plz Login To give a like");
    }
   
  };
  const toggleDislikeBtn = (e,lk) => {
    if(CurrentUser){
      if(dislikeBtn){
        setDislikeBtn(false);
        
      }
      else{
        setDislikeBtn(true);
        if(likeBtn){
          dispatch(
            likeVideo(
            {id:vid,
            Like: lk - 1
          }));
        }
      
       setLikeBtn(false);
      }
    }else{
      alert("Plz Login To give a dislike")
    }
    
  };

 

// console.log(vv.Like);
    return (
        <div className='btns_cont_videoPage'>
          <div className="btn_videoPage">
            <BsThreeDots/>
          </div>
         <div className="btn_VideoPage">

         <div className="like_VideoPage" onClick={(e) => toggleLikeBtn(e, vv?.Like)}>
           {likeBtn?(<>
            <AiFillLike size={22} className='btns_videoPage'/>
           
           </>):(<>
            <AiOutlineLike size={22} className='btns_videoPage'/>
           
           </>)}
           <b>{vv?.Like}</b>
           </div>

           
         <div className="like_VideoPage" onClick={(e)=> toggleDislikeBtn(e, vv?.Like)}>
           {dislikeBtn?(<>
            <AiFillDislike size={22} className='btns_videoPage'/>
           </>):(<>
            <AiOutlineDislike size={22} className='btns_videoPage'/>
            
           </>)}
           <b>1 dislike</b>
           </div>

         

           <div className="like_VideoPage" onClick={toggleSaveVideo}>
           {saveVideo?(<>
            <MdPlaylistAddCheck
             size={22} className='btns_videoPage'/>
            <b>Saved</b>
          
           </>):(<>
            <RiPlayListAddFill size={22} className='btns_videoPage'/>
            <b>Save</b>
           </>)}
           </div> 

           <div className="like_VideoPage">
            <RiHeartAddFill size={22} className='btns_videoPage'/>
            <b>Thanks</b>
          
           </div> 

           <div className="like_VideoPage">
            <RiShareForwardFill size={22} className='btns_videoPage'/>
            <b>Share</b>
          
           </div> 

          
         </div>   
        </div>
    );
};

export default LikeWatchLaterSaveBtn;
