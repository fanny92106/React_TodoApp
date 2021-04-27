import React, {Component} from 'react'
import Item from '../Item'


export default class List extends Component {
    render() {
        return (
            <ul>
                <Item />
                <Item />
                <Item />
            </ul>
        )
    }
}
