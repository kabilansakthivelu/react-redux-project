import { createStore } from 'redux';
import {reducer} from './reducer';

const initialState = {
    valueOfA: 0,
    valueOfB: 0,
}

export const store = createStore(reducer, initialState);