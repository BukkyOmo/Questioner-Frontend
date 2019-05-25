import React from 'react';
import { shallow } from 'enzyme';
import { SignUpForm } from '../../components/SignUpForm';

describe('<SignUpForm />', () => {
  const dispatch = jest.fn()
  const signup = shallow(<SignUpForm dispatch={dispatch} />);
   it('renders without crashing', () => {
     expect(signup.find('div.items').exists()).toBe(true);
   });
   it('renders correctly', () => {
    expect(signup).toMatchSnapshot();
   });
  it('submits the form', () => {
    signup.find('form').simulate('submit', {
      preventDefault: () => 'form'
    })
    expect(dispatch.mock.calls.length).toEqual(0)
  })
  it('updates state when input is changed', () => {
    signup.find('input').first().prop('onChange')({
      target:{name: 'email', value: 'forsetti@gmail.com'}
    })
    expect(signup.state('email')).toEqual('forsetti@gmail.com');
  });
  });
