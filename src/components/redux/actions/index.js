export const displaySaveAction = note => ({
  type: 'ADD',
  payload: note,
});

export const displayEditAction = note => ({
  type: 'EDIT',
  payload: note,
});

export const switchAction = page => ({
  type: 'SWITCH',
  payload: page,
});
