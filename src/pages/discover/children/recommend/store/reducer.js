import {Map} from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  topSurgeList: [],
  topNewList: [],
  topOriginalList: []
});

function reducer(state = defaultState, active) {
  switch (active.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", active.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", active.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUMS:
      return state.set("newAlbums", active.newAlbums);
    case actionTypes.CHANGE_SURGE_RANK:
      return state.set("topSurgeList",active.topSurgeList);
    case actionTypes.CHANGE_NEW_RANK:
      return state.set("topNewList",active.topNewList);
    case actionTypes.CHANGE_ORIGINAL_RANK:
      return state.set("topOriginalList",active.topOriginalList);
    default:
      return state;
  }
}

export default reducer;

