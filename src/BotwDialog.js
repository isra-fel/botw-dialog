import React, { Component } from 'react';
import './css/BotwDialog.css'

class BotwDialog extends Component {
    show() {
        // play fade in animation
    }
    hide() {
        // play fade out animation
    }
    render() {
        return (
            <div className="botw-dialog">
                <img src={this.props.imgSrc} alt="Dialog logo" />
                <div className="right-wrapper">
                    <header className="title">{this.props.dialogTitle}</header>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default BotwDialog;