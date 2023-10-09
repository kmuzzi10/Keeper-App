import React from "react";

const Footer = ()=>{
const date = new Date();
const year = date.getFullYear();

const styling = {
    textAlign:"center",
    position:"absolute",
    width:"90%",
    bottom:"0",
    opacity:"0.4"
}


    return <div>
        <p style={styling}>Copyright {year}</p>
    </div>
};


export default Footer;