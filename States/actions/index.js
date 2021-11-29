const save = details => {
  // return (dispatch) => {
  //     dispatch({
  //         type : 'add',
  //         payload : amount
  //     });
  // }

  return {
    type: 'ADDDATA',
    payload: details,
  };
};
const deleteData = deleteDetails => {
  return {
    type: 'DELETEDATA',
    payload: deleteDetails,
  };
};
//If we return function, like dispatch, we need to use middleware like thunk in store.js.

export {save, deleteData};
