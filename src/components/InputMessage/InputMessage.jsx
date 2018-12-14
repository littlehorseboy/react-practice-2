import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMessage } from '../../actions';

class ConnectInputMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
    };
    this.changeState = this.changeState.bind(this);
    this.clearMessage = this.clearMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  changeState(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  clearMessage() {
    this.setState({ name: '', message: '' });
  }

  submitMessage() {
    this.props.addMessage({
      name: this.state.name,
      message: this.state.message,
    });
    this.clearMessage();
  }

  render() {
    return (
      <div>
        暱稱: <input name="name" value={this.state.name} onChange={this.changeState} />
        <br />
        訊息: <textarea name="message" value={this.state.message} onChange={this.changeState}></textarea>
        <br />
        <button onClick={this.submitMessage}>送出留言</button>
      </div>
    );
  }
}

ConnectInputMessage.propTypes = {
  addMessage: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  addMessage: (message) => {
    dispatch(addMessage(message));
  },
});

const InputMessage = connect(null, mapDispatchToProps)(ConnectInputMessage);

export default InputMessage;
