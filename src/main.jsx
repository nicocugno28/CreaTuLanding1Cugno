
import ReactDOM from 'react-dom/client'
import { Navbar } from '../src/components/navbar/Navbar.jsx'
import {ItemListContainer} from './components/itemList/ItemListContainer'
import './main.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <main className='main-container'>
    <Navbar />
    <ItemListContainer mensaje="Hola! Como Estas?"/>
  </main>,
)
