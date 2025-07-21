import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router";
import Home from './pages/Home';
import Products from './pages/Products';
import NavBar from './components/NavBar';
import Search from './pages/Search';
import Category from './pages/Category';
import SingleProduct from './pages/SingleProduct';
import Page404 from './pages/Page404';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='' element={<Home />}/>

        <Route path='/products' element={<Products />} >
          <Route path=':id' element={<SingleProduct />}></Route>
        </Route>

        <Route path='/search' element={<Search />} />

        <Route path='/category' element={<Category />} />

        <Route path='*' element={<Page404 />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
