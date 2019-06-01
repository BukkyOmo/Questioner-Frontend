import React from 'react';
import { shallow } from 'enzyme';
import ToastMessage from '../../common/ToastMessage';

describe('<ToastMessage />', () => {
  it('renders p element', () => {
    const wrapper = shallow(<ToastMessage />)
    expect(wrapper.find('p').exists()).toBe(true);
  });
   it('renders correctly using snapshot', () => {
    expect(ToastMessage).toMatchSnapshot();
   });
});
