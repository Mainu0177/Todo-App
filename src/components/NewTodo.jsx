/* eslint-disable react/prop-types */
import { useState } from 'react'
import style from './newtodo.module.css'

const NewTodo = (props) => {

    const [todo, setTodo] = useState(
        {
            title : '',
            desc : '',
        }
    )
    const {title, desc} = todo;

    const handleChange = (e) =>{
        const name = e.target.name;
        setTodo((oldTodo) =>{
            return {...oldTodo, [name]: e.target.value}
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setTodo({title: '', desc: ''})
        props.onAddTodo(todo)
    }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style['form-field']}>
            <label htmlFor="title">Title : </label>
            <input type="text" id = 'title' name = 'title' onChange={handleChange} value = {title} />
        </div>
        <div className={style['form-field']}>
            <label htmlFor="desc">Description : </label>
            <textarea type="text" id = 'desc' name = 'desc' onChange={handleChange} value={desc} />
        </div>
        <button type="submit">Add Todo</button>
    </form>
  )
}

export default NewTodo