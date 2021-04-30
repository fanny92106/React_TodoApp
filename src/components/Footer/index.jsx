import React, {Component} from 'react'


export default class Footer extends Component {
    // checkbox callback
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }

    // clearAllDone callback
    handleClearAllDone = () => {
        this.props.clearAllDone()
    }

    render() {
        console.log(this.props)
        const {todos} = this.props
        // count done todos
        const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1:0), 0)
        // count total todos
        const totalCount = todos.length

        return(
            <div style={{float:'left'}}>
                <label>
                    <input type="checkbox" checked = {doneCount === totalCount && totalCount !== 0 ? true: false} onChange={this.handleCheckAll}/>
                </label>
                <span>
                    <span>completed {doneCount}</span> / total {totalCount}
                </span>
                <div style={{display: 'inline-block', float:'right'}}>
                    <button onClick = {this.handleClearAllDone} style={{backgroundColor: '#f44336', border: 'none', height: 32}}>delete all</button>
                </div>
            </div>
        )
    }
}