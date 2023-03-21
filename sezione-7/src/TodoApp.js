
import react, {useState} from 'react' 
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const defaultTodos = [
    {
        id: 1,
        completed: false,
        task: 'Comprare il Latte'
    },
    {
        id: 2,
        completed: false,
        task: 'Portare a spasso il cane'
    },
    {
        id: 3,
        completed: false,
        task: 'Rititrare la posta'
    },
    {
        id: 4,
        completed: false,
        task: 'Portare i vestiti in tintoria'
    }
]


const TodoApp = () => {
    const [todos, setTodos] = useState(defaultTodos)

    const createTodo = (newTodo) => {
        console.log(newTodo)
        setTodos([...todos, newTodo])
    }

    const removeTodo = (id) => {
        // Filtra l'array todos tenendo tutti i todo
        // a meno che il proprio id non sia l'id che 
        // passiamo come parametro
        setTodos(todos.filter(todo => todo.id != id))
    }

    const toggleCompleted = (id) => {
        setTodos(todos.map( todo => {
            if(todo.id == id ){
                return ({...todo, completed: !todo.completed})
            }
            return todo
        }))
    }


    return <>
        <TodoForm todos={todos} createTodo={createTodo}  />
        <TodoList   
            toggleCompleted={toggleCompleted} 
            removeTodo={removeTodo} 
            todos={todos} 
        />
    </>
}

export default TodoApp