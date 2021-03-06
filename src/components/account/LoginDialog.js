import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import toggleLoginDialog from '../../actions/toggleDialog';
import showToast from '../../actions/showToast';
import { post } from '../../api/client';

const styles = {
  tokenInput: {
    width: '100%'
  },
  dialog: {
    maxWidth: 350
  }
};

class LoginDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tokenInput: ''
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSucessLogin = this.handleSucessLogin.bind(this);
  }

  handleClose() {
    this.props.toggleDialog();
  }

  handleSucessLogin(data) {
    this.props.login(data);
    this.props.showToast(`Hi ${data.loginname}, 登录成功!`);
  }

  handleConfirm() {
    this.props.toggleDialog();
    post('accesstoken', { accesstoken: this.state.tokenInput })
      .then(this.handleSucessLogin)
      .catch(() => this.props.showToast('登录失败'));
  }

  handleInputChange(event) {
    this.setState({
      tokenInput: event.target.value
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="确定"
        onTouchTap={this.handleConfirm}
      />
    ];

    return (
      <Dialog
        title="登录"
        actions={actions}
        modal={false}
        open={this.props.dialogOpen}
        onRequestClose={this.handleClose}
        contentStyle={styles.dialog}
      >
        <div>请输入Access Token:</div>
        <TextField
          id="token-input"
          style={styles.tokenInput}
          onChange={this.handleInputChange}
        />
      </Dialog>
    );
  }
}

LoginDialog.propTypes = {
  toggleDialog: React.PropTypes.func.isRequired,
  dialogOpen: React.PropTypes.bool.isRequired,
  showToast: React.PropTypes.func.isRequired,
  login: React.PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  dialogOpen: state.dialogStatus.login
});

const mapDispatchToProps = dispatch => ({
  toggleDialog: () => {
    dispatch(toggleLoginDialog);
  },
  login: user => {
    dispatch({
      type: 'USER_LOGIN',
      user
    });
  },
  showToast: message => dispatch(showToast(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginDialog);

