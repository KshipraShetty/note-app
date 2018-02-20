const defaultState = {
  display: 1,
  savedNotes: [],
  // currentNote: {
  //   title: '',
  //   note: '',
  // },
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    // case 'ADD_EDIT': {
    //   // edit notes
    //   if (action.payload.savedNotes.noteKey) {
    //     return {
    //       ...state,
    //       notes: state.map((note) => {
    //         if (note.noteKey !== action.payload.savedNotes.noteKey) {
    //           return note;
    //         }
    //         return {
    //           note: action.payload.note,
    //           title: action.payload.title,
    //         };
    //       }),
    //
    //     };
    //   }
    //   // add notes
    //   return {
    //     ...state,
    //     savedNotes: [...state.savedNotes, {
    //       noteKey: Date.now(),
    //       note: action.payload.note,
    //       title: action.payload.title,
    //     }],
    //   };
    // }
    case 'ADD':
      return { ...state, savedNotes: action.payload.noteData };
    case 'EDIT':
      return state;
    case 'SWITCH': {
      if (action.payload.display === 0) {
        return {
          ...state, display: 1,
        };
      }
      return {
        ...state, display: 0,
      };
    }

    default: return state;
  }
};

export default reducer;
