function ToDo ({todo, index, remove, complete}){
    const test = todo;

    function handleRemove() {
        remove(index);
    };

    function handleComplete() {
        complete(index)
    };

    return (
    <div className={`todo-line ${todo.isCompleted ? "todo-complete" : "todo-incomplete"}`} key={index} id={index}>
                <div className="todo">{todo.text}</div>
                <div className="delete"  onClick={handleRemove}>X</div>
                <div className="complete" onClick={handleComplete}>√</div>
    </div>
    )
}