import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useHistory } from "react-router-dom";
import {getStorage, updateStoredMovies} from '../GetFromStorage'

function EditProfile() {

    const history = useHistory();

    const {id} = useParams();
    const movie = getStorage("movies")
   

    const editData = [movie[id]];

    const [editProfile, setEditProfile] = useState({
        id:editData[0].id,
        fname:editData[0].fname,
        lname: editData[0].lname,
        city:editData[0].city,
        state: editData[0].state,
        address:editData[0].address,
        zip:editData[0].zip,
        email: editData[0].email,
        mobile:editData[0].mobile
    })

    function handleChange(event){
        const { name, value } = event.target;
        setEditProfile(prevValue=>{
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
                ...editProfile
            })
        }
        return x;
    })

    

    
    updateStoredMovies(editedData)
   
    
        history.push(`/profile/${id}`)

        event.preventDefault();
    }

    function goBack(event){
      event.preventDefault();
      history.goBack()
    }




    return (
        <div>
            <form>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label for="fname">First Name</label>
              <input
                type="text"
                className="form-control"
                name="fname"
                value={editProfile.fname}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <label for="lname">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lname"
                value={editProfile.lname}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label for="address">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={editProfile.address}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="form-group">
              <label for="city">City</label>
              <input
                type="text"
                className="form-control"
                name="city"
                value={editProfile.city}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="form-group">
              <label for="state">State</label>
              <input
                type="text"
                className="form-control"
                name="state"
                value={editProfile.state}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="form-group">
              <label for="zip">Zip Code</label>
              <input
                type="text"
                className="form-control"
                name="zip"
                value={editProfile.zip}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            value={editProfile.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label for="mobile">Mobile</label>
          <input
            type="text"
            className="form-control"
            name="mobile"
            value={editProfile.mobile}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Update
        </button>

        <button className="btn btn-secondary ml-2" onClick={goBack}>
          Back
        </button>
      </form>
        </div>
    )
}

export default EditProfile
