import { ChangeEvent, useState } from 'react';
import './UserForm.css';
import { useNavigate } from 'react-router-dom';
import { UserData } from '../../interfaces/UserData';

const UserForm = () => {

  const navigator = useNavigate();

  const [ userData, setUserData ] = useState<UserData>({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setUserData({
      ...userData,
      [name]: value,
    })
  };

  const handleSubmit = async () => {
    try {
      const resp = await fetch('http://localhost:8080/users/create', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(userData),
      });

      if (!resp.ok) throw new Error('Create User fail ');

      navigator('/result', { state: { data: await resp.json() }});
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error('Create User Profile fail ' + error.message);
    }
  };

  return (
    <div className='main-container'>
      <h1 style={{ fontFamily: 'monospace'}}>User Form</h1>
      <input type="text" name="email" placeholder="Email..." onChange={handleChange} />
      <input type="password" name="password" placeholder="Password..." onChange={handleChange}/>
      <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default UserForm;
