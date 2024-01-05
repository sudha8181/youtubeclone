import { MdPendingActions } from "react-icons/md";

const chanelReducers=(states=[],action)=>{
    switch(action.type){
        case 'UPDATE_DATA':
          return states.map((states)=>states._id===MdPendingActions.payload._id?action.payload:states);
         case 'FETCH_CHANELS':
            return action.payload;
      default:  
         return states; 
    }
    
}

export default chanelReducers;