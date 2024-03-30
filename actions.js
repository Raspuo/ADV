export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = (task) => {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_TASK,
      payload: task,
    });

    // Save tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(getState().tasks.tasks));
  };
};

export const deleteTask = (taskId) => {
  return (dispatch, getState) => {
    dispatch({
      type: DELETE_TASK,
      payload: taskId,
    });

    // Save tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(getState().tasks.tasks));
  };
};
