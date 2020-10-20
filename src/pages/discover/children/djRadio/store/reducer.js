import * as actionTypes from "./constants";
import {Map} from "immutable";

const defaultState = Map({
  djCate: [],
  djRecommend: [],
  djRanking: [],
  djRadios: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_DJ_CATE:
      return state.set("djCate", action.djCate);
    case actionTypes.CHANGE_DJ_RCM:
      return state.set("djRecommend", action.djRecommend);
    case actionTypes.CHANGE_DJ_RANK:
      return state.set("djRanking", action.djRanking);
    case actionTypes.CHANGE_DJ_RADIO:
      return state.set("djRadios", action.djRadios);
    default:
      return state;
  }
}

export default reducer;
