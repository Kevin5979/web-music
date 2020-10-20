import * as actionTypes from "./constants";
import {Map} from "immutable";

const defaultState = Map({
  allAlbum: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ALL_ALBUM:
      return state.set("allAlbum", action.allAlbum);
    default:
      return state;
  }
}

export default reducer;
