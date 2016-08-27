import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { toggleLoginDialog } from '../../actions/dialog';

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

    this.handleClose = this.handleClose.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleClose() {
    this.props.toggleDialog();
  }

  handleConfirm() {
    this.props.toggleDialog();
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
          style={styles.tokenInput}
          hintText="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
        />
      </Dialog>
    );
  }
}

LoginDialog.propTypes = {
  toggleDialog: React.PropTypes.func.isRequired,
  dialogOpen: React.PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  dialogOpen: state.dialogStatus.login
});

const mapDispatchToProps = dispatch => ({
  toggleDialog: () => {
    dispatch(toggleLoginDialog);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginDialog);

