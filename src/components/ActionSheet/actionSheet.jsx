import React, { Component } from 'react'
import './actionSheet.less'
class ActionSheet extends Component{
    constructor() {
        super()
        this.vanish = this.vanish.bind(this);
    }
    render() {
        let { agreeNot, agreeQuit, onQuit, title, agree, not } = this.props;
        return (
            <div className={!agreeNot ? 'maskLayer' : "maskLayer visiAgreeNot"} onClick={this.vanish}>
                <div className="agreeNot">
                    <div className="agree">
                        <h6>{title}</h6>
                        <span onClick={(e) => { e.stopPropagation(); agreeQuit()}}>{agree}</span>
                    </div>
                    <div className="not"  onClick={(e) => { e.stopPropagation(); onQuit()}}>
                        <span>{not}</span>
                    </div>
                </div>
            </div>
        )
    }
    vanish() {
        this.props.onQuit();
    }
}

export default ActionSheet;