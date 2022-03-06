import React from "react";

export default function LabelTime(props) {
    var textColor = ""
    if(props.isConcentration){
        textColor = "text-[#E63635]";
    }else{
        textColor = "text-[#79C061]";
    }
    return (
        <span className={`text-[75px] ${textColor} mt-[95px]`}>{props.time}</span>
    );
}