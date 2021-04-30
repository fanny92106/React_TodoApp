import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'


export default class List extends Component {

    // constrain props' input: type, necessary
    static propTypes =  {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    render() {
        const {todos, updateTodo, deleteTodo} = this.props
        return (
            <ul style={{listStyle: 'none', marginLeft: -50}}>
                {
                todos.map(todo => {
                    return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                })
                }
            </ul>
        )
    }
}
