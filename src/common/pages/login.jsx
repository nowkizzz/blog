import React,{Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aaa: 'aaaa',
            bbb: 'bbbb'
        }
        // this.toMain = this.toMain.bind(this);
        this.toMainWan = this.toMainWan.bind(this);
        // this.toMain()
    }

    toMain = (num) => {
        console.log(this)
        this.setState({
            aaa: '555555555'
        })
        console.log('加箭头函数下方法', this.state.aaa)
        // this.props.history.push('/main')
    }
    toMainWan(pan) {
        console.log(this)
        this.setState({
            aaa: '3333333'
        })
        console.log(pan,33333333,this.state.aaa)
        // this.props.history.push('/main')

    }
    render() {
        return (
            <div className="loginPage">
                <h2>登录页面</h2>
                <button onClick={(e)=>this.toMain(4444444)}>登录跳转</button>
                <button onClick={(e) => this.toMainWan(222)}>登录跳转2</button>
                <button onClick={(e)=>this.toMainWan(444)}>登录跳转44</button>
            </div>
        )
    }
}

export default Login;