export default {
  body: {
    margin: 0,
    fontFamily: '"Helvetica Neue","Luxi Sans","DejaVu Sans",' +
      'Tahoma,"Hiragino Sans GB",STHeiti,sans-serif'
  },
  a: {
    textDecoration: 'none',
    color: '#4078c0'
  },
  'a:hover': {
    textDecoration: 'underline'
  },
  'p, li': {
    fontSize: 16
  },
  img: {
    width: '100%',
    display: 'block'
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
