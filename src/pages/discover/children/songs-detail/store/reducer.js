import {Map} from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  songsDetail: {},
  songsComment: {},
  songsRelated: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SONGS_DETAIL:
      return state.set("songsDetail", action.songsDetail);
    case actionTypes.CHANGE_SONGS_COMMENT:
      return state.set("songsComment", action.songsComment);
    case actionTypes.CHANGE_SONGS_RELATED:
      return state.set("songsRelated", action.songsRelated);
    default:
      return state;
  }
}

export default reducer;
