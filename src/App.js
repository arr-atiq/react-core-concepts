import './App.css';

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


function App() {
  const products = [
    {name: "Adobe PhotoShop", price: "$90.90"},
    {name: "Adobe Illustrator", price: "$50.50"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Card product= {products[0]}></Card>
        <Card product= {products[1]}></Card>
      </header>
    </div>
  );
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
export default App;
