import React from "react";
import BtnPlayPause from "../components/btnPlayPause";
import Circles from "../components/circles_time";


export default class MainWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "25:00",
            breaks: 5,
            isPlay: true,
            isConcentration: true
        }
    }

    playPauseClick = () => {        
        this.setState({
            isPlay:!this.state.isPlay
        });
    }

    render() {
        return (
            <div className="grid justify-items-center">
                <span className="text-[70px] text-[#E63635] mt-[100px]">{this.state.time}</span>
                <div className="inline-flex space-x-3">
                    <Circles isfull={false} />
                    <Circles isfull={false} />
                    <Circles isfull={false} />
                    <Circles isfull={false} />
                    <Circles isfull={false} />
                </div>
                <div className="inline-flex space-x-5 items-center mt-[30px]">
                    <button className="w-[45px] h-[45px] border-2 border-[#67B74C] rounded-[45px] " id="btnChangeCycle">Break</button>
                    <BtnPlayPause isPlay={this.state.isPlay} isConcentration={this.state.isConcentration} click={this.playPauseClick}/>
                    <button className="w-[45px] h-[45px] border-2 border-[#67B74C] rounded-[45px] " id="btnReset">Reset</button>
                </div>
            </div>
        );
    }
}