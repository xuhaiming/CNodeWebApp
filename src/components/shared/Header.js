import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { push } from 'react-router-redux';
import logo from '../../../assets/logo.png';
import toggleLoginDialog from '../../actions/toggleDialog';
import showToast from '../../actions/showToast';
import LoginDialog from '../account/LoginDialog';
import MorphIcon from './MorphIcon/index';
import iconPaths from './MorphIcon/iconPaths';
import styleConstants from '../../constants/styles';

const ICON_CONTAINER_SIZE = 30;
const ICON_SIZE = 25;
const ICON_PADDING = (ICON_CONTAINER_SIZE - ICON_SIZE) / 2;

const styles = {
  headerContainer: {
    position: 'fixed',
    zIndex: 1,
    top: 0,
    width: '100%',
    backgroundColor: 'white',
    borderBottom: '1px solid #e1e1e1'
  },
  placeHolder: {
    marginTop: styleConstants.headerHeight
  },
  logo: {
    width: 90,
    height: 'auto'
  },
  imageContainer: {
    width: 120,
    margin: 10
  },
  userButton: {
    position: 'absolute',
    right: 15,
    top: 12
  },
  userButtonContent: {
    padding: ICON_PADDING
  },
  userIcon: {
    backgroundColor: '#80bd01',
    borderRadius: '50%',
    width: ICON_CONTAINER_SIZE,
    height: ICON_CONTAINER_SIZE
  },
  avatarContainer: {
    position: 'static'
  },
  avatar: {
    width: ICON_CONTAINER_SIZE,
    height: ICON_CONTAINER_SIZE
  },
  anchorOrigin: {
    horizontal: 'right',
    vertical: 'bottom'
  },
  targetOrigin: {
    horizontal: 'right',
    vertical: 'top'
  }
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.openLoginDialog = this.openLoginDialog.bind(this);
    this.logout = this.logout.bind(this);
    this.goToUserPage = this.goToUserPage.bind(this);
  }

  openLoginDialog() {
    this.props.toggleLoginDialog();
  }

  logout() {
    this.props.showToast('登出成功');
    this.props.logout();
  }

  goToUserPage() {
    this.props.goToUserPage(this.props.user.loginname);
  }

  render() {
    const user = this.props.user;
    const userButton = user.id ? (
      <IconMenu
        style={styles.avatarContainer}
        anchorOrigin={styles.anchorOrigin}
        targetOrigin={styles.targetOrigin}
        iconButtonElement={(
          <FloatingActionButton
            style={styles.userButton}
            iconStyle={styles.userIcon}
          >
            <Avatar src={user.avatar_url} style={styles.avatar} />
          </FloatingActionButton>
        )}
      >
        <MenuItem primaryText="个人信息" onTouchTap={this.goToUserPage} />
        <MenuItem primaryText="登出" onTouchTap={this.logout} />
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
          iconStyle={styles.userButtonContent}
          fill="black"
        />
      </FloatingActionButton>
    );

    return (
      <div>
        <div style={styles.placeHolder}></div>
        <div style={styles.headerContainer}>
          <FlatButton style={styles.imageContainer} onClick={() => this.props.goToHomePage()}>
            <img alt="logo" src={logo.substring(1)} style={styles.logo} />
          </FlatButton>
          {userButton}
          <LoginDialog />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  goToHomePage: React.PropTypes.func.isRequired,
  goToUserPage: React.PropTypes.func.isRequired,
  toggleLoginDialog: React.PropTypes.func.isRequired,
  user: React.PropTypes.object,
  logout: React.PropTypes.func.isRequired,
  showToast: React.PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  goToHomePage: () => {
    dispatch(push('/'));
  },
  goToUserPage: userName => {
    dispatch(push(`/user/${userName}`));
  },
  toggleLoginDialog: () => {
    dispatch(toggleLoginDialog);
  },
  logout: () => dispatch({
    type: 'USER_LOGOUT'
  }),
  showToast: message => dispatch(showToast(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
