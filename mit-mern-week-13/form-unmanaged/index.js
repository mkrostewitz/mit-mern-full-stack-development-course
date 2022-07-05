function SingUp() {
    function handle() {
        console.log(document.getElementById('year').value)
    }
    return (
    <>
        <select id="year">
            <option>Freshman</option>
            <option>Sophmore</option>
            <option>Junior</option>
            <option>Senior</option>
        </select>

        <div>Name</div>
        <input type="text" id="name" />
        <div>Email</div>
        <input type="text" id="email" />
        <div>Password</div>
        <input type="text" id="password" />
        <div>
            <input type="checkbox" id="checkbox" /> Remember me
        </div>
        <button onClick={handle}>Submit</button>
    </>
    )
};

ReactDOM.render (
<SingUp/>,
document.getElementById('root')
)