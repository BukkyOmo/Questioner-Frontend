import {
  createQuestionReducer,
  initialState
} from "../../reducers/createQuestionReducer";
import {
  CREATE_QUESTION_PENDING,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAILURE
} from "../../action-types";

describe("Create a question reducers", () => {
  it("should change loading to true when the create question is pending", () => {
    const reducerState = createQuestionReducer(null, {
      type: CREATE_QUESTION_PENDING
    });
    expect(reducerState.isLoading).toEqual(true);
  });
  it("should recieve success payload on successful signup", () => {
    const payload = {
        status: 200,
        message: 'successfully created'
    };
    const reducerState = createQuestionReducer(null, {
      type: CREATE_QUESTION_SUCCESS,
      payload
    });
    expect(reducerState.status).toEqual(200);
    expect(reducerState.isLoading).toEqual(false);
    expect(reducerState.message).toEqual('successfully created');
  });
  it("should recieve success payload on successful signup", () => {
    const payload = {
      error: true
    };
    const reducerState = createQuestionReducer(null, {
      type: CREATE_QUESTION_FAILURE,
      payload
    });
    expect(reducerState.error).toEqual(true);
    expect(reducerState.isLoading).toEqual(false);
  });
});
