import React from 'react';
import {DrumPad, keyIdentifiers} from "./DrumPad";


export default class DisplayTuneName extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log(this.state);
        return (
            <div id="display">
                <h3 className="text-center" style={{color: 'white'}}>Tune: {this.props.tune}</h3>
            </div>
        );
    }
}