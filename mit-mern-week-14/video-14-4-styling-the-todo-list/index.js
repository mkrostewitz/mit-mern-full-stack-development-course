function App() {
    const [todos, setToDos] = React.useState([
        {
            text: 'learn react',
            isCompleted: false
        },
        {
            text: 'meet with friends for lunch',
            isCompleted: true
        },
        {
            text: 'build todo a to do',
            isCompleted: false
        }
        ]);
    return(<>
    {todos.map((todo,i) => 
    <div className={`todo ${todo.isCompleted ? "todo-complete" : "todo-incomplete"}`}
    key={i}>{todo.text} {todo.isCompleted ? "Completed" : "Incomplete"}</div>)}
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)