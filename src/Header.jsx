import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
import { useEffect, useState } from "react";
import axios from "axios";





export function Header() {
  const [currentUser, setCurrentUser] = useState ({})

  const getUserData = () => {
    // console.log("getting user data")
    axios.get("http://localhost:3000/users/current.json").then(response => {
      console.log(response.data)
      setCurrentUser(response.data)
    })
  }

  useEffect(getUserData, [])

  let authenticationLinks;
  // let user;
  
  if (localStorage.jwt === undefined) {
    authenticationLinks = (
      <>
      <Link to="/login">Login</Link> 
      </>
    )
  } else {
    authenticationLinks = (
        <LogoutLink /> 
    )
  }
  return (
    <header>
      <nav>
        <a href="/">Home</a> | <Link to="/ResumeIndex">Browse</Link> |{authenticationLinks}
      </nav>
      <h2>Hello, {currentUser.name} </h2>
    </header>
  )
}
