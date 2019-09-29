import React, { Component } from 'react';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import { editBlog} from '@/api'
import {message} from 'antd'

export class editBlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: null,
      isCreate: this.props.match.params.id === 'create' ? true : false
    }
  }
  submitContent = async () => {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const htmlContent = this.state.editorState.toHTML()
    console.log('====================================');
    console.log(htmlContent);
    console.log('====================================');

    const res = await editBlog({
      content: htmlContent,
      id: this.state.isCreate ? '' : this.props.match.params.id,
      author: 'nowki',
      remark: '从零开始',
      title: '题目66666'
    })
    console.log('====================================');
    console.log(res);
    console.log('====================================');
    if (res.code === 200) {
      message.success('保存成功')
    }
  }

  handleEditorChange = (editorState) => {
    this.setState({ editorState })
  }

  render() {
    const { editorState } = this.state
    return (
      <div className="editBlog">
        <div className="normalInfo">
          
        </div>
        <BraftEditor
          value={editorState}
          onChange={this.handleEditorChange}
          onSave={this.submitContent}
        />
      </div>
    );
  }
}

export default editBlogPage;
