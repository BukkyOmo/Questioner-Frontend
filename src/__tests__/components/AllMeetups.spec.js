import React from "react";
import { shallow } from "enzyme";
import { AllMeetups } from '../../components/Allmeetups';
import { meetup as meetupsMock } from '../../mocks/meetup-mock';

describe('<AllMeetups />', () => {
  test('renders correctly', () => {
    const props = {
      meetups: meetupsMock,
      dispatch: jest.fn()
    };
    const tree = shallow(<AllMeetups {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
