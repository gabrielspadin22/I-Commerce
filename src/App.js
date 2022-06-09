import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartIcon from './Components/CartIcon/CartIcon';
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
import CartContextProvider from './Context/CartContextProvider';
import Checkout from './Components/Checkout/Checkout';
import MyNav from './Components/MyNav/MyNav';
import CreateItems from './Components/CreateItems/CreateItems';
function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <CartContextProvider>
          <SuperContainer>
            <MyNav>
              <CartIcon />
            </MyNav>
          </SuperContainer>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/category/:categoria' element={<Categories/>} />
            <Route path='/products/*' element={<Products/>} />
            <Route path='/products/item/:id' element={<ProductDetails/>} />
            <Route path='/offers' element={<Offers/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/help' element={<Help/>} />
            <Route path='/createproduct' element={<CreateItems/>} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </header>
    </div>
);}
export default App;
