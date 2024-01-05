import React from 'react';
import './SearchList.css';
import { FaSearch } from 'react-icons/fa';

const SearchList = ({data,setSearchQuery}) => {
    return (
        <div className='Container_searchList'>
       
         {data.map((element,index)=>{
            return  <p key={index} className='titleList' onClick={e=>setSearchQuery(element)}>
           <FaSearch />  {element}</p>})}
        
        </div>
    );
}

export default SearchList;
