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
            <dialog className="botw-dialog" ref={x => { this.dialog = x; }}>
                <div className="left-wrapper">
                    <img src={this.props.imgSrc} alt="Dialog logo" />
                </div>
                <div className="right-wrapper">
                    <header className="title">{this.props.dialogTitle}</header>
                    {this.props.children}
                </div>
            </dialog>
        );
    }

    componentDidMount() {
        // have to setTimeout
        setTimeout(() => {
            this.dialog.style.opacity = 1;
            this.dialog.style.top = '35vh';
        }, 0);
    }
}

export default BotwDialog;