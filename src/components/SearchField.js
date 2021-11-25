import React from 'react';


const SearchBox = ({SearchEvent}) =>{
    return(
       <input type="search" onChange={SearchEvent} placeholder="Enter your robo name"></input> 
    );
}

export default SearchBox;