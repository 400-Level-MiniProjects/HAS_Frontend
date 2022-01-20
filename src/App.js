import './App.css';
import { Routes, Route } from 'react-router-dom';
import GenerateRoom from "./pages/generateRoom";
import PrintReciept from "./pages/printReciept";
import Reciept from "./pages/reciept";

function App() {
  return (
    <Routes>
         <Route path='/' exact element={<GenerateRoom/>} />
         <Route path='/print_reciept' exact element={<PrintReciept/>} />
         <Route path='/reciept' exact element={<Reciept/>} />
    </Routes>
  );
}

export default App;