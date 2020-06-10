import ActionTypes from '../constants/actionTypes';
import request from '../utils/request';
import config from '../config';

export const getProjects = (username) => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_PROJECTS })
  const result = await request(`${config.API_URL}/users/${username}/repos?type=all&sort=updated`);
  if (!result) {
    return dispatch({
      type: ActionTypes.GET_PROJECTS_FAIL
    });
  }
  return dispatch({
    type: ActionTypes.GET_PROJECTS_SUCCESS,
    result
  });
}

export const getProjectReadMe = (username, project) => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_PROJECT_README })
  const result = await request(
    `${config.README_URL}/${username}/${project}/master/README.md`,
    'GET',
    undefined,
    'text'
  );
  if (!result) {
    return dispatch({
      type: ActionTypes.GET_PROJECT_README_FAIL
    });
  }
  return dispatch({
    type: ActionTypes.GET_PROJECT_README_SUCCESS,
    result
  });
}
