import _ from 'lodash';
import { FETCH_POSTS_DATA, FETCH_POST, DELETE_POST } from "../actions/index";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS_DATA: {
      return {...state, ..._.mapKeys(action.payload.data, 'id')};
    }
    case FETCH_POST: {
      return {...state, [action.payload.data.id]: action.payload.data};
    }
    case DELETE_POST: {
      return _.omit(state, action.payload);
    }
    default:
      return state;
  }
}