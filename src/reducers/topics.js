const topics = (state = {}, action) => {
  const data = {};

  switch (action.type) {
    case 'TOPICS_FETCH':
      data[action.tab] = action.data;

      return Object.assign({}, state, data);
    default:
      return state;
  }
};

export default topics;
