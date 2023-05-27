import Header from "./components/Header/Header"
import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {

  return (
   
      <div>
       <Header />
       <ItemListContainer mensaje="Bienvenido" />
       <div className="container d-flex justify-content-center">
          <Button variant="primary" className="ml-5">Comprar</Button>

       </div>
      </div>
      
  )
}

export default App
