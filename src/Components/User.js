import React from 'react'
import { useHistory } from "react-router-dom";
import {getStorage} from '../GetFromStorage'


function User() {

  const users = getStorage("movies")
  

    const history = useHistory();

    return (
        <div><table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user, index)=>{
            return <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{user.fname}</td>
            <td>{user.email}</td>
            <td>{user.mobile}</td>
            <td><button className="btn btn-secondary" onClick={()=>{ history.push(`/edit-user/${index}`)}}>Edit</button></td>
          </tr>
        })}
          
        </tbody>
      </table>       
            
        </div>
    )
}

export default User
