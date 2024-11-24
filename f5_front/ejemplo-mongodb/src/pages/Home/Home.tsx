
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {

  const navigator = useNavigate();

  return (
    <div className='home-main-container'>
      <h1 style={{ fontFamily: 'monospace'}}>Home</h1>
      <div className='home-form-container'>
        <button className='home-button' onClick={() => navigator('user')} >User Form</button>
        <button className='home-button' onClick={() => navigator('admin')} >Admin Form</button>
        <button className='home-button' onClick={() => navigator('list')} >Users List</button>
      </div>
    </div>
  )
}

export default Home;
