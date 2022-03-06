import React from "react";

export default function Circles({isfull=false}) {    
    var className = "w-3 h-3 border-[1px] rounded-[12px] border-[#E63635] ";
    if(isfull){
        className += "bg-[#E63635]";
    }
    return (
        <>
            <span className={className}></span>            
        </>
    );
}