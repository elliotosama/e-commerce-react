import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Card from './Pages/Card';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kids"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':id' element={<Product/>}/>
          </Route>
          <Route path='/card' element={<Card/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
