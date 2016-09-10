import cookie from 'react-cookie';

const user = (state = cookie.load('user') || {}, action) => {
  switch (action.type) {
    case 'USER_LOGIN': {
      cookie.save('user', action.user);
      return Object.assign({}, action.user);
    }

    case 'USER_LOGOUT': {
      cookie.remove('user');
      return {};
    }

    default:
      return state;
  }
};

export default user;
