import Todo from './Todo'

const TodoList = ({todos, removeTodo, toggleCompleted}) => {
    return (
        <section className="section-todolist">
            <h2>List dei Todo</h2>
            <ul>
                {todos.map((todo) => (
                    <Todo 
                        removeTodo={removeTodo} 
                        toggleCompleted={toggleCompleted} 
                        todo={todo}
                    />
                ))}
            </ul>
        </section>
    )
}

export default TodoList