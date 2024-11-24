import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import AdminForm from './pages/AdminForm/AdminForm';
import UserForm from './pages/UserForm/UserForm';
import Result from './pages/Result/Result';
import UsersList from './pages/UsersList/UsersList';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='home' element={<Home />}/>
        <Route path='user' element={<UserForm />}/>
        <Route path='admin' element={<AdminForm />}/>
        <Route path='result' element={<Result />}/>
        <Route path='list' element={<UsersList />}/>
      </Routes>
    </>
  )
}

export default App
