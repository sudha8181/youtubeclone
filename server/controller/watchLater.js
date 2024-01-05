import watchLater from '../models/watchLater.js'
import mongoose from 'mongoose';


export const watchLaterController = async(req,res)=>{
    const watchLaterData= req.body;

    console.log(watchLaterData);

    const addToWatchLater= new watchLater(watchLaterData);
    try {
        await addToWatchLater.save();
        res.status(200).json('added to watch later')
         console.log("Done")
    } catch (error) {
        res.status(400).json(error)       
    }
};

export const getAllWatchLaterController = async(req,res)=>{
    try {
      const files=await watchLater.find();
      console.log(files);
      res.status(200).send(files);
    } catch (error) { 
      res.status(404).send(error.message)
    }
   
  };

  export const deleteWatchLaterController= async(req,res)=>{
    const {videoId: videoId,Viewer:Viewer}=req.params;

    console.log(videoId,Viewer);
    try {
      await watchLater.findOneAndDelete({
        videoId:videoId,
        Viewer:Viewer
      });
      res.status(200).json({message:"Removed from your watch Laters"});

    } catch (error) {
      res.status(400).json({message: error.message});
    }
  };
