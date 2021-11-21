import React, { useEffect, useState } from 'react'
import axios from "axios"

function Users() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        
        axios.get('https://613476ab7859e700176a38b1.mockapi.io/api/v1/user')
        .then(function (response) {
          // handle success
          console.log(response.data);
          setUsers(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }, [])
    return (


        
        <div><table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user, index)=>{
            return <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td>{user?.mobile}</td>
            <td><button className="btn btn-secondary">Edit</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr>
        })}
          
        </tbody>
      </table>       
            
        </div>
    )
}

export default Users
