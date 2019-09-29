import React, { Component } from 'react';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import { editBlog } from '@/api'
import { Form, message, Input, Button, Select, Spin, DatePicker, Table, Checkbox, Radio } from 'antd';

export class editBlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: null,
      isCreate: this.props.match.params.id === 'create' ? true : false,
      loadingFinish: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);

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
  //  提交表单
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        let param = {
          title: values.title,
          author: values.author || '',
          remark: values.remark || '',
          content: values.content || '',
          nocache: 1
        };
        if (this.props.match.params.liveId !== 'create') {
          param.id = this.blogItem.id
        }
        let res = await LiveApplyItemEditForOperater.post(param)
        if (res.success) {
          message.success('保存成功')
        }
      }
    });
  }
  render() {
    const { editorState, isCreate, loadingFinish } = this.state
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 15 }
      }
    };
    return (
      <div className="editBlog">
        <div className="normalInfo">
          <Spin spinning={!loadingFinish}>
            <h3>{isCreate ? '添加博客' : '编辑博客'}</h3>
            <h3></h3>
            <Form onSubmit={this.handleSubmit}>
              <FormItem {...formItemLayout} label="名称：">
                {
                  getFieldDecorator('title', {
                    rules: [
                      { required: true, message: '请输入名称' }
                    ]
                  })(
                    <Input maxLength={50} placeholder="请输入名称"></Input>
                  )
                }
              </FormItem>
              <FormItem {...formItemLayout} label="作者：">
                {
                  getFieldDecorator('author', {
                    rules: [
                      { validator: this.validatorNumber.bind(this) },
                      {
                        required: true, message: '请输入作者'
                      }
                    ]
                  })(
                    <Input className="gray-background" placeholder="请输入人数" ></Input>
                  )
                }
              </FormItem>
              <FormItem {...formItemLayout} label="摘要：">
                {
                  getFieldDecorator('remark', {
                    rules: [
                      { required: true, message: '请输入摘要' }
                    ]
                  })(
                    <Input className="gray-background" placeholder="请输入摘要"></Input>
                  )
                }
              </FormItem>
              {/* <FormItem {...formItemLayout} label="联系方式：">
                {
                  getFieldDecorator('cellPhone', {
                    rules: [
                      { required: true, message: '请输入联系方式' },
                      { validator: this.validateFieldsPhone.bind(this) }
                    ]
                  })(
                    <Input className="gray-background" maxLength={20} placeholder="请输入联系方式"></Input>
                  )
                }
              </FormItem> */}
              <FormItem {...formItemLayout} label="博客文章：">
                {
                  getFieldDecorator('content', {
                    rules: [
                      { required: true, message: '请输入博客文章' }
                    ]
                  })(
                    // <Input className="gray-background"  placeholder="请输入摘要"></Input>
                    <BraftEditor
                      value={editorState}
                      onChange={this.handleEditorChange}
                      onSave={this.submitContent}
                    />
                  )
                }
              </FormItem>
              <FormItem wrapperCol={{ span: 15, offset: 9 }}>
                <Button type="primary" htmlType="submit" className="confirmBtn">确认</Button>
                {/* <Button type="primary" className="cancelFormBtn" onClick={() => this.cancelForm()}>取消</Button> */}
              </FormItem>
            </Form>
          </Spin>
        </div>
        {/* <BraftEditor
          value={editorState}
          onChange={this.handleEditorChange}
          onSave={this.submitContent}
        /> */}
      </div>
    );
  }
}
export default Form.create()(editBlogPage);

