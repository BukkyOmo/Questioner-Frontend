import mockStore from '../../mocks/mockstore';
import 'babel-polyfill';
import moxios from 'moxios';
import axios from '../../config/axiosConfig';
import {
  createMeetupPending,
  createMeetupSuccess,
  createMeetupFailure,
  createMeetup
} from '../../actions';
import {
  CREATE_MEETUP_PENDING,
  CREATE_MEETUP_SUCCESS,
  CREATE_MEETUP_FAILURE
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

describe('Admin create meetup Actions', () => {
  it('should begin the create meetup actions', () => {
    const action = createMeetupPending();
    expect(action).toEqual({
      type: 'CREATE_MEETUP_PENDING'
    });
  });

  it('should create a create meetup success action', () => {
    const action = createMeetupSuccess(success);
    expect(action).toEqual({
      type: 'CREATE_MEETUP_SUCCESS',
      payload: success
    });
  });

  it('should create a create meetup failure action', () => {
    const action = createMeetupFailure(failure);
    expect(action).toEqual({
      type: 'CREATE_MEETUP_FAILURE',
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

  it('should dispatch create meetup success when it is successful', async () => {
    const store = mockStore({});
    const success = {
      response: {
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
    await store.dispatch(createMeetup());
    expect(store.getActions()).toEqual([
      {
        type: CREATE_MEETUP_PENDING
      },
      {
        type: CREATE_MEETUP_SUCCESS,
        payload: {
          location: success.response.data[0].location,
          topic: success.response.data[0].topic,
          happeningon: success.response.data[0].happeningon,
          image: success.response.data[0].image,
          tags: success.response.data[0].tags
        }
      }
    ]);
  });

  it('should dispatch create meetup failure when it is unsuccessful', async () => {
    const store = mockStore({});
    const failure = {
      status: 409,
      response: {
         errors: [
          'Topic is required',
          'Location is required',
          'HappeningOn is required'
        ]
      }
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(failure);
    });
    await store.dispatch(createMeetup());
    expect(store.getActions()).toEqual([
      {
        type: CREATE_MEETUP_PENDING
      },
      {
        type: CREATE_MEETUP_FAILURE,
        payload: {
          errors: failure.response.errors
        }
      }
    ]);
  });
});
