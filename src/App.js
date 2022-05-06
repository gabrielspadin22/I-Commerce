import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import CartIcon from './Components/CartIcon/CartIcon';
import Search from './Components/Search/Search';
import SuperContainer from './Components/SuperContainer/SuperContainer';
import Home from './Pages/Home/index';
import Categories from './Pages/Categories/index';
import Products from './Pages/Products/index';
import Offers from './Pages/Offers/index';
import Cart from './Pages/Cart/index';
import Help from './Pages/Help/index';
import Profile from './Pages/Profile/index';
import Footer from './Components/Footer/Footer';
import {Routes, Route } from 'react-router-dom'
import ProductDetails from './Pages/ProductsDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header ">
      <SuperContainer>
        <Navbar>
          <CartIcon />
        </Navbar>
        <Search />
      </SuperContainer>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/category' element={<Categories/>} />
          <Route path='/products/*' element={<Products/>} />
          <Route path='/products/item/:id' element={<ProductDetails/>} />
          <Route path='/offers' element={<Offers/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/help' element={<Help/>} />
        </Routes>
      <Footer />
      </header>
    </div>
);}
export default App;
