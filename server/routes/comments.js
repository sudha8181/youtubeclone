import express from "express"
import { postComment,getComment,deleteComment,editComment } from  '../controller/comments.js'
import auth from '../middleware/auth.js';
const router=express.Router();

router.post(`/post`,auth,postComment);
router.delete('/delete/:id',auth,deleteComment);
router.patch('/edit/:id',auth,editComment);
router.get(`/get`,getComment);




export default router;