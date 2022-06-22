const App = () => {
  let product = { name: "pear", cost: 2, inStock: 7};
  let {name, inStock} = product;
  let item = {name, inStock};
  const handler = (index) => alert(`button: ${index} name: ${item.name} instock: ${inStock}`);

  //create a list for multiple buttons
  let a = [1,2,3,4];
  let list = a.map((item, index) => {  
   return <MyButton onClick={()=>handler(index)} key={index}></MyButton>; 
  });


  return <>{list}</>;
};

const MyButton = ({ onClick }) => {
  // Renaming of properties is possible - but not recommended e.g. this Bootstrap button
  let { Button: Abutton } = ReactBootstrap;
  return <Abutton onClick={onClick}>Click Me</Abutton>
}

//Destructure an object



//---------------
ReactDOM.render(<App />, document.getElementById("root"));
