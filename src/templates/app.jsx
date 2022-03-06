import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainWindow from './mainWindow';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.concentrationTime = 60;
        this.breakTime = 60;
        this.longTime = 120;
        this.totalCycles = 3;
        this.state = {
            time: this.concentrationTime,
            cyclesCount: 1,
            isPlay: true,
            isConcentration: true
        }
    }
    /** Função que irá formatar o tempo de segundos para minutos
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

    /** Função que irá fazer a contagem do tempo em forma decrescente */
    countTime() {
        if (this.state.time === 0) {
            this.setState({
                time: this.state.isConcentration ? (this.totalCycles === this.state.cyclesCount ? this.longTime : this.breakTime) : this.concentrationTime,
                isConcentration: !this.state.isConcentration,
                cyclesCount: this.totalCycles === this.state.cyclesCount ? 0 : this.state.isConcentration ? this.state.cyclesCount : this.state.cyclesCount + 1,
                isPlay: !this.state.isPlay
            });
            clearInterval(this.isCount);
        } else {
            this.setState({
                time: this.state.time - 1
            });
        }
    }

    /**Função que irá controlar a ação de clique do botão de play e pause */
    playPauseClick = () => {
        this.setState({
            isPlay: !this.state.isPlay
        });
        if (this.state.isPlay) {
            this.isCount = setInterval(() => this.countTime(), 100);
        } else {
            clearInterval(this.isCount);
        }
    }
    /**Função que irá pular para o próximo ciclo */
    jumpCycle = ()=>{
        this.setState({
            time: this.state.isConcentration ? (this.totalCycles === this.state.cyclesCount ? this.longTime : this.breakTime) : this.concentrationTime,
            isConcentration: !this.state.isConcentration,
            cyclesCount: this.totalCycles === this.state.cyclesCount ? 0 : this.state.isConcentration ? this.state.cyclesCount : this.state.cyclesCount + 1,
            isPlay: true
        });
        clearInterval(this.isCount);
    }

    /** Função que irá resetar o tempo*/
    resetClick = () => {
        this.setState({
            time: this.state.isConcentration ? this.concentrationTime: (this.totalCycles === this.state.cyclesCount ? this.longTime : this.breakTime),            
        });
        
    }

    render() {
        return (
            <div id='setDarkMode' className=''>
                <div className='bg-[#F0F3F3] dark:bg-[#011627]  h-screen'>
                    <React.StrictMode>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={
                                    <MainWindow
                                        time={this.timeFormat(this.state.time)}
                                        isConcentration={this.state.isConcentration}
                                        totalCycles={this.totalCycles}
                                        cyclesCount={this.state.cyclesCount}
                                        isPlay={this.state.isPlay}
                                        playPauseClick={this.playPauseClick}
                                        resetClick={this.resetClick}
                                        jumpCycle={this.jumpCycle}
                                    />
                                } />
                            </Routes>
                        </BrowserRouter>
                    </React.StrictMode>
                </div>
            </div>
        );
    }
}