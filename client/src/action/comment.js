import * as api from "../api";

export const editComment=(commentData)=>async(dispatch)=>{
    try{
     const {id,commentBody}=commentData;   
    const {data}=await api.editComment(id,commentBody)
    dispatch({type:"EDIT_COMMENT",payload:data});
   dispatch(getAllComment())
    }catch (error){
      console.log(error);
    }
};
export const postComment=(commentData)=>async(dispatch)=>{
    try{
    const {data}=await api.postComment(commentData);
    dispatch({type:"POST_COMMENT",payload:data});
   dispatch(getAllComment())
    }catch (error){
      console.log(error);
    }
};

export const getAllComment=()=>async(dispatch)=>{
    try {
        const {data}= await api.getAllComment();
        console.log(data);
        dispatch({type:'FETCH_ALL_COMMENTS',payload:data})
    } catch (error) {
      console.log(error);  
    }
  } ;

  export const deleteComment=(id)=>async(dispatch)=>{
    try {
      console.log(id)
      await api.deleteComment(id);
      dispatch(getAllComment());
  } catch (error) {
      console.log(error)
  }
}