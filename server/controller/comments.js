import mongoose from "mongoose";
import comment from "../models/comments.js";


export const postComment = async(req,res)=>{
    const commentData= req.body;

    console.log(commentData);

    const postComment= new comment(commentData);
    try {
        await postComment.save();
        res.status(200).json('added comment')
         console.log("Done")
    } catch (error) {
        res.status(400).json(error)       
    }
};

export const getComment = async(req,res)=>{
    try {
      const commentList=await comment.find();
      console.log(commentList);
      res.status(200).send(commentList);
    } catch (error) { 
      res.status(404).send(error.message)
    }
   
  };

  export const deleteComment= async(req,res)=>{
    const {id:_id}=req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("comment Unavailable..");
      }
      try {
        await comment.findByIdAndDelete(_id);
        res.status(200).json({ message: "deleted comment" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  export const editComment = async (req, res) => {
    const {id:_id}=req.params;
    const {commentBody}=req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("comment Unavailable..");
      }
    try {
        const updateComment = await comment.findByIdAndUpdate(
            _id,
            {
                $set: {"commentBody":commentBody}
            }
        )
        res.status(200).json(updateComment)
    } catch (error) {
        res.status(400).json(error)
        
    }
};