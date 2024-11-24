import { useEffect, useState } from 'react'
import { UserData } from '../../interfaces/UserData';
import './UsersList.css';

const UsersList = () => {

  const [ users, setUsers ] = useState<Array<UserData>>([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const resp = await fetch('http://localhost:8080/users/');

        if (!resp.ok) throw new Error('Fetch all users fail ');

        setUsers(await resp.json());
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        throw new Error('Get All Users fail ' + error.message);
      }
    }

    getAllUsers();
  }, [])

  return (
    <div className='users-list-container'>
       <h1 style={{ fontFamily: 'monospace'}}>All Users</h1>
      {
        users && users.map((user: UserData) => {
          return(<div className="result-card">
          <div>
            Email: {user.email}
          </div>
          <div>
            Password: {user.password}
          </div>
          {user.role && <div>Role: {user.role}</div>}
        </div>)
        })
      }
    </div>
  )
}

export default UsersList;
