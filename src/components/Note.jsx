import React from "react";

const Note = ()=>{

     const styling = {
        marginTop : "20px",
        backgroundColor:"white",
        width:"250px",
        textAlign :"center",
        marginLeft:"5px",
        marginRight:"5px",
        borderRadius :"7px",
        boxShadow:"0 2px 5px #ccc"
     }

    return <div style={styling} className="col-lg-2 col-md-3 col-sm-4">
        <h3>for the title</h3>
        <p>for the content</p>
    </div>

    
};

export default Note;