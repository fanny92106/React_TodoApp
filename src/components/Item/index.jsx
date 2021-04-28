import React, {Component} from 'react'


export default class Item extends Component {

    state = {mouse: false}

    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    render() {
        const {name, done} = this.props
        const {mouse} = this.state
        return(
            <li style={{backgroundColor: mouse ? '#61DAFB': ''}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <div style={{float:'left'}}>
                    <input type="checkbox" defaultChecked={done}/>
                    <span>{name}</span>
                </div>
                <div style={{float:'right'}}>
                    <button style={{ display: mouse? 'block': 'none', backgroundColor: '#f44336', border: 'none', height: 32}}>delete</button>
                </div>
                <br />
            </li>
        )
    }
}