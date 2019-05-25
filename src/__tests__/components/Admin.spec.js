import React from 'react';
import { shallow } from 'enzyme';
import AdminPage from '../../components/Admin';

describe('<AdminPage />', () => {
  it('renders h1 element', () => {
    const wrapper = shallow(<AdminPage />)
    expect(wrapper.find('div.container').exists()).toBe(true);
  });
   it('renders correctly using snapshot', () => {
    expect(AdminPage).toMatchSnapshot();
   });
});
