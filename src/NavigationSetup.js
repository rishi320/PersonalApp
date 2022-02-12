import React, { useState, useEffect } from "react";
import {
  Tile,
  SystemBar,
  SystemBarComponent,
  NotificationTrigger,
  AppContainer,
  AppBar,
  AppBody,
  Navigation,
  NavItem,
  useMultiPageLayout,
} from "@dsi/react-eds";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import Signup from "../src/Screens/Auth/SignUp/SignUp";
import Home from "../src/Screens/Dashboard/Home";
import Todo from "./Screens/Todo/Todo";
import Remainder from "./Screens/Remainder/Remainder";
import Counter from "./Screens/Counter";

function NavigationSetup({ userDetails }) {
  // const location = useLocation();
  // const [currentPath, setCurrentPath] = useMultiPageLayout();
  // const [showSystemPanel, setShowSystemPanel] = useState(false);
  // const pathToTitleMap = {
  //   "/todo": "TODO LIST",
  //   "/remainder": "REMAINDER",
  //   "/tracker": "EXPENSE TRACKER",
  // };

  // useEffect(() => {
  //   setCurrentPath(location.pathName);
  // }, [location, setCurrentPath]);

  // const navigation = (
  //   <Navigation>
  //     <NavItem active={currentPath === "/todo"}>ToDo List</NavItem>
  //     <NavItem active={currentPath === "/remainder"}>Remainder</NavItem>
  //     <NavItem active={currentPath === "/tracker"}>Expense Tracker</NavItem>
  //   </Navigation>
  // );

  console.log("+++", userDetails);

  return (
    <Router>
      <SystemBar product="Ericsson Product Name" acronym="EPN"></SystemBar>
      <AppContainer hideNavigation={true}>
        <AppBody>
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/todo" element={<Todo userDetails={userDetails} />} />
            <Route path="/remainder" element={<Remainder />} />
            <Route path="/track" element={<Home userDetails={userDetails} />} />
          </Routes>
        </AppBody>
      </AppContainer>
    </Router>
  );
}

export default NavigationSetup;
