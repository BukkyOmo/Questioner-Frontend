import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../common/Footer';

describe('<Footer />', () => {
  it('renders h1 element', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('p').exists()).toBe(true);
  });
   it('renders correctly using snapshot', () => {
    expect(Footer).toMatchSnapshot();
   });
});
