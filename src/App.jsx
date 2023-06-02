import './App.css'

//Components
import Navbar from "./components/navbar/Navbar"
import ItemListContainer from "./components/card/ItemListContainer"

function App() {
  return (
    <>
    <Navbar />
    <div className="d-flex">
    <ItemListContainer  cont="asdsadasd"/> 
    <ItemListContainer title="Hello World"/> 
    </div>
    </>
  )
}

export default App
