import { FETCH_APPOINTMENTS } from '../redux/actions/actionType';
import appointmentReducer from '../redux/reducers/appointmentReducers';

describe('Appointment reducer', () => {
  const initialState = [];
  it('should return the Appointment collection when fetching request is successfully', () => {
    expect(appointmentReducer(initialState, {
      type: FETCH_APPOINTMENTS,
      payload: [{ Nairobihospital: 'Nairobi-hospital', date: '21/08/221', city: 'Nairobi' }],
    })).toEqual([{ Nairobihospital: 'Nairobi-hospital', date: '21/08/221', city: 'Nairobi' }]);
  });
});
