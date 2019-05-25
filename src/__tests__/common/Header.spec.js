import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../common/Header';

describe('<Header />', () => {
  it('renders h1 element', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('ul').exists()).toBe(true);
  });
   it('renders correctly using snapshot', () => {
    expect(Header).toMatchSnapshot();
   });
});
