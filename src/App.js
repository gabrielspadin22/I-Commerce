import './App.css';
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
import Card from './Components/Card/Card';
import Footer from './Components/Footer/Footer';
let s = Math.floor(Math.random() * 40);
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
          <Card disponible={s}>
            <AddNItemToCart stock={s}/>
          </Card>
          
        </Content>
        <Footer />
      </header>
    </div>
    
  );
  
}
export default App;
