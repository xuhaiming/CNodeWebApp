const initialState = {
  show: false,
  message: ''
};

const toast = (state = initialState, action) => {
  switch (action.type) {
    case 'TOAST_SHOW': {
      return Object.assign({}, state, { show: true, message: action.message });
    }

    case 'TOAST_HIDE': {
      return Object.assign({}, state, { show: false, message: '' });
    }

    default:
      return state;
  }
};

export default toast;
