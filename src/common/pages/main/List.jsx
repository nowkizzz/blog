import React, { Component } from 'react'
import ListItem from './listItem';
import { getList, addUsers } from '@/api';
import { message } from 'antd';
// import { message,Button } from 'antd';

class List extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            list: [{
                id: 1
            }, {
                id: 2
            }, {
                id: 3
            }]
        }
    }
    async getList() {
        let data = await getList()
        if (data) {
            this.setState({
                count: data.data
            })
        }

    }
    async addUsers() {
        let query = {
            name: 'abc',
            password: '1123'
        }
        let res = await addUsers(query)
        if (res.success) {
            message.success('插入成功');
        }
    }
    componentDidMount() {
        // this.getList()
        // this.addUsers();
    }

    render() {
        return (
            <div className="mainList">
                {
                    this.state.list.map(item => {
                        return (
                            <ListItem info={item} key={item.id}></ListItem>
                        )
                    })
                }
            </div>
        )
    }
}

export default List