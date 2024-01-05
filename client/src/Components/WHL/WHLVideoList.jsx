import React from 'react';
import ShowVideoList from '../ShowVideoList.jsx/ShowVideoList';

const WHLVideoList = ({page,CurrentUser,videoList}) => { 
 //console.log(videoList.data.map((m=>  m.videoId))[0]);
 console.log(videoList);
    return (
        <>
        {CurrentUser?(
            <>
            {videoList?.data?.filter(q=>q?.Viewer === CurrentUser).reverse().map((m)=>{
               return <ShowVideoList videoId={m?.videoId} key={m?._id}/>;
            })}
            </>):(<>
                <h2>Plz Login to watch Your {page}</h2>
            </>)}
           
        </>
        
    );
}

export default WHLVideoList;
