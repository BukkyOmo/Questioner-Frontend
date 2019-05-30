import mockStore from '../../mocks/mockstore';
import 'babel-polyfill';
import moxios from 'moxios';
import axios from '../../config/axiosConfig';
import {
  getSingleMeetupPending,
  getSingleMeetupSuccess,
  getSingleMeetupFailure,
  getSingleMeetup
} from '../../actions';
import {
  GET_MEETUP_PENDING,
  GET_MEETUP_SUCCESS,
  GET_MEETUP_FAILURE
} from '../../action-types'

const success = {
  response: {
    data: [{
      location: 'Lagos',
      topic: 'GDG Lagos',
      happeningon: '2019-05-04T00:00:00.000Z',
      image: 'C:\fakepath\Abstract-4-900x506.jpg',
  tags: 'meet'
    }]
  }
};

const failure = {
  response: {
    status: 404,
    error: 'No meetup found'
  }
};


describe('User get a meetups Actions', () => {
  it('should begin the get a meetup actions', () => {
    const action = getSingleMeetupPending();
    expect(action).toEqual({
      type: 'GET_MEETUP_PENDING'
    });
  });

  it('should get all meetup success action', () => {
    const action = getSingleMeetupSuccess(success);
    expect(action).toEqual({
      type: 'GET_MEETUP_SUCCESS',
      payload: success
    });
  });

  it('should create a create meetup failure action', () => {
    const action = getSingleMeetupFailure(failure);
    expect(action).toEqual({
      type: 'GET_MEETUP_FAILURE',
      payload: failure
    });
  });
});
