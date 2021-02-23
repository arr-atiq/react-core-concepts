import './App.css';
import React, { useEffect, useState } from "react";

// function App() {
//   const person = {
//     name: "Atiqur Rahman",
//     age: 25,
//     gender: "male"
//   }
//   const style = {
//     backgroundColor: "yellow",
//     color: "black"
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1 style= {style} > My First Heading</h1>
//         <h2 style= {style}>Person Name: {person.name}</h2>
//         <h2 style= {style}>Person Gender: {person.gender} </h2>
//         <h2 style= {style}>Person Age: {person.age} </h2>
//       </header>
//     </div>
//   );
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Person name="Atiqur Rahman" position="FrontEnd Developer" age="25"></Person>
//         <Person name="Labiba Rahman" position="Lecturer" age="20"></Person>
//         <Person name="Atiqur Rahman" position="FrontEnd Developer" age="25"></Person>
//       </header>
//     </div>
//   );
// }

// function Person(props){
//   return (
//     <div style = {{border: '1px solid gold', width:'400px', margin:'10px'}}>
//       <h2>Person Information Below</h2>
//       <h3>My Name: {props.name} </h3>
//       <h3>My Position:{props.position}</h3>
//       <h4>My Age:{props.age}</h4>
//     </div>
//   )
// }


// function App() {
//   const products = [
//     {name: "Adobe PhotoShop", price: "$90.90"},
//     {name: "Adobe Illustrator", price: "$50.50"}
//   ]
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Card product= {products[0]}></Card>
//         <Card product= {products[1]}></Card>
//       </header>
//     </div>
//   );
// }

// function Card (props){
//   const style = {
//     backgroundColor: 'gray',
//     border: "2px solid cyan",
//     borderRadius: "10px",
//     width: "300px",
//     height: "250px",
//     margin: "10px",
//     float: "left",
//     boxShadow: "5px 10px 10px cyan"
//   }
//   const {name, price} = props.product;
//   return(
//     <div style = {style}>
//       <h2>{name}</h2>
//       <h3>{price}</h3>
//       <button>Buy Now</button>
//     </div>
//   )
// }

function App() {
  const products = [
    {name: "Adobe PhotoShop", price: "$90.90"},
    {name: "Adobe Illustrator", price: "$50.50"},
    {name: "Adobe Premier Pro", price: "$90.90"},
    {name: "Adobe PDF", price: "$50.50"}
  ]
  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
        {/* <Card product= {products[0]}></Card>
        <Card product= {products[1]}></Card> */}

        {
          products.map(product => <Card product = {product}></Card>)
        }
        <DynamicUsers></DynamicUsers>
      </header>
    </div>
  );
}

// using hooks for counter

function Counter(){
  const [count, setState] = useState(0);
  const handleCount = () => {
    const newCount = count +1;
    setState(newCount);
  }
  const handleCountD = () => {
    if(count >= 1){
      const newCount = count -1;
    setState(newCount);
    }
  }
  return(
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleCount}>Increase</button>
      <button onClick={handleCountD}>Decrease</button>
    </div>
  )
}


function Card (props){
  const style = {
    backgroundColor: 'gray',
    border: "2px solid cyan",
    borderRadius: "10px",
    width: "300px",
    height: "250px",
    margin: "10px",
    float: "left",
    boxShadow: "5px 10px 10px cyan"
  }
  const {name, price} = props.product;
  return(
    <div style = {style}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  )
}

// load data using useEffect

function DynamicUsers(){
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  return(
    <div>
      <h1>Dynamic Users Information</h1>
      <ul>
        {
          user.map(userInfo => 
          <li>
             Name: {userInfo.name}
              <li>
                Email: {userInfo.email}
              </li>
          </li>)
        }
      </ul>
    </div>
  )
}
export default App;
