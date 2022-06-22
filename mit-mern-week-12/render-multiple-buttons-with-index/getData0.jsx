const App = () => {
  let product = { name: "pear", cost: 2, inStock: 7};
  let {name, inStock} = product;
  let item = {name, inStock};
  const handler = (e) => alert(`button: ${e.target.getAttribute("index")} name: ${item.name} instock: ${inStock}`);

  //create a list for multiple buttons
  let a = [1,2,3,4];
  let list = a.map((item, index) => {  
   return <MyButton key={index} onClick={handler} index={index}></MyButton>; 
  });


  return <>{list}</>;
};

const MyButton = ({ onClick, index }) => {
  // Renaming of properties is possible - but not recommended e.g. this Bootstrap button
  let { Button: Abutton } = ReactBootstrap;
  return <Abutton index={index} onClick={onClick}>Click Me</Abutton>
}

//Destructure an object



//---------------
ReactDOM.render(<App />, document.getElementById("root"));
