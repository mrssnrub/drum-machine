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
        return (
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-12">
                <button className="btn btn-lg btn-dark" onClick={this.handleClick} style={{margin: '5px'}}>{this.props.sample.keyTrigger}</button>
                    </div>
                </div>
            </div>

        );
    }
}