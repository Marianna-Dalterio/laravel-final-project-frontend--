
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import CategoryList from './pages/CategoryList';
import Navbar from './components/Navbar';


function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ProductList/>}/>
      <Route path='/products' element={<ProductList/>}/>
      <Route path='/products/:id' element={<ProductDetail/>}/>
      <Route path='/categories' element={<CategoryList/>}/>
      

    </Routes>
    
    </BrowserRouter>
  )
}

export default App
