import React from 'react';
import Card from './Card';


const CardArray = ({robots}) =>{

    const CardList = robots.map((user,i)=>{
        const {id,name,email} = user;
        return <Card key={i}  id={id} name = {name} email = {email} />;
    });
    return(
       <div>
        {CardList}
       </div>
    );
}

export default CardArray;