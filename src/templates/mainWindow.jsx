import React from "react";
import Circles from "../components/circles_time";


export default class MainWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "25:00",
            breaks: 5
        }
    }

    render() {
        return (
            <div className="grid justify-items-center">
                <span className="text-[70px] text-[#E63635] mt-[114px]">{this.state.time}</span>
                <div className="inline-flex space-x-3">
                    <Circles isfull={false} />
                    <Circles isfull={false} />
                    <Circles isfull={false} />
                    <Circles isfull={false} />
                    <Circles isfull={false} />                    
                </div>
                <div className="inline-flex space-x-5">
                    
                </div>
            </div>
        );
    }
}