import * as actionTypes from "./constants";
import {getAlbumDetail, getAlbumComment} from "services/album";


// 获取专辑详情
const changeAlbumDetailAction = res => ({
  type: actionTypes.CHANGE_ALBUM_DETAIL,
  albumDetail: res
})

export const getAlbumDetailAction = id => {
  return dispatch => {
    getAlbumDetail(id).then(res => {
      dispatch(changeAlbumDetailAction(res))
    })
  }
}

// 获取专辑评论
const changeAlbumCommentAction = res => ({
  type: actionTypes.CHANGE_ALBUM_COMMENT,
  albumComment: res
})

export const getAlbumCommentAction = (id, limit, offset) => {
  return dispatch => {
    getAlbumComment(id, limit, offset).then(res => {
      dispatch(changeAlbumCommentAction(res))
    })
  }
}
