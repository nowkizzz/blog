import React, { Component } from 'react';
import PersonalInfo from './personalInfo/index.jsx';
import './detail.less';

class detail extends Component {
  render() {
    return (
      <div className="detailPage">
        <header>
          详情页头部栏
        </header>
        <section className="detailPageContainer">
          <article>
            文章内容，源于世界之道，直到一刻的达成
          </article>
        </section>
        <PersonalInfo></PersonalInfo>
      </div>
    );
  }
}

export default detail;