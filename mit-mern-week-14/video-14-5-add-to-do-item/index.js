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

        const [value, setValue] = React.useState('');
        const handleSubmit = e => {
            e.preventDefault();
            // check if there is a value entered, if not exit doing nothing
            if (!value) return;
            // if there is a value, get existing todos and add the new to do to the list
            const newTodos = [...todos, {text:value, isCompleted: false}];
            // Replaces old Todo's List with New To Do List
            setToDos(newTodos);
            // Clear the input
            setValue('')

        }
    return(<>
        {
        todos.map((todo,i) => 
            <div className={`todo ${todo.isCompleted ? "todo-complete" : "todo-incomplete"}`} key={i}>{todo.text}</div>)}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    className="input"
                    value={value}
                    placeholder="Add To Do"
                    onChange={e => setValue(e.target.value)}
                />
            </form>
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)