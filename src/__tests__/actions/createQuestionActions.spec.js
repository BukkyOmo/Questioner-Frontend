import mockStore from "../../mocks/mockstore";
import "babel-polyfill";
import moxios from "moxios";
import axios from "../../config/axiosConfig";
import {
  createQuestionPending,
  createQuestionSuccess,
  createQuestionFailure,
  createQuestion
} from "../../actions";
import {
  CREATE_QUESTION_PENDING,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAILURE
} from "../../action-types";

const success = {
  status: 200,
  data: [
    {
      question: {
        createdBy: 1,
        meetup_id: 2,
        title: "hey bukky",
        body: "be great"
      }
    }
  ]
};
const failure = {
  status: 400,
  errors: ["Title is required", "Body is required"]
};
describe("Create question Actions", () => {
  it("should begin the create question actions", () => {
    const action = createQuestionPending();
    expect(action).toEqual({
      type: "CREATE_QUESTION_PENDING"
    });
  });

  it("should create a question success action", () => {
    const action = createQuestionSuccess(success);
    expect(action).toEqual({
      type: "CREATE_QUESTION_SUCCESS",
      payload: success
    });
  });

  it("should create a question failure action", () => {
    const action = createQuestionFailure(failure);
    expect(action).toEqual({
      type: "CREATE_QUESTION_FAILURE",
      payload: failure
    });
  });
});
describe("Signin Auth Actions Dispatch", () => {
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });

  it("should dispatch signin success when signin is successful", async () => {
    const store = mockStore({});
    const success = {
      response: {
        status: 200,
        data: [
          {
            question: {
              createdBy: 1,
              meetup_id: 2,
              title: "hey bukky",
              body: "be great"
            }
          }
        ]
      }
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(success);
    });
    await store.dispatch(createQuestion());
    expect(store.getActions()).toEqual([
      {
        type: CREATE_QUESTION_PENDING
      },
      {
        type: CREATE_QUESTION_SUCCESS,
        payload: {
          createdBy: success.response.data[0].question.createdBy,
          meetup_id: success.response.data[0].question.meetup_id,
          title: success.response.data[0].question.title,
          body: success.response.data[0].question.body,
        }
      }
    ]);
  });
});
