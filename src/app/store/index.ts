import { createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export interface AppState {
    count: CounterState;
    user: UserState
}

export interface CounterState {
    counter: number;
}

// return the feature store from the whole app state
export const selectCount = (state: AppState): CounterState => state.count;
export const selectUser = (state: AppState): UserState => state.user;

export const selectCounterCount = createSelector(
    selectCount, 

    // return a specific property
    (state: CounterState) => state.counter
)

export const getCount = createSelector(
    selectCounterCount,
    (count, props) => count * props.multiply
)

export const selectUserName = createSelector(
    selectUser,
    (state: UserState) => state.userName
)

export const combine = createSelector(
    selectCount,
    selectUser,
    (a, b) => a.counter + b.userName

)