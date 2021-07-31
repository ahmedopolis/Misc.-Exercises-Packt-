import "./App.css";

function App() {
  const Greeting = (props) => <p> Hello {props.name}! </p>;
  return (
    <div>
      <h1>My App</h1>
      <br />
      <Greeting name="User" />
    </div>
  );
}

export default App;
