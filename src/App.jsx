
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Fruit from './pages/Fruits/Fruits'
import CreateFruits from './pages/CreateFruit/CreateFruit'
import Veggies from './pages/Veggies/Veggies'
import CreateVegies from './pages/CreateVeggies/CreateVegies'

function App() {

  return (
    <>
        <nav>
          <button>
            <Link to="/">
            Home
            </Link>
          </button>
          <button>
            <Link to="/create">
              Create
            </Link>
          </button>
          <button>
            <Link to="/veggies">
              Veggies
            </Link>
          </button>
      <button>
          <Link to="/veggies/create">
            Create New Veggie
          </Link>
      </button>
    </nav>
    <Routes>
      <Route path='/' element={<Fruit/>}/>
      <Route path='/create' element={<CreateFruits/>}/>
      <Route path='/veggies' element={<Veggies/>}/>
      <Route path='/veggies/create' element={<CreateVegies/>}/>
    </Routes>

    </>
  )
}

export default App
