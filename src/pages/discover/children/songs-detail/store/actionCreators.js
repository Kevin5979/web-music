import * as actionTypes from "./constants";
import {
  getSongsDetail,
  getSongsComment,
  getSongsRelated
} from "services/songs";

// 获取歌单详情
const changeSongsDetail = res => ({
  type: actionTypes.CHANGE_SONGS_DETAIL,
  songsDetail: res
})

export const getSongsDetailAction = id => {
  return dispatch => {
    getSongsDetail(id).then(res => {
      dispatch(changeSongsDetail(res.playlist))
    })
  }
}

// 获取歌单评论
const changeSongsCommentAction = res => ({
  type: actionTypes.CHANGE_SONGS_COMMENT,
  songsComment: res
})

export const getSongsCommentAction = (id, limit, offset) => {
  return dispatch => {
    getSongsComment(id, limit, offset).then(res => {
      dispatch(changeSongsCommentAction(res))
    })
  }
}

// 获取相关歌单
const changeSongsRelatedAction = res => ({
  type: actionTypes.CHANGE_SONGS_RELATED,
  songsRelated: res
})

export const getSongsRelatedAction = id => {
  return dispatch => {
    getSongsRelated(id).then(res => {
      dispatch(changeSongsRelatedAction(res.playlists))
    })
  }
}


