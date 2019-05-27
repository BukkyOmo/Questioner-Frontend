import React from 'react';
import { shallow } from 'enzyme';
import { SignInForm } from '../../components/SignInForm';

describe('<SignInForm />', () => {
  const dispatch = jest.fn()
  const wrapper = shallow(<SignInForm dispatch={dispatch} />)
 it('renders divs banner and svg', () => {
    expect(wrapper.find('div.items').exists()).toBe(true);
 });
  it('submits the form', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault: () => 'form'
    })
    expect(dispatch.mock.calls.length).toEqual(0)
  })
  it('updates state when input is changed', () => {
    wrapper.find('input').first().prop('onChange')({
      target:{name: 'email', value: 'forsetti@gmail.com'}
    })
    expect(wrapper.state('email')).toEqual('forsetti@gmail.com');
  });
  });
