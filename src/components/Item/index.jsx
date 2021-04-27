import React, {Component} from 'react'


export default class Item extends Component {
    render() {
        return(
            <li>
                <label>
                    <input type="checkbox" />
                    <span>xxxxx</span>
                </label>
                <button>delete</button>
            </li>
        )
    }
}