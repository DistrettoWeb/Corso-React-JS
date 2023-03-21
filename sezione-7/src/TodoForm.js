import { useReducer, useState } from "react"

const TodoForm = ({createTodo, todos}) => {

    const [userInput, setUserInput]  = useReducer( (state, newState) => {
        return {...state, ...newState}
    }, {task: ""})

    const handleOnChange = (evt) => {
        console.log(evt.target.value)
        setUserInput({task: evt.target.value  })

    }

    const handleOnSubmit = (evt) => {
        evt.preventDefault()
        // Creiamo il todo
        const newTodo = {
            task: userInput.task, 
            id: todos.length + 1  
        }
        createTodo(newTodo)
        // Resettiamo il campo
        setUserInput({ task: ""})
    }   

    return (
        <section className="section-todoform">
            <h2>Crea un nuovo Todo</h2>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="task">Aggiungi un task: </label>
                <input 
                    id="task" 
                    placeholder="Aggiungi Todo" 
                    name="todo" 
                    type="text"
                    value={userInput.task}
                    onChange={handleOnChange}
                />
                <button disabled={!userInput.task}>Salva</button>
            </form>
        </section> 
    )
}

export default TodoForm