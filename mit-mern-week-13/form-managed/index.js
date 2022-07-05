function SingUp() {
    const[year, setYear] = React.useState('');
    const[name, setName] = React.useState('');
    const[email, setEmail] = React.useState('');
    const[password, setPassword] = React.useState('');
    const[remember, setRemember] = React.useState('');

    function handle() {
        console.log('year:', year);
        console.log('name:', name);
        console.log('email:', email);
        console.log('password:', password);
        console.log('remember me:', remember)
    }
    return (
    <>
        <select id="year" value={year} onChange={e => setYear(e.target.value)}>
            <option>Freshman</option>
            <option>Sophmore</option>
            <option>Junior</option>
            <option>Senior</option>
        </select>

        <div>Name</div>
        <input type="text" id="name" onChange={e => setName(e.target.value)} />
        <div>Email</div>
        <input type="text" id="email" onChange={e => setEmail(e.target.value)} />
        <div>Password</div>
        <input type="text" id="password" onChange={e => setPassword(e.target.value)}/>
        <div>
            <input type="checkbox" id="checkbox" onChange={e => setRemember(e.target.checked)} /> Remember me
        </div>
        <button onClick={handle}>Submit</button>
    </>
    )
};

ReactDOM.render (
<SingUp/>,
document.getElementById('root')
)