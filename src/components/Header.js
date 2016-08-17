import React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { push } from 'react-router-redux';
import logo from '../../assets/logo.png';
import styles from '../styles';

const Header = ({ goToHomePage }) => (
  <div style={styles.headerContainer}>
    <FlatButton style={styles.imageContainer} onClick={() => goToHomePage()}>
      <img alt="logo" src={logo.substring(1)} style={styles.logo} />
    </FlatButton>
  </div>
);

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

