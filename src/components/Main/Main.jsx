import React from 'react';
import MessageList from '../MessageList/MessageList.jsx';
import InputMessage from '../InputMessage/InputMessage.jsx';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class Main extends React.Component {
  render() {
    return (
      <div>
        <InputMessage />
        <MessageList />
      </div>
    );
  }
}

export default Main;
