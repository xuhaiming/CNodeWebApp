import React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { push } from 'react-router-redux';

const styles = {
  headerContainer: {
    backgroundColor: '#444'
  },
  imageContainer: {
    width: 120,
    margin: '10px 20px'
  }
};

const Header = ({ goToHomePage }) => (
  <div style={styles.headerContainer}>
    <FlatButton style={styles.imageContainer} onClick={() => goToHomePage()}>
      <img alt="logo" src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" />
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

