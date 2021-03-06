import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import TodoForm from "./TodoForms"
import Todo from "./Todo"
import TodoImg from "../assets/todo.png"
import { TodoContainer } from "./styled"
import { Header } from "../pages/styled";
import LogoHeader from "../assets/logo.png"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [dateRange, setDateRange] = useState([null, null])
    const [startDate, endDate] = dateRange;


    const navigate = useNavigate()

    const goToHome = () => {
      navigate("/")
    }

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        console.log(...todos)
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id )
        setTodos(removedArr)
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const displayEmojiName = e => alert(e.target.id);
    const emojis = [
        {
            emoji: '✅',
            name: "Concluded"
        },
        {
            emoji: '📌',
            name: "Attached"
        }
    ]
    return(
        <div>
            <Header>
                <button
                    onClick={goToHome}
                >
                    Home
                </button>
                <img src={LogoHeader}/>
            </Header>
            <TodoContainer>
                <img src={TodoImg}/>
                <h1>Todo List Truss</h1>
                <h2>Data Inicio 📌 - Data Final ✅
                <DatePicker
                    selectsRange={ true }
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat='dd/MM/yyyy'
                    onChange={(update)=> {
                        setDateRange(update)
                    }}
                />
                </h2>
                <div>
                    <h1>What's the Plan for today?</h1>
                    <TodoForm onSubmit={addTodo}/>
                    <Todo
                        todos={todos}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                        />
                </div>
            </TodoContainer>
        </div>
    )
}

export default TodoList