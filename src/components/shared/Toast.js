import React from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';

const Toast = ({ show, message, hideToast }) => (
  <Snackbar
    open={show}
    message={message}
    autoHideDuration={2000}
    onRequestClose={hideToast}
    bodyStyle={{ textAlign: 'center' }}
  />
);

Toast.propTypes = {
  show: React.PropTypes.bool.isRequired,
  message: React.PropTypes.string.isRequired,
  hideToast: React.PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  hideToast: () => {
    dispatch({
      type: 'TOAST_HIDE'
    });
  }
});

const mapStateToProps = state => ({
  show: state.toast.show,
  message: state.toast.message
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toast);
