
export const testType = {
  TEST: "TEST",
};

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const setTest = (payload: any) => {
  return {
    type: testType.TEST,
    payload: payload,
  };
};
