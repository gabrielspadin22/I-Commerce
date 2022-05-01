import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Content/Content.css'
import './Components/Navbar/Navbar.css'
import './Components/Search/Search.css'
import './Components/SuperContainer/SuperContainer.css'
import './Components/CartIcon/CartIcon.css'
import Navbar from './Components/Navbar/Navbar';
import CartIcon from './Components/CartIcon/CartIcon';
import Search from './Components/Search/Search';
import SuperContainer from './Components/SuperContainer/SuperContainer';
import Content from './Components/Content/Content';
import AddNItemToCart from './Components/AddNItemToCart/AddNItemToCart';
import Item from './Components/Item/Item';
import Footer from './Components/Footer/Footer';
import ItemList from './Components/ItemList/ItemList';
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
        <Content>
        </Content>
        <Footer />
      </header>
    </div>
    
  );
  
}
export default App;
