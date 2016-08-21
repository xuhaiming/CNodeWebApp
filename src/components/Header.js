import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { push } from 'react-router-redux';
import logo from '../../assets/logo.png';
import IconButton from 'material-ui/IconButton/IconButton';
import UserIcon from 'material-ui/svg-icons/social/person';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

const styles = {
  headerContainer: {
    position: 'fixed',
    zIndex: 1,
    top: 0,
    width: '100%',
    backgroundColor: 'white',
    borderBottom: '1px solid #e1e1e1'
  },
  logo: {
    width: 120,
    height: 'auto'
  },
  imageContainer: {
    width: 120,
    margin: '10px 20px'
  },
  userButton: {
    position: 'absolute',
    right: 10
  },
  userIcon: {
    backgroundColor: '#80bd01',
    borderRadius: '50%',
    width: 26,
    height: 26
  },
  tokenInput: {
    width: '100%'
  },
  dialog: {
    maxWidth: 350
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ dialogOpen: true });
  }

  handleClose() {
    this.setState({ dialogOpen: false });
  }

  render() {
    const actions = [
      <FlatButton
        label="确定"
        onTouchTap={this.handleClose}
      />
    ];

    return (
      <div style={styles.headerContainer}>
        <FlatButton style={styles.imageContainer} onClick={() => this.props.goToHomePage()}>
          <img alt="logo" src={logo.substring(1)} style={styles.logo} />
        </FlatButton>
        <IconButton
          style={styles.userButton}
          iconStyle={styles.userIcon}
          onTouchTap={this.handleOpen}
        >
          <UserIcon color="white" />
        </IconButton>
        <Dialog
          title="登录"
          actions={actions}
          modal={false}
          open={this.state.dialogOpen}
          onRequestClose={this.handleClose}
          contentStyle={styles.dialog}
        >
          <div>请输入Access Token:</div>
          <TextField
            style={styles.tokenInput}
            hintText="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
          />
        </Dialog>
      </div>
    );
  }
}

Header.propTypes = {
  goToHomePage: React.PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  goToHomePage: () => {
    dispatch(push('/'));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Header);

