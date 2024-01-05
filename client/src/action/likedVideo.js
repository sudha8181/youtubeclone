 import * as api from "../api";

export const addToLikedVideo=(likedVideoData)=>async(dispatch)=>{
    try{
    const {data}=await api.addTolikedVideo(likedVideoData);
    dispatch({type:"POST_LIKEDVIDEO",data});
    dispatch(getAlllikedVideo())
    }catch (error){
      console.log(error);
    }
};

export const getAlllikedVideo=()=>async(dispatch)=>{
  try {
      const {data}= await api.getAlllikedVideo();
      dispatch({type:'FETCH_ALL_LIKED_VIDEOS',payload:data})
  } catch (error) {
    console.log(error);  
  }
} 

export const deleteLikedVideo=(likedVideoData)=>async(dispatch)=>{
  try {
    const {videoId,Viewer}=likedVideoData;

    console.log(videoId,Viewer);
    await api.deletelikedVideo(videoId,Viewer);
    dispatch(getAlllikedVideo());
    
  } catch (error) {
    console.log(error);
  }
};

