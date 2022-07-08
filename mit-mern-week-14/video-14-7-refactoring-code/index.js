function App() {
    const [todos, setToDos] = React.useState([
        {
            text: 'learn react',
            isCompleted: false
        },
        {
            text: 'meet with friends for lunch',
            isCompleted: false
        },
        {
            text: 'build todo a to do',
            isCompleted: false
        }
        ]);

        const addToDo = text => {
            // Add to Do Item to the line
            const newTodos = [...todos, {text: text, isCompleted: false}];
            // Replaces old Todo's List with New To Do List
            setToDos(newTodos);
        }

        const removeToDo = e => {
            // get a handle on the item
            const index = Number(e.target.parentElement.id);
            // create temporary list of ToDo's
            let temp = [...todos];
            // remove the ToDo item from the list
            temp.splice(index,1);
            // update the state
            setToDos(temp);
        };
        const completeToDo = e  => {
            // get a handle on the item
            const index = Number(e.target.parentElement.id);
            // create temporay list of to dos
            let temp = [...todos];
            // set the item status to complete
            temp[index].isCompleted = true
            // update the state
            setToDos(temp);
        }
    return(
    <>
        {
        todos.map((todo,i) => 
            <div className={`todo-line ${todo.isCompleted ? "todo-complete" : "todo-incomplete"} ` } key={i} id={i}>
                <div className={`todo`}>{todo.text}</div>
                <div className="delete"  onClick={removeToDo}>X</div>
                <div className="complete" onClick={completeToDo}>√</div>
            </div>
            )}

        <ToDoForm addToDo={addToDo}/>
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)