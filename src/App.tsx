import Gameboard from "./components/Gameboard"
import Header from "./components/Header"
import "./index.css"

function App() {
 return (
  <div className="flex flex-col items-center justify-center min-h-screen max-w-5xl mx-auto gap-6 px-6 py-8">
   <Header />
   <Gameboard />
  </div>
 )
}

export default App
