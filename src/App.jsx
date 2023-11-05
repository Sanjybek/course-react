
import Input from "./Input";
import Select from "./Select";
import "./App.css"

function App() {
  const text = 'hello world'

  const createElement = () => {
    return <h1>React app</h1>
  }
  return (
      <>
        <div className="box"></div>  
        <div>{createElement()}</div>
        <div>{text}</div>
        <Input />
        <Select />
        <input type="text" />
      </>
  )

}

export default App;
