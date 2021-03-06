import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logIn from './redux/actions/userAction';
import { requestFacilityData } from './axios/requests';
import SignInPage from './pages/sign-in-page/SignInPage';
import HomePage from './pages/home-page/Homepage';
import AppointmentsPage from './pages/appointments-page/AppointmentPage';
import Navbar from './components/navbar/Navbar';
import LogInPage from './pages/log-in-page/LoginPage';
import FacilityShowPage from './pages/facilityShow-page/FacilityShowPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('token'));

    if (user) {
      if (user.key) {
        dispatch(logIn(user.username));
      }
    }

    requestFacilityData(dispatch);
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Navbar />
        <Route exact id="HomePage" path="/" component={HomePage} />
        <Route exact id="LogInPage" path="/login" component={LogInPage} />
        <Route exact id="SignInPage" path="/sign-in" component={SignInPage} />
        <Route exact id="FacilityShowPage" path="/facility/:id" component={FacilityShowPage} />
        <Route exact id="AppointmentsPage" path="/appointments" component={AppointmentsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
