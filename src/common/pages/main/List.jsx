import React, { Component } from 'react'
import ListItem from './listItem';
import {getList} from '@/api';

class List extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            list: [{
                id: 1
            },{
                id: 2
            },{
                id: 3
            }]
        }
    }
    async getList() {
        let data = await getList() 
        console.log(data)
        this.setState({
            count: data.data
        })
    }
    componentDidMount() {
        this.getList()
    }
    
    render() {
        return (
            <div className="mainList">
                {this.state.count}
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