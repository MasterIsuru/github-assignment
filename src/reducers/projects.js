import ActionTypes from '../constants/actionTypes';

const initialState = {
  loading: false,
  error: {},
  projectList: [],
  currentProject: undefined,
}

export default function projects(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_PROJECTS:
      return {
        ...state,
        loading: true,
        projectList: []
      }
    case ActionTypes.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        projectList: action.result,
      }
    case ActionTypes.GET_PROJECTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case ActionTypes.GET_PROJECT_README:
      return {
        ...state,
        currentProject: undefined,
        loading: true,
      }
    case ActionTypes.GET_PROJECT_README_SUCCESS:
      return {
        ...state,
        loading: false,
        currentProject: action.result,
      }
    case ActionTypes.GET_PROJECT_README_FAIL:
      return {
        ...state,
        currentProject: undefined,
        loading: false,
      }
    default:
      return state
  }
}
