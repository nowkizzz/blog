import React, { Component } from 'react';
import PersonalInfo from './personalInfo/index.jsx';
import './detail.less';

class detail extends Component {
  render() {
    return (
      <div className="detailPage">
        <header>
          <p className="headerText">有朋自远方来，不亦乐乎</p> 
        </header>
        <section className="detailPageContainer">
          <h3>论自己与世界的见闻</h3>
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