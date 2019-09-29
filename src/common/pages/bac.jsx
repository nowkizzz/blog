import React, { Component } from 'react'

import xxx from '../../../public/config.json'

class Bac extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todayDate: this.formateTime(),
            isLeave: false
        }
        this.toMain = this.toMain.bind(this)
        // console.log(this.state)
    }
    formateTime() {
        let date = new Date();
        let separator = '-';
        return date.getFullYear() + separator + ((date.getMonth() < 9) ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)) + separator + ((date.getDate() < 10) ? ('0' + date.getDate()) : date.getDate());
    }
    toMain() {
        this.setState({
            isLeave: true
        }, () => {
            setTimeout(() => {
                this.props.history.push('/main')
            }, 500);
        })

    }
    componentDidMount() {
        console.log(xxx)
    }
    render() {
        return (
            <div className="Bac" style={{ 'transform': `translateY(${this.state.isLeave ? '-3000px' : 0})` }}>
                <div className="bacContent">
                    <p>{this.state.todayDate}</p>
                    {/* <a href="/main" className="mainLink" onClick={this.toMain}>点击进入</a> */}
                    <a href="javascript:void(0)" className="mainLink" onClick={this.toMain}>点击进入</a>
                </div>
            </div>
        )
    }
}


export default Bac