import { ChangeEvent, useState } from 'react';
import './AdminForm.css';
import { useNavigate } from 'react-router-dom';

interface AdminData {
  email: string;
  password: string;
  role: string;
}

const AdminForm = () => {

  const navigator = useNavigate();

  const [ adminData, setAdminData ] = useState<AdminData>({
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setAdminData({
      ...adminData,
      [name]: value,
    })
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setAdminData({
      ...adminData,
      role: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const resp = await fetch('http://localhost:4000/user', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(adminData),
      });

      if (!resp.ok) throw new Error('Create Admin fail ');

      navigator('/result', { state: { data: await resp.json() }});
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error('Create Admin Profile fail ' + error.message);
    }
  };

  return (
    <div className='main-container'>
      <h1 style={{ fontFamily: 'monospace'}}>Admin Form</h1>
      <input type="text" name="email" placeholder="Email..." onChange={handleChange} />
      <input type="password" name="password" placeholder="Password..." onChange={handleChange}/>
      <select onChange={handleSelect}>
        <option value="">Select Role...</option>
        <option value="useradmin">User Admin</option>
        <option value="superadmin">Super Admin</option>
      </select>
      <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default AdminForm;
