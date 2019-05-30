import mockStore from "../../mocks/mockstore";
import "babel-polyfill";
import moxios from "moxios";
import axios from "../../config/axiosConfig";
import {
  createMeetupPending,
  createMeetupSuccess,
  createMeetupFailure,
  createMeetup
} from "../../actions";
import {
  CREATE_MEETUP_PENDING,
  CREATE_MEETUP_SUCCESS,
  CREATE_MEETUP_FAILURE
} from "../../action-types";

const success = {
  location: "Lagos",
  topic: "GDG Lagos",
  happeningon: "2019-05-04T00:00:00.000Z",
  image: "C:\fakepathAbstract-4-900x506.jpg",
  tags: "meet"
};

const failure = {
  errors: [
    "Topic is required",
    "Location is required",
    "HappeningOn is required"
  ]
};

describe("Admin create meetup Actions", () => {
  it("should begin the create meetup actions", () => {
    const action = createMeetupPending();
    expect(action).toEqual({
      type: "CREATE_MEETUP_PENDING"
    });
  });

  it("should create a create meetup success action", () => {
    const action = createMeetupSuccess(success);
    expect(action).toEqual({
      type: "CREATE_MEETUP_SUCCESS",
      payload: success
    });
  });

  it("should create a create meetup failure action", () => {
    const action = createMeetupFailure(failure);
    expect(action).toEqual({
      type: "CREATE_MEETUP_FAILURE",
      payload: failure
    });
  });
});
