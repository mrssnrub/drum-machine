import React from 'react';
import Pad from './Pad';
import DisplayTuneName from './DisplayTuneName'

export const keyIdentifiers = [
    {
        keyCode: 81,
        keyTrigger: 'Q',
        id: 'nicecow',
        url: '/audio/25[kb]nicecow.aif.mp3'
    },
    {
        keyCode: 87,
        keyTrigger: 'W',
        id: 'badcow',
        url: '/audio/31[kb]badcow.aif.mp3'
    },
    {
        keyCode: 69,
        keyTrigger: 'E',
        id: 'loconga',
        url: '/audio/22[kb]loconga.aif.mp3'
    },
    {
        keyCode: 65,
        keyTrigger: 'A',
        id: 'conga',
        url: '/audio/10[kb]conga.aif.mp3'
    },
    {
        keyCode: 83,
        keyTrigger: 'S',
        id: 'hardsleigh',
        url: '/audio/101[kb]hardsleigh.aif.mp3'
    },
    {
        keyCode: 68,
        keyTrigger: 'D',
        id: 'tamborine',
        url: '/audio/54[kb]tamborine1.aif.mp3'
    },
    {
        keyCode: 90,
        keyTrigger: 'Z',
        id: 'fingersnap',
        url: '/audio/32[kb]FingerSnap02.wav.mp3'
    },
    {
        keyCode: 88,
        keyTrigger: 'X',
        id: '808agogo',
        url: '/audio/30[kb]808agogo.aif.mp3'
    },
    {
        keyCode: 67,
        keyTrigger: 'C',
        id: 'locow',
        url: '/audio/13[kb]locow.aif.mp3'
    },
];

export default class DrumPad extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            volume: 100,
            lastPlayed: null,
        };
    }

    componentDidMount() {
        window.onkeydown = (e) => {
            keyIdentifiers.filter(k => k.keyCode === e.keyCode).map(k => {
                this.playAudio(k);
            });
        };
    }

    playAudio = (k) => {
        const audio = new Audio(k.url);
        audio.play();

        this.setState({
            lastPlayed: k,
        });
    };

    changeColor = (k) => {
        this.setState({white: !this.state.white})
    };

    render() {
        return (
            <div>
                <h1 className="text-center" style={{color: 'white'}}>Click or press a button to start playing</h1>

                {keyIdentifiers.map(k => <Pad
                    key={k.id}
                    lastPlayed={this.state.lastPlayed}
                    audioPlayCb={this.playAudio}
                    onKeyDown={this.changeColor}
                    sample={k}
                />)}
                <DisplayTuneName tune={this.state.lastPlayed && this.state.lastPlayed.id || null} />

            </div>
        )
    }
}
