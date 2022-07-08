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
    return(<>
    {todos.map((todo,i) => <div key={i}>{todo.text}</div>)}
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)