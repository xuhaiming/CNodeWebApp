const initialState = {
  login: false
};

const dialogStatus = (state = initialState, action) => {
  switch (action.type) {
    case 'DIALOG_STATUS_TOGGLE': {
      const dialogType = action.dialogType;

      return Object.assign({}, state, { [dialogType]: !state[dialogType] });
    }

    default:
      return state;
  }
};

export default dialogStatus;
