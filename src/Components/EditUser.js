import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useHistory } from "react-router-dom";
import {getStorage, updateStoredMovies} from '../GetFromStorage'



function EditUser() {
    const history = useHistory();

    const {id} = useParams();
    const movie = getStorage("movies")
   

    const editData = [movie[id]];

  
    

    const [editUser, setEditUser] = useState({
        id:editData[0].id,
        fname:editData[0].fname,
        email: editData[0].email,
        mobile:editData[0].mobile
    })


    function handleChange(event){
        const { name, value } = event.target;
        setEditUser(prevValue=>{
            return {
                ...prevValue,
                [name]: value
              };
        })
    }

    function handleClick(event){

     
      const editedData = movie.map(x => {

        if (x.id === +id) {
          return( {
                ...x,
                ...editUser
            })
        }
        return x;
    })

    

    
    updateStoredMovies(editedData)
   
    
        history.push("/users")

        event.preventDefault();
    }

    function goBack(event){
      event.preventDefault();
      history.goBack()
    }

    return (
        <div>
            <form>
            <div className="form-group">
    <label for="fname">Name</label>
    <input type="text" className="form-control" name="fname" value={editUser.fname} onChange={handleChange}/>
  </div>

  <div className="form-group">
    <label for="email">Email address</label>
    <input type="email" className="form-control" name="email" aria-describedby="emailHelp" value={editUser.email} onChange={handleChange}/>
  </div>

  <div className="form-group">
    <label for="mobile">Mobile</label>
    <input type="text" className="form-control" name="mobile" value={editUser.mobile} onChange={handleChange}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Update</button>
  <button className="btn btn-secondary ml-2" onClick={goBack}>Back</button>
  <button className="btn btn-warning ml-2" onClick={() => history.push(`/profile/${id}`)}>View Profile</button>
</form>
        </div>
    )
}

export default EditUser
