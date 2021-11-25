import React from "react";

const Scroll = (props)=>{

    return(
        <div style={{overflow:"scroll",border:"solid 5px black",height:"1000px"}}>
            {props.children}
        </div>
    );
};

export default Scroll;