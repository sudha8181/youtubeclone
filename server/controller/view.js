import videoFiles from "../models/videoFiles.js";
import mongoose from "mongoose";

export const viewController = async(req,res)=>{
    const {id:_id}=req.params;
    // const { Like } = req.body;

    console.log(_id);
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return  res.status(404).send("Video Unavailable ..")
    }
    try {
        const file = await videoFiles.findById(_id);
        const views = file.Views;
        const updateView =await videoFiles.findByIdAndUpdate(
            _id,
            {
                $set:{Views: views + 1}
            }
        );
        res.status(200).json(updateView)
    } catch (error) {
        res.status(400).json("error :",error)
    }
}