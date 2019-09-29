import React, { Component } from 'react'
// let logo = require('@/assets/headImage.jpg');
import {avatar} from '@/utils/config'

class MainHeader extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="mainHeader">
                <div className="headerImg">
                    <img src={avatar} alt="" />
                    <p className="headerName">Nowkizzz</p>
                    <p className="topText">思考--落花流水，从容写意</p>
                </div>
            </div>
        )
    }
}

export default MainHeader