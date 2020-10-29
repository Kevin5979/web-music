import {Map} from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  currentMusic: {},
  currentPanel: {},
  musicLyric: {},
  musicComment: {},
  similarMusic: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_MUSIC_DETAIL:
      return state.set("currentMusic", action.currentMusic);
    case actionTypes.CHANGE_CURRENT_PANEL:
      return state.set("currentPanel", action.currentPanel);
    case actionTypes.CHANGE_MUSIC_LYRIC:
      return state.set("musicLyric", action.musicLyric);
    case actionTypes.CHANGE_MUSIC_COMMENT:
      return state.set("musicComment", action.musicComment);
    case actionTypes.CHANGE_SIMILAR_MUSIC:
      return state.set("similarMusic", action.similarMusic);
    default:
      return state;
  }
}

export default reducer;
