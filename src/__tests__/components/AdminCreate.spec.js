import React from "react";
import { shallow } from "enzyme";
import { CreateMeetup } from '../../components/AdminCreate';

describe('<CreateMeetup />', () => {
  const dispatch = jest.fn();
  const createmeetup = shallow(<CreateMeetup dispatch={dispatch} />);
  it('renders without crashing', () => {
     expect(createmeetup.find('div.items').exists()).toBe(true);
   });
   it('renders correctly', () => {
    expect(createmeetup).toMatchSnapshot();
   });
  it('submits the form', () => {
    createmeetup.find('form').simulate('submit', {
      preventDefault: () => 'form'
    })
    expect(dispatch.mock.calls.length).toEqual(0)
  })
  it('updates state when input is changed', () => {
    createmeetup.find('input').first().prop('onChange')({
      target:{name: 'topic', value: 'Facebook for developers'}
    })
    expect(createmeetup.state('topic')).toEqual('Facebook for developers');
  });
})
