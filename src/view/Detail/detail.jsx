import React, { Component } from 'react'

class Detail extends Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                Detail
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props)
    }
}

export default Detail;