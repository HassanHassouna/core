import "./App.css"
import { Select } from "./core/Select/Select"
import Data from "./Data/DummyData.json"

function App() {
  return (
    <div className="App">
      <Select options={Data.options} />
    </div>
  )
}

export default App
