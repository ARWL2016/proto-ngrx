import { createReducer, on, Action } from '@ngrx/store';

export interface UserState {
    userName: string;
}

export const initialState = {
    userName: 'Some name'
};


const _userReducer = createReducer(initialState);

export function userReducer(state: UserState, action: Action) {
  return _userReducer(state, action);
}