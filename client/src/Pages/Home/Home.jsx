import React from 'react';
import LeftSidebar from '../../Components/LeftSideBar/LeftSidebar';
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid';
import { useSelector } from "react-redux";
// import vid from '../../Components/Video/vid.mp4';
import './Home.css';

const Home = () => {
   const vids=useSelector(state=>state.videoReducer)?.data;
  // const videoFile=useSelector(state=>state.videoReducer);
  // console.log(videoFile);

//   const Vids=[
//     { _id:1,
//     video_src:vid,
//     channel:"62bafe6752cea35a6c30685f",
//     uploader:"ABC",
//     title:"video 1",
//     description:"description of video 1"
//    },
//    { _id:2,
//     video_src:vid,
//     channel:"cdd",
//     uploader:"xyz",
//     title:"video 2",
//     description:"description of video 2"
//    },

//    { _id:3,
//     video_src:vid,
//     channel:"add",
//     uploader:"kLM",
//     title:"video 3",
//     description:"description of video 3"
//    },
//    { _id:4,
//     video_src:vid,
//     channel:"add",
//     uploader:"SQ",
//     title:"video 4",
//     description:"description of video 4"
//    }

// ];

const NavList=[
  "All",
  "Python",
  "Java",
  "C++",
  "Movies",
  "Science",
  "Animation",
  "Gaming",
  "Comedy"
];
    return (
        <div className='container_Pages_App'>
        <LeftSidebar />
          <div className="container2_Pages_App">
            <div className='Navigation_Home'>
              {NavList.map((m)=>{
                 return <p key={m} className='btn_nav_home'>
                 {m}</p>;
              })}
            </div>
            <ShowVideoGrid vids={vids}/>
          </div>
        </div>
    );
}

export default Home;
