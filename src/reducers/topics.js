const initialState = {
  originalTopics: [],
  currentTopics: []
};

const switchTab = (topic, tab) => {
  switch (tab) {
    case 'good':
      return topic.good;
    case 'all':
      return topic;
    default:
      return topic.tab === tab;
  }
};

const filterTab = (originTopics, tab) => (
  originTopics.filter(topic => switchTab(topic, tab))
);

const topics = (state = initialState, action) => {
  switch (action.type) {
    case 'TOPICS_FETCH':
      return {
        originalTopics: action.data,
        currentTopics: action.data
      };
    case 'TOPICS_FILTER':
      return Object.assign({}, state, {
        currentTopics: filterTab(state.originalTopics, action.tab)
      });
    default:
      return state;
  }
};

export default topics;
