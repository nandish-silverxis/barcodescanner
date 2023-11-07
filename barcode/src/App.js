import logo from './logo.svg';
import './App.css';
import Readqr from './components/Readqr';
import Createqr from './components/Createqr';
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home';


function App() {
  return (
    <div className="container-fluid">
      <h1 className='my-5 text-center display-2'>QR Code Reader Generation</h1>
    <div className='row'>
      <Createqr/>
      <Readqr/>
      <Routes >
      <Route path='/Home' element={<Home/>}></Route>
      </Routes>
    </div>
    </div>
  );
}

export default App;
