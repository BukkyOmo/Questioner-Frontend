// eslint-disable-next-line import/no-extraneous-dependencies
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const store = configureMockStore([thunk]);

export default store;
