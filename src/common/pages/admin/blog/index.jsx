import React, { Component } from 'react';
import { Table, Button } from 'antd';
import { getBlogList } from '@/api'

export class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      loading: true,
      pageIndex: 1,
      pageSize: 10,
      totalCount: 0
    }
  }
  handleTableChange = (pagination, filters, sorter) => {
    this.setState({
      pageIndex: pagination.current,
    });

  }
  viewItem() {

  }
  delteItem() {

  }
  // 点击添加博客按钮
  addBlog() {
    this.props.history.push('/admin/blog/edit/create')
  }
  async getList() {
    let res = await getBlogList()
    console.log('====================================');
    console.log(res);
    console.log('====================================');
    if (res.code === 200) {
      this.setState({
        dataList: res.data,
        totalCount: res.query.totalCount,
        loading: false
      })
    }
  }
  componentDidMount() {
    this.getList()
  }

  render() {
    let { dataList } = this.state;
    const columns = [
      {
        title: '文章名称',
        dataIndex: 'title',
        align:'center',
        headerAlign: 'center'
      },
      {
        title: '文章作者',
        dataIndex: 'author',
        align:'center',
        headerAlign: 'center'
      },
      {
        title: '文章摘要',
        dataIndex: 'remark',
        align:'center',
        headerAlign: 'center'
      },
      {
        title: '创建时间',
        dataIndex: 'createTimeTip',
        align:'center',
        headerAlign: 'center'
      },
      {
        title: '操作',
        align: 'center',
        headerAlign: 'center',
        render: (text, record) => {
          return <div>
            <Button type="default" style={{marginRight:20}} onClick={() => this.viewItem(record)}>查看</Button>
            <Button type="danger" onClick={() => this.deleteItem(record)}>删除</Button>
          </div>
        }
      },
    ];
    // rowSelection objects indicates the need for row selection
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      },
    };
    const pagination = {
      current: this.state.pageIndex,
      pageSize: this.state.pageSize,

    }
    return (
      <div className="admin-blog-page">
        <div className="admin-blog-header">
          <Button type="primary" onClick={() => this.addBlog()}>添加</Button>
        </div>
        <Table
          bordered
          rowSelection={rowSelection}
          columns={columns}
          dataSource={dataList}
          rowKey={record => record.id}
          loading={this.state.loading}
          onChange={this.handleTableChange}
          pagination={pagination}
        />
      </div>
    );
  }
}

export default Blog;
