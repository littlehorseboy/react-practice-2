import { ADD_MESSAGE, EDIT_MESSAGE } from '../constants/action-types';

export const addMessage = message => ({ type: ADD_MESSAGE, payload: message });
export const editMessage = message => ({ type: EDIT_MESSAGE, payload: message });
