import React from "react";

const Skills = (props) => {
    console.log(props)
    return (
        
        <div className="content">
            
            <img src={props.logo}/>
            <p>{props.name}</p>
        </div>
            

    )
}
export default Skills