
import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';

import MainLayout from './Components/Layouts/MainLayout';
import FullPost from './Pages/FullPost';
import Register from './Pages/Register';
function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route path='' element={<Home />}></Route>
        <Route path='/:id' element={<FullPost />}></Route>
        <Route path='/auth' element={<Register />}></Route>
      </Route>

    </Routes>


  );
}

export default App;
