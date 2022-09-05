import { Outlet } from "react-router-dom"
import Cabeçalho from "./Components/navBar"

function App() {


  return (
    <div className="App">
     <Cabeçalho></Cabeçalho>
     <Outlet></Outlet>
    </div>
  )
}

export default App
