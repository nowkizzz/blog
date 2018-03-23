import React,{Component} from 'react';
import MainHeader from './main/header'
import List from './main/List'

class Main extends Component {

    render() {
        return (
            <div className="mainPage">
                <div className="leftSlide">
                    <MainHeader></MainHeader>
                </div>
                <div className="mainContent">
                    <List></List>
                </div>
            </div>
        )
    }
}

export default Main;