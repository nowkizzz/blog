import React, { Component } from 'react';
import './personalInfo.less';
// let logo = require('@/assets/headImage.jpg');
import {avatar} from '@/utils/config'
class personalInfo extends Component {
  render() {
    return (
      <div className="personalInfoPane">
        <div className="headerImage">
          {/* <img src="../../../../assets/headImage.jpg" alt=""/> */}
          <img src={avatar} alt=""/>
        </div>
        <div className="content">
          <p className="name">NowkiLi</p>
          <p className="introduction">风起可云涌</p>
          <p className="introduction">欢迎联系~~</p>
        </div>
      </div>
    );
  }
}

export default personalInfo;