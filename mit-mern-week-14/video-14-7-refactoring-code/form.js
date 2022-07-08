function ToDoForm({addToDo}) {
    const [value, setValue] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // check if there is a value entered, if not exit doing nothing
        if (!value) return;
        // if there is a value, get existing todos and add the new to do to the list
        addToDo(value);
        // Clear the input
        setValue('')
    };

    return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            className="input"
            value={value}
            placeholder="Add To Do..."
            onChange={e => setValue(e.target.value)}
        />
    </form>
    );
}