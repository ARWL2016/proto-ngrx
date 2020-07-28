import { createReducer, on, Action } from '@ngrx/store';
import { increment, decrement, reset, add } from './counter.actions';
import { CounterState } from '.';

export const initialState = {
    counter: 0
};

const handleIncrement = (state: CounterState): CounterState => {
    return {
        ...state,
        counter: state.counter + 1
    } 
}

const handleDecrement = (state: CounterState): CounterState  => {
    return {
        ...state,
        counter: state.counter - 1
    } 
}

const handleAdd = (state: CounterState, amount: number): CounterState  => {
    return {
        counter: state.counter + amount
    }
}

const _counterReducer = createReducer(initialState,
  on(increment, state => handleIncrement(state)),
  on(decrement, state => handleDecrement(state)),
  on(reset, () => initialState),
  on(add, (state, {amount}) => handleAdd(state, amount))
);

export function counterReducer(state: CounterState, action: Action) {
  return _counterReducer(state, action);
}