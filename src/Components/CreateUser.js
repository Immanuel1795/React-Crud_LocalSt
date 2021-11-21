import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateUser({ onAdd }) {
  const history = useHistory();

  const [addUser, setAddNewUser] = useState({
    fname: "",
    lname: "",
    city:"",
    state: "",
    email: "",
    address:"",
    zip:"",
    mobile: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setAddNewUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    onAdd(addUser);

    history.push("/users");

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
                value={addUser.fname}
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
                value={addUser.lname}
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
            value={addUser.address}
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
                value={addUser.city}
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
                value={addUser.state}
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
                value={addUser.zip}
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
            value={addUser.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label for="mobile">Mobile</label>
          <input
            type="text"
            className="form-control"
            name="mobile"
            value={addUser.mobile}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Create
        </button>

        <button className="btn btn-secondary ml-2" onClick={goBack}>
          Back
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
