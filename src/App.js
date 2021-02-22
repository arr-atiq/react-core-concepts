import './App.css';

function App() {
  const person = {
    name: "Atiqur Rahman",
    age: 25,
    gender: "male"
  }
  const style = {
    backgroundColor: "yellow",
    color: "black"
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 style= {style} > My First Heading</h1>
        <h2 style= {style}>Person Name: {person.name}</h2>
        <h2 style= {style}>Person Gender: {person.gender} </h2>
        <h2 style= {style}>Person Age: {person.age} </h2>
      </header>
    </div>
  );
}

export default App;
