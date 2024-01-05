import React from 'react';
import LeftSidebar from '../LeftSideBar/LeftSidebar';
import './WHL.css';
import WHLVideoList from './WHLVideoList';
import { useDispatch, useSelector } from 'react-redux';
import { clearHistory } from '../../action/History';

const WHL = ({page,videoList}) => {
  const CurrentUser = useSelector((state) => state?.currentUserReducer);

  const dispatch=useDispatch();

  const handleClearHistory=()=>{
    if(CurrentUser){
      dispatch(clearHistory({
        userId:CurrentUser?.result._id
      }))
    }
  }
    return (
        <div className='container_Pages_App'>
        <LeftSidebar/>
          <div className="container2_Pages_App">
          <div className="container_whl">
            <div className="boX_WHL leftside_whl">
             <b>Your {page} shown here</b>
             {page==="History" && <div className='clear_history_btn' onClick={()=>handleClearHistory()} >
                clear History
             </div>}
             

            </div>
            <div className="righSide_whl">
                <h1>{page}</h1>
               <div className="whl_list">
               <WHLVideoList 
               CurrentUser={CurrentUser?.result._id}
               page={page} videoList={videoList}/>
               </div>
            </div>
          </div>
          </div>
        </div>
    );
}

export default WHL;
