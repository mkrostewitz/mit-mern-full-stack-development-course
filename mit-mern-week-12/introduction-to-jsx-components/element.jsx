// React render a element
// const name = 'Mary Jayne';
// const element = <h1> Hello {name} </h1>;

// React render a component
const Hello = props => {
    let bgColor = props.action();
    let fontColor = props.action()
    const name = props.name;
    return (
        <h1 style={{ backgroundColor: bgColor, color: fontColor}}> Hello {name} </h1>
)};

const getRandomColor = () => {
    const palet = ["red", "green", "blue", "yellow", "#A8C957", "#333333"];
    let color = palet[Math.floor(Math.random() * 6)];
    console.log(color);
    return color;
};

ReactDOM.render(<Hello action={getRandomColor} name='Francis'/>, document.getElementById('root'));
