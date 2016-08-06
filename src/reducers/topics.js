const initialState = {
  currentTopics: []
};

const topics = (state = initialState, action) => {
  switch (action.type) {
    case 'TOPICS_FETCH':
      return {
        currentTopics: action.data
      };
    default:
      return state;
  }
};

export default topics;
