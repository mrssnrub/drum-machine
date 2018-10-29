import React from 'react';
import DrumPad from "./DrumPad";
import {DisplayTuneName} from "./DisplayTuneName";

export function DrumMachine() {
    return (
        <div id="drum-machine" style={{background : 'teal'}}>
            <DrumPad/>

        </div>
    );
}