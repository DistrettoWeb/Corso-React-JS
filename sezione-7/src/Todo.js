
const Todo = ({todo, removeTodo, toggleCompleted}) => {
    const {id, task, completed} = todo
    
    const handleClickRemove = (evt) => {
        removeTodo(evt.target.id)
    }

    const handleClickCompleted = (evt) => {
        toggleCompleted(evt.target.id)
    }

    return <li key={id}>
            <span 
                id={id}
                onClick={handleClickCompleted}
                style={{"text-decoration": completed ? 'line-through' : 'auto'}} >
                {task}
            </span>
            <button 
                style={{marginLeft: '12px'}} 
                id={id} 
                onClick={handleClickRemove}>X</button>
        </li>
}
export default Todo
