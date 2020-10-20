import * as actionTypes from "./constants";
import {
  getAllRankingList,
  getRankingDetail,
  getRankingComment
} from "services/ranking";

// 获取全部榜单
const changeAllRankingAction = (list) => ({
  type: actionTypes.CHANGE_ALL_RINKING,
  allRanking: list
})

export const getAllRankingAction = function () {
  return dispatch => {
    getAllRankingList().then(res => {
      dispatch(changeAllRankingAction(res.list))
    })
  }
}

// 获取榜单详细数据
const changeRankingDetailAction = (playlist) => ({
  type: actionTypes.CHANGE_RANKING_DETAIL,
  rankingDetail: playlist
})

export const getRankingDetailAction = function (id) {
  return dispatch => {
    getRankingDetail(id).then(res => {
      dispatch(changeRankingDetailAction(res.playlist));
    })
  }
}

// 获取评论数据
const changeRankingCommentAction = (res) => ({
  type: actionTypes.CHANGE_RANKING_COMMENT,
  rankingComment: res
})

export const getRankingCommentAction = function (id, offset) {
  return dispatch => {
    getRankingComment(id, offset).then(res => {
      dispatch(changeRankingCommentAction(res));
    })
  }
}



