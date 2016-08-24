export default {
  body: {
    margin: 0
  },
  'p, li': {
    fontSize: 16
  },
  img: {
    width: '100%'
  },
  mediaQueries: {
    '(min-width: 768px)': {
      img: {
        width: 'auto',
        maxWidth: '100%'
      }
    }
  }
};
