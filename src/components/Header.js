import React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { push } from 'react-router-redux';
import logo from '../../assets/logo.png';

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
  }
};

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

