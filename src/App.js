import './App.css';
import Navbar from './Components/Navbar';
import {
  Routes ,
    Route   
  } from "react-router-dom";
import CreateUser from './Components/CreateUser';
import User from './Components/User';
import React, { useState } from 'react'
import userDetails from './Components/UserContent';
import Home from './Components/Home';
import EditUser from './Components/EditUser';
import {getStorage, updateStoredMovies} from './GetFromStorage'
import Profile from './Components/Profile';
import EditProfile from './Components/EditProfile';

updateStoredMovies(userDetails);
const movie = getStorage("movies")




function App() {
  const [users, setUsers] = useState(movie);

  function addUser(newUser){

    updateStoredMovies([...users, {...newUser, id:users.length}])
    
    setUsers((users)=>{
      return [...users, {...newUser, id:users.length}];
    })

    

  }


  return (
    <div className="App">
      
     
      <Navbar />
      <div class="container-fluid">
              <Routes >  

               <Route exact path="/edit-user/:id">
                  <EditUser/>
                </Route>

                <Route exact path="/create-users">
                  <CreateUser onAdd={addUser}/>
                </Route>
                <Route exact path="/users">
                  <User />
                </Route>

                <Route exact path="/profile/:id">
                  < Profile/>
                </Route>

                <Route exact path="/edit-profile/:id">
                  < EditProfile/>
                </Route>

                <Route exact path="/">
                  < Home/>
                </Route>
              </Routes>
     </div>
    </div>
  );
}

export default App;
