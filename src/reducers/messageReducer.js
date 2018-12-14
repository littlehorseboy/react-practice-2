import { ADD_MESSAGE } from '../constants/action-types';
import messages from '../constants/models';

const messageReducer = (state = messages, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      Object.assign(action.payload, { id: (state.messages.length + 1).toString() });
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
};

export { messageReducer };
