import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login/*' element={<Login />}/>
      </Routes> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
