import './App.css';
import{Routes,Route} from 'react-router-dom';
import { Home } from './routes/home';
import { Rooms } from './routes/rooms';
import { Singleroom } from './routes/singleroom';
import { Supplier } from './context/context';


function App() {
 
  return (
    <Supplier>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/rooms' element={<Rooms />} /> 
           <Route path='/rooms/singleroom' element={<Singleroom />}/>
      </Routes>
    </div>
    </Supplier>
  );
}

export default App;
