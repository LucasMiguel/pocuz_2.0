import React from "react";

export default function LabelTime(props) {
    var color = props.isConcentration ? "#E63635" : "#79C061";
    return (
        <span className={`text-[75px] text-[${color}] mt-[100px]`}>{props.time}</span>
    );
}