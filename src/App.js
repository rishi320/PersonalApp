import React, { useState } from "react";
import NavigationSetup from "./NavigationSetup";
import SignUp from "./Screens/Auth/SignUp/SignUp";
import SignIn from "./Screens/Auth/SignIn/SignIn";
import { AppContainer } from "@dsi/react-eds";

function App() {
  //usePageLayout();

  let loggedIn = localStorage.getItem("IS_LOGGED_IN");
  const [isLoggedIn, setLoggedIn] = useState(
    loggedIn === "true" ? true : false
  );

  let signedUp = localStorage.getItem("IS_SIGNED_UP");
  const [isSignedUp, setSignedUp] = useState(
    signedUp === "true" ? true : false
  );

  let details = localStorage.getItem("USER_DETAILS");
  if (details !== null && details !== undefined) {
    details = JSON.parse(details);
  }
  let newDetails = localStorage.getItem("NEW_USER_DETAILS");
  // if (newDetails !== null && newDetails !== undefined) {
  //   newDetails = JSON.parse(newDetails);
  // }

  const [userDetails, setUserDetails] = useState(details);
  const [newUser, setNewUser] = useState(newDetails); //see doing uf loop(above)

  console.log("IS_LOGGED", loggedIn);
  console.log("USER_DETAILS", details);

  const setDetails = (_isLogged, _userDetails) => {
    // console.log(_userDetails);
    // let itemsArray = [_userDetails,_isLogged]
    localStorage.setItem("IS_LOGGED_IN", _isLogged);
    localStorage.setItem("USER_DETAILS", JSON.stringify(_userDetails));
    setUserDetails(_userDetails);
    // console.log(userDetails);
    setLoggedIn(_isLogged);
  };

  console.log("IS_SIGNED_UP", signedUp);
  console.log("NEW_USER_DETAILS", newDetails);

  const setNewDetails = (_isSigned, _newDetails) => {
    localStorage.setItem("IS_SIGNED_UP", _isSigned);
    localStorage.setItem("NEW_USER_DETAILS", JSON.stringify(_newDetails));
    //localStorage.setItem("USER_DETAILS",JSON.stringify(_newDetails))
    setNewUser(_newDetails);
    setSignedUp(_isSigned);
  };

  console.log("new function", isSignedUp);

  return (
    // <AppContainer hideNavigation={true}>
    <div className="main-container">
      <div className="navbar-container">
        {isLoggedIn === true ? (
          <NavigationSetup userDetails={userDetails}></NavigationSetup>
        ) : isSignedUp ? (
          <SignIn
            setSigned={setDetails}
            newUser={newUser}
            modifySigned={setNewDetails}
          ></SignIn>
        ) : (
          <SignUp modifySigned={setNewDetails}></SignUp>
        )}
      </div>
    </div>
    // </AppContainer>
  );
}

export default App;
