import React from 'react'
import { useParams } from 'react-router'
import {getStorage, updateStoredMovies} from '../GetFromStorage'
import { useHistory } from "react-router-dom";

function Profile() {
    const {id} = useParams();

    const movie = getStorage("movies")
   

    const profile = [movie[id]];

    console.log(profile)

    
    const history = useHistory();

    function goBack(event){
        event.preventDefault();
        history.goBack()
      }

      function deleteProfile(event){
        event.preventDefault();
        const deletedMovie = movie.filter((mov, index)=>{
            console.log(index, +id);
            return index !== +id
        })

        console.log(deletedMovie)
        history.push("/users");
        updateStoredMovies(deletedMovie)
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
                value={profile[0].fname}
               
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
                value={profile[0].lname}
               
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
            value={profile[0].address}
            
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
                value={profile[0].city}
               
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
                value={profile[0].state}
               
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
                value={profile[0].zip}
                
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
            value={profile[0].email}
          />
        </div>

        <div className="form-group">
          <label for="mobile">Mobile</label>
          <input
            type="text"
            className="form-control"
            name="mobile"
            value={profile[0].mobile}
          />
        </div>
        <button className="btn btn-primary" onClick={() => history.push(`/edit-profile/${id}`)}>
          Edit 
        </button>

        <button type="submit" className="btn btn-danger ml-2" onClick={deleteProfile}>
          Delete 
        </button>

        <button className="btn btn-secondary ml-2" onClick={goBack}>
          Back
        </button>
      </form>
        </div>
    )
}

export default Profile
