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


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person name="Atiqur Rahman" position="FrontEnd Developer" age="25"></Person>
        <Person name="Labiba Rahman" position="Lecturer" age="20"></Person>
        <Person name="Atiqur Rahman" position="FrontEnd Developer" age="25"></Person>
      </header>
    </div>
  );
}

function Person(props){
  return (
    <div style = {{border: '1px solid gold', width:'400px', margin:'10px'}}>
      <h2>Person Information Below</h2>
      <h3>My Name: {props.name} </h3>
      <h3>My Position:{props.position}</h3>
      <h4>My Age:{props.age}</h4>
    </div>
  )
}

export default App;
