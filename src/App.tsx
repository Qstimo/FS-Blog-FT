
import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';

import MainLayout from './Components/Layouts/MainLayout';
import FullPost from './Pages/FullPost';
import Register from './Pages/Register';
import PostAdd from './Pages/PostAdd';
function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route path='' element={<Home />}></Route>
        <Route path='/:id' element={<FullPost />}></Route>
        <Route path='/auth' element={<Register />}></Route>
        <Route path='/created' element={<PostAdd />}></Route>
      </Route>

    </Routes>


  );
}

export default App;
