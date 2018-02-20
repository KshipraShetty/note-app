export const displaySaveAction = note => ({
  type: 'ADD',
  payload: note,
});

export const switchAction = display => ({
  type: 'SWITCH',
  payload: display,
});
