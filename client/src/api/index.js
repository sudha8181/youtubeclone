import axios from 'axios';


const API=axios.create({baseURL:`https://youtubeclone8034.onrender.com`})
API.interceptors.request.use(req=>{
    if(localStorage.getItem('Profile')){
        req.headers.authorization=`Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

 export const login=(authData)=>API.post('/user/login',authData);

 export const updateChanelData=(id,updateData)=>API.post(`/user/update/${id}`,updateData);

 export const  fetchAllChanel=()=>API.get('/user/getAllChanels');

 export const uploadVideo=(fileData,fileOptions)=> API.post('/video/uploadVideo',fileData,fileOptions);
 export const getVideos=()=> API.get('/video/getvideos');
 export const likeVideo=(id,Like)=>API.patch(`/video/like/${id}`,{Like});
 export const viewsVideo =(id)=>API.patch(`/video/view/${id}`);

 export const addTolikedVideo = (likedVideoData) => API.post("/video/likedvideo",likedVideoData);
 export const getAlllikedVideo = () =>API.get("/video/getAlllikedVideo");
 export const deletelikedVideo=(videoId,Viewer)=>API.delete(`/video/deletelikedvideo/${videoId}/${Viewer}`);

 export const addToWatchLater= (watchLaterData) => API.post("/video/watchLater",watchLaterData);
 export const getAllWatchLater = () =>API.get("/video/getAllWatchLater");
 export const deleteWatchLater=(videoId,Viewer)=>API.delete(`/video/deleteWatchlater/${videoId}/${Viewer}`)

 
 export const addToHistory= (HistoryData) => API.post("/video/History",HistoryData);
 export const getAllHistory = () =>API.get("/video/getAllHistory");
 export const deleteHistory=(userId)=>API.delete(`/video/deleteHistory/${userId}`)

 export const postComment=(commentData)=>API.post("/comment/post",commentData);
 export const deleteComment=(id)=>API.delete(`/comment/delete/${id}`);
 export const editComment=(id,commentBody)=>API.patch(`/comment/edit/${id}`,{commentBody}); 
 export const getAllComment=()=>API.get(`/comment/get`);
