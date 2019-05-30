import { singleMeetupReducer, initialState } from '../../reducers/singleMeetupReducers';
import {
  GET_MEETUP_PENDING,
  GET_MEETUP_SUCCESS,
  GET_MEETUP_FAILURE
} from '../../action-types';

describe('Get all meetup reducers', () => {
  it('should change loading to true when the create meetup is pending', () => {
    const reducerState = singleMeetupReducer(null, { type: GET_MEETUP_PENDING })
    expect(reducerState.isLoading).toEqual(true);
  })
  it('should recieve success payload on getting all meetup successful', () => {
    const payload = {
      location: 'Lagos',
      topic: 'GDG Lagos',
      happeningon: '2019-05-04T00:00:00.000Z'
    }
    const reducerState = singleMeetupReducer(null, { type: GET_MEETUP_SUCCESS, payload })
    expect(reducerState.meetup).toEqual(payload);
    expect(reducerState.isLoading).toEqual(false);
  })
  it('should recieve failure payload on create meetup successful', () => {
    const payload = 'meetup not found'
    const reducerState = singleMeetupReducer(null, { type: GET_MEETUP_FAILURE, payload })
    expect(reducerState.errorMessages).toEqual(payload);
    expect(reducerState.isLoading).toEqual(false);
  })
  it('should return the initial state', () => {
    expect(singleMeetupReducer(undefined, {})).toEqual(
      initialState
    );
  });
});
