import { allMeetupReducer, initialState } from '../../reducers/getAllMeetupReducers';
import {
  GET_ALL_MEETUPS_PENDING,
  GET_ALL_MEETUPS_SUCCESS,
  GET_ALL_MEETUPS_FAILURE
} from '../../action-types';

describe('Get all meetup reducers', () => {
  it('should change loading to true when the create meetup is pending', () => {
    const reducerState = allMeetupReducer(null, { type: GET_ALL_MEETUPS_PENDING })
    expect(reducerState.isLoading).toEqual(true);
  })
  it('should recieve success payload on getting all meetup successful', () => {
    const payload = [{
      location: 'Lagos',
      topic: 'GDG Lagos',
      happeningon: '2019-05-04T00:00:00.000Z',
      redirect: true
    }]
    const reducerState = allMeetupReducer(null, { type: GET_ALL_MEETUPS_SUCCESS, payload })
    expect(reducerState.getMeetups).toEqual(payload);
    expect(reducerState.isLoading).toEqual(false);
  })
  it('should recieve failure payload on create meetup successful', () => {
    const payload = 'meetup not found'
    const reducerState = allMeetupReducer(null, { type: GET_ALL_MEETUPS_FAILURE, payload })
    expect(reducerState.errorMessage).toEqual(payload);
    expect(reducerState.isLoading).toEqual(false);
  })
  it('should return the initial state', () => {
    expect(allMeetupReducer(undefined, {})).toEqual(
      initialState
    );
  });
});
