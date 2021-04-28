import React, {Component} from 'react'


export default class Item extends Component {

    state = {mouse: false}

    // callback for mouseEnter/ mouseLeave event
    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    // callback for check/ uncheck checkbox
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return(
            <li style={{backgroundColor: mouse ? '#61DAFB': ''}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <div style={{float:'left'}}>
                    <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
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