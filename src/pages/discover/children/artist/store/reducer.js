import {Map} from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  hotArtist: [],
  someArtist: []
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_HOT_ARTIST:
      return state.set("hotArtist", action.hotArtist);
    case actionTypes.CHANGE_SOME_ARTIST:
      return state.set("someArtist", action.someArtist);
    default:
      return state;
  }
}

export default reducer;
