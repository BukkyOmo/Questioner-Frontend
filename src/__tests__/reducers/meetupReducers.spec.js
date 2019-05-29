import { meetupReducer, initialState } from '../../reducers/meetupReducer';
import {
  CREATE_MEETUP_PENDING,
  CREATE_MEETUP_SUCCESS,
  CREATE_MEETUP_FAILURE
} from '../../action-types';
describe('Create meetup reducers', () => {
  it('should change loading and submit to true when the create meetup is pending', () => {
    const reducerState = meetupReducer(null, { type: CREATE_MEETUP_PENDING })
    expect(reducerState.isLoading).toEqual(true);
    expect(reducerState.submit).toEqual(true);
  })
  it('should recieve success payload on create meetup successful', () => {
    const payload = {
      location: 'Lagos',
      topic: 'GDG Lagos',
      happeningon: '2019-05-04T00:00:00.000Z',
      redirect: true
    }
    const reducerState = meetupReducer(null, { type: CREATE_MEETUP_SUCCESS, payload })
    expect(reducerState.location).toEqual('Lagos');
    expect(reducerState.topic).toEqual('GDG Lagos');
    expect(reducerState.redirect).toEqual(true);
  })
  it('should recieve failure payload on create meetup successful', () => {
    const payload = {
      errors:
        ['Topic is required',
          'Location is required',
          'HappeningOn is required'
        ]
    }
    const reducerState = meetupReducer(null, { type: CREATE_MEETUP_FAILURE, payload })
    expect(reducerState.errorMessage).toEqual({
      errors: ['Topic is required',
        'Location is required',
        'HappeningOn is required'
      ]
    });
  })
  it('should return the initial state', () => {
    expect(meetupReducer(undefined, {})).toEqual(
      initialState
    );
  });
});
