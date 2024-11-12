import { useState } from "react"
import {v4 as uuidv4} from 'uuid'

import NewTodo from "./NewTodo"
import Todos from "./Todos"
import style from './home.module.css'

const Home = () => {
    const [todos, setTodos] = useState([])

    const handleAddTodo = (todo)=>{
    setTodos((preveTodo) =>{
        return [...preveTodo, {id: uuidv4(), todo}]
    })
}
const handleRemoveTodo = (id) =>{
    
    setTodos((preveTodos) =>{
        const filteredTodos = preveTodos.filter((todo) => todo.id !=id);
        return filteredTodos
    })
}

  return (
    <div className={style.container}>   
    <h1 style={{color: 'white'}}>Todo App</h1>
    <NewTodo onAddTodo = {handleAddTodo} />
        <Todos todos={todos} onRemoveTodo = {handleRemoveTodo} />
    </div>
  )
}

export default Home