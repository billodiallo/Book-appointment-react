import Axios from 'axios';
import {
  fetchFacilitySuccess,
  fetchFacilityFailure,
} from '../redux/actions/facilityAction';
import logIn from '../redux/actions/userAction';
import fetchAppointments from '../redux/actions/appointmentAction';

const request = {
  logUserIn: 'https://billo-appointment-app.herokuapp.com/api/v1/login',
  SignUserIn: 'https://billo-appointment-app.herokuapp.com/api/v1/authentication',
  facilityData: 'https://billo-appointment-app.herokuapp.com/api/v1/facilities',
  setAppointment: 'https://billo-appointment-app.herokuapp.com/api/v1/appointments',
  getAppointment: 'https://billo-appointment-app.herokuapp.com/api/v1/appointments',
};
