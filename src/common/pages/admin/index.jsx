import React, { Component } from 'react';
import './index.less'
import { Layout, Menu, Icon } from 'antd';
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable';
import Loading from '@/common/components/loading.jsx'
const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

const Home = Loadable({
  loader: () => import('./home/index.jsx'),
  loading: Loading
});
const Comment = Loadable({
  loader: () => import('./comment/index.jsx'),
  loading: Loading
});
const Blog = Loadable({
  loader: () => import('./blog/index.jsx'),
  loading: Loading
});
const UserInfo = Loadable({
  loader: () => import('./userInfo/index.jsx'),
  loading: Loading
});
const BlogEdit = Loadable({
  loader: () => import('./blog/edit.jsx'),
  loading: Loading
});
class AdminPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      menuList: [{
        key: 'home',
        title: '首页',
        icon: 'home'
      }, {
        key: 'blog',
        title: '博客文章',
        icon: 'read'
      }, {
        key: 'comment',
        title: '评论',
        icon: 'file'
      }, {
        key: 'user',
        title: '个人信息',
        icon: 'user'
      }]
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  clickMenu(item) {
    console.log('====================================');
    console.log(item);
    console.log('====================================');
    this.props.history.push('/admin/' + item.key)
  }
  render() {
    let routeKey = this.props.location.pathname.split('/')[2]
    return (
      <div className="blogAdmin">
        <Layout>
          <Sider 
          trigger={null} 
          collapsible 
          collapsed={this.state.collapsed}
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
          >
            <div className="logo" >
              nowkizzz blog
              </div>
            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={[routeKey]}
              style={{ minHeight: 'calc(100% - 65px)' }}
              onClick={this.clickMenu.bind(this)}
            >
              {
                this.state.menuList.map(item => (
                  <Menu.Item key={item.key}>
                    <Icon type={item.icon} />
                    <span>{item.title}</span>
                  </Menu.Item>
                ))
              }
            </Menu>
          </Sider>
          <Layout style={{ marginLeft: 200 }}>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}
            >
              <Switch>
                <Route path='/admin' component={Home} exact />
                <Route path='/admin/home' component={Home} exact />
                <Route path='/admin/blog' component={Blog} exact />
                <Route path='/admin/comment' component={Comment} exact />
                <Route path='/admin/user' component={UserInfo} exact />
                <Route path='/admin/blog/edit/:id' component={BlogEdit} exact />
              </Switch>
            </Content>
            <Footer style={{ textAlign: 'center' }}>nowkizzz blog ©2019 Created by Nowki</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default AdminPage;