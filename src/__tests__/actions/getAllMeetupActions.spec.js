import mockStore from '../../mocks/mockstore';
import 'babel-polyfill';
import moxios from 'moxios';
import axios from '../../config/axiosConfig';
import {
  getAllMeetupPending,
  getAllMeetupSuccess,
  getAllMeetupFailure,
  getAllMeetups
} from '../../actions';
import {
  GET_ALL_MEETUPS_PENDING,
  GET_ALL_MEETUPS_SUCCESS,
  GET_ALL_MEETUPS_FAILURE
} from '../../action-types'

const success = {
  location: 'Lagos',
  topic: 'GDG Lagos',
  happeningon: '2019-05-04T00:00:00.000Z',
  image: 'C:\fakepath\Abstract-4-900x506.jpg',
  tags: 'meet'
};

const failure = {
  errors: [
    'Topic is required',
    'Location is required',
    'HappeningOn is required'
  ]
};

describe('User get all meetups Actions', () => {
  it('should begin the get all meetup actions', () => {
    const action = getAllMeetupPending();
    expect(action).toEqual({
      type: 'GET_ALL_MEETUPS_PENDING'
    });
  });

  it('should get all meetup success action', () => {
    const action = getAllMeetupSuccess(success);
    expect(action).toEqual({
      type: 'GET_ALL_MEETUPS_SUCCESS',
      payload: success
    });
  });

  it('should create a create meetup failure action', () => {
    const action = getAllMeetupFailure(failure);
    expect(action).toEqual({
      type: 'GET_ALL_MEETUPS_FAILURE',
      payload: failure
    });
  });
});

describe('Create meetup Actions Dispatch', () => {
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });

  it('should dispatch get all meetup success when it is successful', async () => {
    const store = mockStore({});
    const success = {
      response: {
        status: 200,
        data: [
          {
            location: 'Lagos',
            topic: 'GDG Lagos',
            happeningon: '2019-05-04T00:00:00.000Z',
            image: 'C:\fakepath\Abstract-4-900x506.jpg',
            tags: ''
          }
        ]
      }
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(success);
    });
    await store.dispatch(getAllMeetups());
    expect(store.getActions()).toEqual([
      {
        type: GET_ALL_MEETUPS_PENDING
      },
      {
        type: GET_ALL_MEETUPS_SUCCESS,
        payload: [{
          location: success.response.data[0].location,
          topic: success.response.data[0].topic,
          happeningon: success.response.data[0].happeningon,
          image: success.response.data[0].image,
          tags: success.response.data[0].tags
        }]
      }
    ]);
  });

  it('should dispatch get all meetup failure when it is unsuccessful', async () => {
    const store = mockStore({ meetups: [] });
    const failure = {
      status: 404,
      response: {
          errors: 'No meetup found'
      }
    };
     moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(failure);
    });
    await store.dispatch(getAllMeetups());
    expect(store.getActions()).toEqual([
      {
        type: GET_ALL_MEETUPS_PENDING
      },
      {
        type: GET_ALL_MEETUPS_FAILURE,
        payload: {
          errors: failure.response.errors
        }
      }
    ]);
  });
});
