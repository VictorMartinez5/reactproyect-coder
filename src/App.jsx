import './App.css'

//Components
import Navbar from "./components/navbar/navbar"
import ItemListContainer from "./components/card/Card"

function App() {
  return (
    <>
    <Navbar />
    <div className="d-flex">
    <ItemListContainer  cont="asdsadasd"/> 
    <ItemListContainer title="Hello Wordl" cont="21dsa321d3a2sdas"/> 
    </div>
    </>
  )
}

export default App
