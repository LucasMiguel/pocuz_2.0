import React from "react";

export default function Circles({isfull=false}) {    
    var className = "w-4 h-4 border-[1px] rounded-2xl border-[#E63635] ";
    if(isfull){
        className += "bg-[#E63635]";
    }
    return (
        <>
            <span className={className}></span>            
        </>
    );
}