const defaultState = {
  display: 1,
  savedNotes: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, savedNotes: action.payload };

    case 'SWITCH': {
      return {
        ...state, display: action.payload,
      };
    }
    default: return state;
  }
};

export default reducer;
