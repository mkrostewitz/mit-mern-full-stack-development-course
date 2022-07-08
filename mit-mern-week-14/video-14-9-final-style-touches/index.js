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

        const removeToDo = index => {
            // create temporary list of ToDo's
            let temp = [...todos];
            // remove the ToDo item from the list
            temp.splice(index,1);
            // update the state
            setToDos(temp);
        };
        const completeToDo = index  => {
            // create temporay list of to dos
            let temp = [...todos];
            // set the item status to complete
            temp[index].isCompleted = true
            // update the state
            setToDos(temp);
        }
    return(
    <div className="app" >
        <div className="todo-list">
            {
            todos.map((todo,i) => 
            <ToDo index={i} todo={todo} remove={removeToDo} complete={completeToDo} />
            )}
    
            <ToDoForm addToDo={addToDo}/>
        </div>
    </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)