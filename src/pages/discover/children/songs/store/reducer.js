import {Map} from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  topPlayList: {},
  catList: {}
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_PLAYLIST:
      return state.set("topPlayList", action.topPlayList);
    case actionTypes.CHANGE_CAT_LIST:
      return state.set("catList", action.catList);
    default:
      return state;
  }
}

export default reducer;
