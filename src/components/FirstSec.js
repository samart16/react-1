import React from "react";
import '../App.css';
import { Button } from "./Button";
import './FirstSec.css';

const FirstSec = () => {
    return (
        <div className="firstSec-container">
            {/* <video  autoPlay loop muted/> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="firstSec-btns">
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    Watch Trailer <i className="fa fa-play-circle-o"/>
                </Button>
            </div>
        </div>
    );
}

export default FirstSec;