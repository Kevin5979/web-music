import {Map} from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  allRanking: [],
  rankingDetail: {},
  rankingComment: {}
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ALL_RINKING:
      return state.set("allRanking", action.allRanking);
    case actionTypes.CHANGE_RANKING_DETAIL:
      return state.set("rankingDetail", action.rankingDetail);
    case actionTypes.CHANGE_RANKING_COMMENT:
      return state.set("rankingComment", action.rankingComment);
    default:
      return state
  }
}

export default reducer;
