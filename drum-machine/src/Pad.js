import React from 'react';



export default class Pad extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.audioPlayCb(this.props.sample);
    }

    render() {
        const isLastPressed = (this.props.lastPlayed !== null && this.props.lastPlayed.keyTrigger === this.props.sample.keyTrigger);
        const classNames = isLastPressed && 'btn btn-lg btn-dark pad-btn pad-btn-active' || 'btn btn-lg btn-dark pad-btn';

        return (
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-12">
                <button className={classNames} onClick={this.handleClick} style={{margin: '5px'}}>{this.props.sample.keyTrigger}</button>
                    </div>
                </div>
            </div>

        );
    }
}