import {Map} from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  albumDetail: {},
  albumComment: {},
  hotComments: []
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ALBUM_DETAIL:
      return state.set("albumDetail", action.albumDetail);
    case actionTypes.CHANGE_ALBUM_COMMENT:
      return state.set("albumComment", action.albumComment);
    default:
      return state;
  }
}

export default reducer;
