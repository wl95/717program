/* 
    弹框组建 功能 agreeNot弹窗开关 类型Boolean
    agreeQuit 确定按钮回掉函数 类型func
    onQuit 关闭按钮回掉函数 类型func
    title 组件标题 类型string
    agree 确定按钮内容
    not  取消按钮内容 
*/
import React, { Component } from 'react'
import './actionSheet.less'
import PropTypes from 'prop-types'

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

ActionSheet.propTypes = {
    agreeNot: PropTypes.bool,
    agreeQuit: PropTypes.func,
    onQuit: PropTypes.func,
    title: PropTypes.string,
    agree: PropTypes.string,
    not: PropTypes.string,
};


export default ActionSheet;