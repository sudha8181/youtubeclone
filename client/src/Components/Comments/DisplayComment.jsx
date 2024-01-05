import React, { useState } from 'react';
import './Comments.css';
import { useDispatch ,useSelector} from 'react-redux';
import { deleteComment, editComment, postComment } from '../../action/comment';

import moment from 'moment';

const DisplayComment = ({cid,commentBody,userId,CommentOn,userCommented}) => {

    const [Edit,setEdit]=useState(false);
    const [cmtBdy,setCmtBdy]=useState("");
    const [cmtId,setCmtId]=useState(0);

    const CurrentUser=useSelector(state=>state?.CurrentUserReducer);

    const handleEdit=(cid,commentBody)=>{
        setEdit(true);
        setCmtBdy(commentBody);
        setCmtId(cid);
        
      }

    const dispatch=useDispatch();

    const handleOnSubmit = (e)=>{
     e.preventDefault();
        if(!cmtBdy){
            alert(" type your Comment");
         }
        else{
            dispatch(editComment({
            id:cmtId,
            commentBody:cmtBdy
            }))
           setCmtBdy(""); 
        }
        setEdit(false);  
     }
   

    const handleDel=(id)=>{
      dispatch(deleteComment(id))
      }
    return (
        <>
             {Edit?(<>
                 
                <form className='comments_sub_form_comments' onSubmit={handleOnSubmit}>
                    <input type="text" name="" id="" placeholder='Edit comments ...' className='comment_ibox' value={cmtBdy} onChange={e=>setCmtBdy(e.target.value)}/>
                    <input type="submit" value="change"  className='comments_add_btn_comments'/>
                </form>
                </>):(<>
                     <p className='comment_body'>{commentBody}</p> 
               </>)}
        
          
            <p className='usercomment'>{userCommented} Commented {moment(CommentOn).fromNow()}</p> 
              {
               CurrentUser?.result._id===userId && (
                 <p className='EditDel_DisplayComment'>
                 <i onClick={()=>handleEdit(cid,commentBody)}>Edit</i>
                 <i onClick={()=>handleDel(cid)}>Delete</i>
               </p>
               )}
          
           </>
        );
 }

export default DisplayComment;
