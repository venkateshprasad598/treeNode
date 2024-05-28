import { testType } from "../const/test.const";

export type testState = {
  test: { welcome: string };
};

const initialState: testState = {
  test: { welcome: "" },
};

export const storeTestReducer = (
  state = initialState,
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case testType.TEST:
      console.log(action.payload);
      return action.payload;

    default:
      return state;
  }
};
