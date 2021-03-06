import React, { useState } from "react";
import TodoForms from "./TodoForms"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { List } from "./styled"

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {
    const [ edit, setEdit ] = useState({
        id: null,
        value: ''
    })

    const onSubmitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id){
        return <TodoForms edit={edit} onSubmit={onSubmitUpdate} />
    }

    return todos.map((todo, index) => (
        <List
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <DeleteIcon
                    onClick = {() => removeTodo(todo.id)}
                    className = 'delete-icon'
                />
                <EditIcon
                    onClick = {() => setEdit({ id: todo.id, value: todo.text})}
                    className = 'edit-icon'
                />
            </div>
        </List>
    ))
}

export default Todo