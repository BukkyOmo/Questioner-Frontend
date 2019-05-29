import React from 'react';
import { shallow } from 'enzyme';
import ErrorPage from '../../utils/ErrorPage';

describe('<ErrorPage />', () => {
  it('renders h1 element', () => {
    const wrapper = shallow(<ErrorPage />)
    expect(wrapper.find('h1').exists()).toBe(true);
  });
   it('renders correctly using snapshot', () => {
    expect(ErrorPage).toMatchSnapshot();
   });
});
