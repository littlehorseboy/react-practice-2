import { ADD_MESSAGE } from '../constants/action-types';
import messages from '../constants/models';

const messageReducer = (state = messages, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      Object.assign(action.paylod, { id: (state.message.length + 1).toString() });
      return { ...state, message: [...state.message, action.paylod] };
    default:
      return state;
  }
};

export { messageReducer };
