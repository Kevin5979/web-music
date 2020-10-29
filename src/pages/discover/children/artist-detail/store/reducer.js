import {Map} from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  artistTopSongs: [],
  artistAlbum: {},
  artistMV: [],
  artistDesc: {}
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ARTIST_TOP:
      return state.set("artistTopSongs", action.artistTopSongs);
    case actionTypes.CHANGE_ARTIST_ALBUM:
      return state.set("artistAlbum", action.artistAlbum);
    case actionTypes.CHANGE_ARTIST_MV:
      return state.set("artistMV", action.artistMV);
    case actionTypes.CHANGE_ARTIST_DESC:
      return state.set("artistDesc", action.artistDesc);
    default:
      return state;
  }
}

export default reducer;
