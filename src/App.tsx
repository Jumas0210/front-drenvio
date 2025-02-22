import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductList } from './views/ProductList';
import { ProductTable } from './views/ProductTable';
import { SpecialForm } from './views/SpecialForm';
import { UserProvider } from './context/user';

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
            <Route path='/' element={<ProductList/>}/>
            <Route path='/table' element ={<ProductTable/>}/>
            <Route path='/form' element={<SpecialForm/>}/>
          </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
