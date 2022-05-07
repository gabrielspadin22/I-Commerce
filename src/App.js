import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import CartIcon from './Components/CartIcon/CartIcon';
import Search from './Components/Search/Search';
import SuperContainer from './Components/SuperContainer/SuperContainer';
import Footer from './Components/Footer/Footer';
import Content from './Components/Content/Content';

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
      <Content />
      <Footer />
      </header>
    </div>
);}
export default App;
