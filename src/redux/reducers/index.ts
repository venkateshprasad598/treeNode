import { combineReducers } from "@reduxjs/toolkit";
import { storeTestReducer, testState } from "./test.reducer";

interface StoreEnhancerState {}

export interface RootState extends StoreEnhancerState {
  storeTestReducer: testState;
}

export const rootReducer = () =>
  combineReducers<RootState>({
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    storeTestReducer: storeTestReducer as any,
  });
