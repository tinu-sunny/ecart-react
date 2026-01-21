
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import Prouduct from './pages/Prouduct'
import ViewProuduct from './pages/ViewProuduct'
import Pnf from './pages/Pnf'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import OrderPlaced from './pages/OrderPlaced'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/prouduct' element={<Prouduct/>}/>
      <Route path='/viewprouduct/:id' element={<ViewProuduct/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<OrderPlaced/>}/>
      <Route path='*' element={<Pnf/>}/>
    </Routes>
    </>
  )
}

export default App
