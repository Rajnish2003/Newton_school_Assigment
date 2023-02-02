import React, { useRef } from 'react';
import wave from './wave.css';
function Apps() {
    let inputRef = useRef(null);

    function handleInput() {
        inputRef.current.style = wave;
    }

    setInterval(() => {
        handleInput()
    }, 1000);

    return (
        <div className="App">
            <div className="head">Demo Project</div>
            <div className="center" ref={inputRef}>
                <div data-cy="counter"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>

        </div>
    );
}

export default Apps;
