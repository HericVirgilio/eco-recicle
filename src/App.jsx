import './App.css'
import Heather from "./components/heather/index.jsx";
import Banner from './components/banner/index.jsx'
import ListaReciclagem from './components/listaReciclagem/index.jsx';
import Footer from "./components/footer/index.jsx"
function App() {
  return (
    <div className="background">
          <Heather/>
          <Banner/>
          <ListaReciclagem/>
          <Footer/>
    </div>
  );
}

export default App;
