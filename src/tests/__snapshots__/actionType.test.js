import {
    LOG_IN, LOG_OUT, FETCH_FACILITY_REQUEST, FETCH_FACILITY_SUCCESS,
    FETCH_FACILITY_FAILURE, FETCH_APPOINTMENTS,
  } from '../redux/actions/actionType';

  describe('Action type', () => {
    it('LOG_IN actionType should be a string', () => {
      expect(LOG_IN).toEqual(expect.any(String));
    });