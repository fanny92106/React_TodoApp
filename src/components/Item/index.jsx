import React, {Component} from 'react'


export default class Item extends Component {
    render() {
        const {name, done} = this.props
        return(
            <li>
                <div style={{float:'left'}}>
                    <input type="checkbox" defaultChecked={done}/>
                    <span>{name}</span>
                </div>
                <div style={{float:'right'}}>
                    <button style={{backgroundColor: '#f44336', border: 'none'}}>delete</button>
                </div>
                <br />
            </li>
        )
    }
}