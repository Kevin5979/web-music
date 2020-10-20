import {
  getDjCateList,
  getDjRecommend,
  getDjRanking,
  getDjRadios
} from "services/djRadio";
import * as actionTypes from "./constants";

// 电台分类
const changeDjCateListAction = (categories) => ({
  type: actionTypes.CHANGE_DJ_CATE,
  djCate: categories
})

export const getDjCateListAction = () => {
  return dispatch => {
    getDjCateList().then(res => {
      dispatch(changeDjCateListAction(res.categories))
    })
  }
}

// 推荐电台
const changeDjRecommendAction = (res) => ({
  type: actionTypes.CHANGE_DJ_RCM,
  djRecommend: res.programs
})

export const getDjRecommendAction = () => {
  return dispatch => {
    getDjRecommend().then(res => {
      dispatch(changeDjRecommendAction(res))
    })
  }
}

// 电台排行榜
const changeDjRankingAction = (res) => ({
  type: actionTypes.CHANGE_DJ_RANK,
  djRanking: res.toplist
})

export const getDjRankingAction = () => {
  return dispatch => {
    getDjRanking().then(res => {
      dispatch(changeDjRankingAction(res))
    })
  }
}

// 分类推荐
const changeDjRadiosAction = (res) => ({
  type: actionTypes.CHANGE_DJ_RADIO,
  djRadios: res.djRadios
})

export const getDjRadiosAction = (cateId, offset, limit) => {
  return dispatch => {
    getDjRadios(cateId, offset, limit).then(res => {
      dispatch(changeDjRadiosAction(res))
    })
  }
}
