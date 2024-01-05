import * as api from '../api';

export const uploadVideo=(videoData)=>async (dispatch)=>{
    try {
        const {fileData,fileOptions}=videoData;
        const {data}=await api.uploadVideo(fileData,fileOptions);
        dispatch({type:"POST_VIDEO",data});
        dispatch(getAllVideo())
        console.log(fileData);
    } catch (error) {
        alert(error.response.data.message)
    }
};

export const getAllVideo =()=>async(dispatch)=>{
    try {
        const {data}= await api.getVideos();
        dispatch({type:'FETCH_ALL_VIDEO',payload:data});
    } catch (error) {
      console.log(error);  
    }
};  

export const likeVideo=(LikeData)=>async(dispatch)=>{
   try {
     const {id,Like}=LikeData;
     const {data} = await api.likeVideo(id,Like);
     dispatch({type:"POST_LIKE",payload:data});
     dispatch(getAllVideo())
   } catch (error) {
     console.log(error);
   }
};

export const viewVideo=(viewData)=>async(dispatch)=>{
  try {
    const {id}=viewData;
    const {data}= await api.viewsVideo(id);
    dispatch({type:'POST_VIEW',payload:data});
    dispatch(getAllVideo())
  } catch (error) {
    console.log(error);
  }

}