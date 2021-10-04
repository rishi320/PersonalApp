import React from 'react';
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
  usePageLayout,
} from '@dsi/react-eds';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signup from '../src/Screens/Auth/SignUp/SignUp';
import Home from '../src/Screens/Dashboard/Home';

function NavigationSetup({userDetails}) {


  // const navigation = (
  //   <Navigation>
  //     <NavItem active><span></span></NavItem>
  //   </Navigation>
  // );
  console.log("+++",userDetails);

  return (
    <Router>
      <SystemBar product="Ericsson Product Name" acronym="EPN" >
      </SystemBar>
      <AppContainer hideNavigation={true}>
        <AppBar></AppBar>
        <AppBody>
          <Switch>
            <Route exact path='/'>
              <Home userDetails={userDetails}/>
            </Route>
          </Switch>
        </AppBody>
      </AppContainer>
    </Router>
  );
}

export default NavigationSetup;
