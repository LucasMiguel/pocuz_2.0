import React from "react";
import BtnAssistant from "../components/btnAssistant";
import BtnPlayPause from "../components/btnPlayPause";
import Circles from "../components/circles_time";
import LabelTime from "../components/LabelTime";


export default class MainWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "25:00",
            breaks: 5,
            isPlay: true,
            isConcentration: false
        }
    }

    playPauseClick = () => {
        this.setState({
            isPlay: !this.state.isPlay
        });
    }

    resetClick = () => {
        console.log("Coisa");
    }

    render() {
        return (
            <div className="grid justify-items-center">
                <LabelTime isConcentration={this.state.isConcentration} time={this.state.time} />
                <div className="inline-flex space-x-3">
                    <Circles isfull={true} />
                    <Circles isfull={false} />
                    <Circles isfull={false} />
                    <Circles isfull={false} />
                    <Circles isfull={false} />
                </div>
                <div className="inline-flex space-x-5 items-center mt-[35px]">
                    <BtnAssistant isConcentration={this.state.isConcentration} />
                    <BtnPlayPause isPlay={this.state.isPlay} isConcentration={this.state.isConcentration} click={this.playPauseClick} />
                    <BtnAssistant isReset={true} isConcentration={this.state.isConcentration} click={this.resetClick} />
                </div>
            </div>
        );
    }
}