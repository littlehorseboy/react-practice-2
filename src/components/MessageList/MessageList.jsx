import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ConnectMessageList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.messages.map(item => <li key={item.id}>{item.name}: {item.message}</li>)}
      </ul>
    );
  }
}

ConnectMessageList.propTypes = {
  messages: PropTypes.array,
};

const mapStateToProps = state => ({ messages: state.messages });

const MessageList = connect(mapStateToProps)(ConnectMessageList);

export default MessageList;
