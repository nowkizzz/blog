import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    let { info } = this.props;
    return (
      <div className="listItem">
        <div className="title">
          <p>
            <a href={`/detail/${info.id}`}>读万卷书，行万里路</a>          
          </p>
          <p className="subTitle">
            <span className="createTime">创建时间：2018-9-26</span>
            <span className="author">作者：nowkizzz</span>
          </p>
        </div>
        <div className="introduction">
          我有一剑，可搬山，倒海。
        </div>
      </div>
    );
  }
}

export default ListItem;