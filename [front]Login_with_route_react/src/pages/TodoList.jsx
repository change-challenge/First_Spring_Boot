import { useState } from 'react'

const TodoList = () => {
    const [toDo, setToDo] = useState('')
    const [toDos, setToDos] = useState([])
    const onChange = e => setToDo(e.target.value)
    const onSubmit = e => {
        e.preventDefault()
        if (toDo === '') {
            return
        }
        setToDos([...toDos, toDo])
        setToDo('')
    }

    return (
        <div>
            <h1>MY TO DOs : ({toDos.length}) </h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    type="text"
                    value={toDo}
                    placeholder="Write your to do..."
                />
                <button>Add To Do</button>
                <button onClick={() => setToDos([])}>Clear Your Todo</button>
            </form>
            <hr />
            <ul>
                {toDos.map((target, index) => (
                    <li key={index}>{target}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
