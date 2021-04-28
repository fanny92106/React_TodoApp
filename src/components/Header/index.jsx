import React, {Component} from 'react'
import {nanoid} from 'nanoid'


export default class Header extends Component {

    handleKeyUp = (event) => {
        const {keyCode, target} = event
        if(keyCode !== 13) return
        if(target.value.trim() === '') {
            alert('Input cannot be empty!')
            return
        }
        const dataObj = {id:nanoid(), name: target.value, done: false}
        this.props.addTodo(dataObj)
        target.value = ''
    }

    render() {
        return (
            <div>
                <input onKeyUp={this.handleKeyUp}
                    type="text" style={{width: '100%', height:25}}
                    placeholder="please input your task name" />
            </div>
        )
    }
}