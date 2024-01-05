import React, { useState } from 'react';
import './SearchBar.css';
import { FaSearch } from "react-icons/fa";
import { IoMdMic } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import SearchList from './SearchList';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const SearchBar =() => {
    const [searchQuery,setSearchQuery]=useState("");
    const[searchListA,setSearchListA]=useState(true);
    const TitleArray = useSelector(s=>s?.videoReducer)
    ?.data?.filter(q=> q?.videoTitle.toUpperCase().includes(searchQuery?.toUpperCase())).map(m=>m?.videoTitle)    // const Suggestion=['Movie','Bahubali','Video','Animal'].filter(q=>q.toLocaleUpperCase().includes(searchQuery));

    const handleSearch=(event)=>{
     setSearchQuery(event.target.value);
    
    }
    return (
        <div className='SearchBar_Container'>c
         <div className="SearchBar_Container2">
            <div className="search_div">
                <input
                 type="text" 
                 className='iBox_SearchBar'
                 onChange={handleSearch}
                 value={searchQuery}    
                 placeholder='Search'
                  />
                  
                <Link to={`/search/${searchQuery}`}>
                <FaSearch className='searchIcon_SearchBar' onClick={()=>setSearchListA(false)}/>     
                </Link>
               
                <IoMdMic className='Mic_SearchBar'/>
            </div>
            {searchQuery && searchListA && <SearchList data={TitleArray} 
                setSearchQuery={setSearchQuery}
            />}
          
         </div>
    
        </div>
    );
}

export default SearchBar;
