import React from "react";
import { Link } from "react-router-dom";
import BtnAssistant from "../components/btnAssistant";
import BtnPlayPause from "../components/btnPlayPause";
import Circles from "../components/circles_time";
import LabelTime from "../components/LabelTime";


export default class MainWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 60,
            breaks: 5,
            isPlay: true,
            isConcentration: false
        }
    }
    /**
     * Função que irá formatar o tempo de segundos para minutos
     * @param {*} duration O tempo em segundos
     * @returns 
     */
    timeFormat = (duration) => {
        // Hours, minutes and seconds
        var hrs = ~~(duration / 3600);
        var mins = ~~((duration % 3600) / 60);
        var secs = ~~duration % 60;

        // Output like "1:01" or "4:03:59" or "123:03:59"
        var ret = "";

        if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }

        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
    }

    countTime = ()=>{
        this.setState({
            time: this.state.time - 1
        })
    }

    playPauseClick = () => {
        this.setState({
            isPlay: !this.state.isPlay
        });
        console.log(this.state.isPlay);
        // if (this.state.isPlay) {
        //     this.isCount = setInterval(() => this.countTime(), 1000);
        // } else {
        //     clearInterval(this.isCount);
        // }
    }

    resetClick = () => {
        console.log("Coisa");
    }

    render() {
        return (
            <div className="grid justify-items-center">
                <LabelTime isConcentration={this.state.isConcentration} time={this.timeFormat(this.state.time)} />
                <div className="inline-flex space-x-3">
                    <Circles isfull={true} />
                    <Circles isfull={false} />
                    <Circles isfull={false} />
                    <Circles isfull={false} />
                    <Circles isfull={false} />
                </div>
                <div className="inline-flex space-x-10 items-center mt-[40px]">
                    <BtnAssistant isConcentration={this.state.isConcentration} />
                    <BtnPlayPause isPlay={this.state.isPlay} isConcentration={this.state.isConcentration} click={this.playPauseClick} />
                    <BtnAssistant isReset={true} isConcentration={this.state.isConcentration} click={this.resetClick} />
                </div>
                <div className="flex absolute bottom-2 right-2">
                    <Link to="/settings">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.82 22H10.18C9.95194 22 9.73071 21.9221 9.55301 21.7792C9.37531 21.6362 9.25181 21.4368 9.20301 21.214L8.79601 19.33C8.25306 19.0921 7.73824 18.7946 7.26101 18.443L5.42401 19.028C5.20657 19.0973 4.97196 19.0902 4.75913 19.0078C4.5463 18.9254 4.36806 18.7727 4.25401 18.575L2.43001 15.424C2.31715 15.2261 2.27479 14.9958 2.30985 14.7708C2.34491 14.5457 2.45532 14.3392 2.62301 14.185L4.04801 12.885C3.9832 12.2961 3.9832 11.7019 4.04801 11.113L2.62301 9.816C2.45508 9.66177 2.34452 9.45507 2.30946 9.22978C2.27439 9.00449 2.3169 8.77397 2.43001 8.576L4.25001 5.423C4.36406 5.22532 4.5423 5.07259 4.75513 4.99019C4.96796 4.90778 5.20257 4.90066 5.42001 4.97L7.25701 5.555C7.50101 5.375 7.75501 5.207 8.01701 5.055C8.27001 4.913 8.53001 4.784 8.79601 4.669L9.20401 2.787C9.25258 2.5642 9.37584 2.36469 9.55335 2.22155C9.73087 2.07841 9.95197 2.00024 10.18 2H13.82C14.048 2.00024 14.2691 2.07841 14.4467 2.22155C14.6242 2.36469 14.7474 2.5642 14.796 2.787L15.208 4.67C15.7503 4.90927 16.2649 5.20668 16.743 5.557L18.581 4.972C18.7983 4.90292 19.0327 4.91017 19.2453 4.99256C19.4579 5.07495 19.636 5.22753 19.75 5.425L21.57 8.578C21.802 8.985 21.722 9.5 21.377 9.817L19.952 11.117C20.0168 11.7059 20.0168 12.3001 19.952 12.889L21.377 14.189C21.722 14.507 21.802 15.021 21.57 15.428L19.75 18.581C19.636 18.7787 19.4577 18.9314 19.2449 19.0138C19.0321 19.0962 18.7974 19.1033 18.58 19.034L16.743 18.449C16.2661 18.8003 15.7516 19.0975 15.209 19.335L14.796 21.214C14.7472 21.4366 14.6239 21.6359 14.4464 21.7788C14.2689 21.9218 14.0479 21.9998 13.82 22V22ZM11.996 8C10.9351 8 9.91772 8.42143 9.16758 9.17157C8.41743 9.92172 7.99601 10.9391 7.99601 12C7.99601 13.0609 8.41743 14.0783 9.16758 14.8284C9.91772 15.5786 10.9351 16 11.996 16C13.0569 16 14.0743 15.5786 14.8244 14.8284C15.5746 14.0783 15.996 13.0609 15.996 12C15.996 10.9391 15.5746 9.92172 14.8244 9.17157C14.0743 8.42143 13.0569 8 11.996 8V8Z" fill="#67B74C" />
                        </svg>
                    </Link>
                </div>
                <div className="flex absolute bottom-2 left-2">
                    <Link to="/about">
                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_232_304)">
                                <path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16V16ZM8.93 6.588L7.93 11.293C7.86 11.633 7.959 11.826 8.234 11.826C8.428 11.826 8.721 11.756 8.92 11.58L8.832 11.996C8.545 12.342 7.912 12.594 7.367 12.594C6.664 12.594 6.365 12.172 6.559 11.275L7.297 7.807C7.361 7.514 7.303 7.408 7.01 7.337L6.559 7.256L6.641 6.875L8.931 6.588H8.93ZM8 5.5C7.73478 5.5 7.48043 5.39464 7.29289 5.20711C7.10536 5.01957 7 4.76522 7 4.5C7 4.23478 7.10536 3.98043 7.29289 3.79289C7.48043 3.60536 7.73478 3.5 8 3.5C8.26522 3.5 8.51957 3.60536 8.70711 3.79289C8.89464 3.98043 9 4.23478 9 4.5C9 4.76522 8.89464 5.01957 8.70711 5.20711C8.51957 5.39464 8.26522 5.5 8 5.5V5.5Z" fill="#E63635" />
                            </g>
                            <defs>
                                <clipPath id="clip0_232_304">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </Link>
                </div>
            </div>
        );
    }
}