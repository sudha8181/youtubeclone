import React, { useState } from 'react';
import './Comments.css';
import DisplayComment from './DisplayComment';
import {useDispatch,useSelector} from 'react-redux';
import { postComment } from '../../action/comment';

const Comments = ({videoId}) => {
   const CurrentUser = useSelector((state) => state?.currentUserReducer);
   const commentsList = useSelector((s) => s.commentReducer);
   const[commentText,setCommentText]=useState("");
    
  const dispatch=useDispatch();

  const handleOnSubmit=(e)=>{
    e.preventDefault();
    if(CurrentUser){
       if(!commentText){
         alert("Plz Type your comment !");
       }
       else{
         dispatch(postComment({
          videoId:videoId,
          userID:CurrentUser?.result._id,
          commentBody:commentText,
          userCommented:CurrentUser?.result.name
         }));
         setCommentText("");
       }
    }else{
        alert("Plz login to post your comment !");
      }
    };
 

    // const commentList=[{
    //   _id:1,
    //   commentbody:"comment body",
    //   usercomment:"usercomment 1"

    // },
    // {
    //   _id:2,
    //   commentbody:"comment body",
    //   usercomment:"usercomment 2"

    // },
    // { _id:3,
    //   commentbody:"comment body",
    //   usercomment:"usercomment 3"

    // },
    // { _id:4,
    //   commentbody:"comment body",
    //   usercomment:"usercomment 4"

    // }]
    return (
        <>
           <form className='comments_sub_form_comments' onSubmit={handleOnSubmit}>
              <input type="text" name="" id="" placeholder='add comments ...' className='comment_ibox' value={commentText} onChange={e=>setCommentText(e.target.value)}/>
              <input type="submit" value="add"  className='comments_add_btn_comments'/>
            </form>
   
             <div className="display_comment_container">
                 {commentsList?.data?.filter(
                    q=> videoId === q.videoId).reverse().map((e)=>{
                       return <DisplayComment 
                       cid={e._id}
                       userId={e.userId}
                       commentBody={e.commentBody}
                       userCommented={e.userCommented} 
                       CommentOn={e.CommentOn} 
                       />;
                      })}
              
               </div>
        </>
      
    );
}

export default Comments;
