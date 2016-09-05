import cookie from 'react-cookie';

const user = (state = cookie.load('user'), action) => {
  switch (action.type) {
    case 'USER_LOGIN': {
      return Object.assign({}, action.user);
    }

    case 'USER_LOGOUT': {
      return null;
    }

    default:
      return state;
  }
};

export default user;
