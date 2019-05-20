import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from '../../components/LandingPage';

describe('<LandingPage />', () => {
  it('renders divs banner and svg', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper.find('div.banner').exists()).toBe(true);
    expect(wrapper.find('div.svg').exists()).toBe(true);
  });
});
