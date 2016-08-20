const styles = {
  headerContainer: {
    position: 'fixed',
    zIndex: 1,
    width: '100%',
    backgroundColor: 'white',
    borderBottom: '1px solid #e1e1e1'
  },
  imageContainer: {
    width: 120,
    margin: '10px 20px'
  },
  logo: {
    width: 120,
    height: 'auto'
  },
  swipeContainer: {
    height: '100%',
    paddingBottom: 60,
    marginTop: 65
  },
  swipeSlide: {
    overflowY: 'hidden'
  },
  tabsContainer: {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    zIndex: 1
  },
  tabs: {
    backgroundColor: '#80bd01',
    color: '#f6f6f6'
  },
  topicItemRipple: {
    textAlign: 'left'
  },
  topicItemTitleContainer: {
    margin: '5px 20px',
    width: 'calc(100% - 40px)',
    height: 'auto'
  },
  topicItemContainer: {
    textAlign: 'left',
    padding: '10px 15px'
  },
  topicItemAvatar: {
    width: 30,
    display: 'inline-block'
  },
  topicItemContent: {
    display: 'inline-block',
    marginLeft: 15,
    maxWidth: 'calc(100% - 180px)'
  },
  topicItemTitle: {
    margin: 0
  },
  topicDetailContainer: {
    padding: '65px 10px 0'
  },
  commentContainer: {
    margin: '10px 0'
  },
  progress: {
    margin: '250px auto',
    display: 'block'
  }
};

export default styles;
