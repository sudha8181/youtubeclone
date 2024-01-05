import express from 'express';
import { uploadVideo,getAllVideos } from "../controller/video.js";
import upload from '../Helpers/fileHelper.js'
import { likeController } from '../controller/like.js';
import {viewController} from '../controller/view.js';
import auth from '../middleware/auth.js';
import { likeVideoController,getAlllikedVideoController ,deleteLikedVideoController} from '../controller/likeVideo.js';
import { watchLaterController , getAllWatchLaterController, deleteWatchLaterController} from  '../controller/watchLater.js'
import  {HistoryController,getAllHistoryController,deleteHistoryController} from '../controller/History.js'


const routes=express.Router();

routes.post("/uploadVideo",auth,upload.single("file"),uploadVideo)
routes.get("/getvideos",getAllVideos);

routes.patch('/like/:id',likeController);
routes.post('/likedvideo',auth,likeVideoController);
routes.patch(`/view/:id`,viewController);
routes.get("/getAlllikedVideo",getAlllikedVideoController);
routes.delete(`/deletelikedvideo/:videoId/:Viewer`,auth,deleteLikedVideoController);


routes.post("/watchLater",auth,watchLaterController);
routes.get("/getAllWatchLater",getAllWatchLaterController);
routes.delete(`/deleteWatchlater/:videoId/:Viewer`,auth,deleteWatchLaterController);

routes.post('/History',auth,HistoryController)
routes.get('/getAllHistory',getAllHistoryController)
routes.delete('/deleteHistory/:userId',auth,deleteHistoryController)





export default routes;