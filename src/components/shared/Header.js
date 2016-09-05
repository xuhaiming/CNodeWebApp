import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import { push } from 'react-router-redux';
import logo from '../../../assets/logo.png';
import { toggleLoginDialog } from '../../actions/dialog';
import LoginDialog from '../account/LoginDialog';
import MorphIcon from './MorphIcon/index';
import iconPaths from './MorphIcon/iconPaths';

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
    width: 35,
    height: 35
  },
  avatarStyle: {
    width: 35,
    height: 35
  }
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.openLoginDialog = this.openLoginDialog.bind(this);
  }

  openLoginDialog() {
    this.props.toggleLoginDialog();
  }

  render() {
    const user = this.props.user;
    const userButton = user ? (
      <IconMenu
        iconButtonElement={(
          <IconButton>
            <Avatar src={user.avatar_url} style={styles.avatarStyle} />
          </IconButton>
        )}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
      >
        <MenuItem primaryText="个人信息" />
        <MenuItem primaryText="登出" />
      </IconMenu>
    ) : (
      <FloatingActionButton
        style={styles.userButton}
        iconStyle={styles.userIcon}
        onTouchTap={this.openLoginDialog}
      >
        <MorphIcon
          originState={iconPaths.person}
          hoverState={iconPaths.login}
          fill="black"
        />
      </FloatingActionButton>
    );

    return (
      <div style={styles.headerContainer}>
        <FlatButton style={styles.imageContainer} onClick={() => this.props.goToHomePage()}>
          <img alt="logo" src={logo.substring(1)} style={styles.logo} />
        </FlatButton>
        {userButton}
        <LoginDialog />
      </div>
    );
  }
}

Header.propTypes = {
  goToHomePage: React.PropTypes.func.isRequired,
  toggleLoginDialog: React.PropTypes.func.isRequired,
  user: React.PropTypes.object
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  goToHomePage: () => {
    dispatch(push('/'));
  },
  toggleLoginDialog: () => {
    dispatch(toggleLoginDialog);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
