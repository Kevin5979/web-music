import * as actionTypes from "./constants";
import {getMusicDetail} from "services/player";
import {getMusicComment, getMusicLyric, getSimilarMusic} from "services/player";

// 获取当前音乐详情
const changeMusicDetailAction = res => ({
  type: actionTypes.CHANGE_MUSIC_DETAIL,
  currentMusic: res
})

export const getMusicDetailAction = ids => {
  return dispatch => {
    getMusicDetail(ids).then(res => {
      dispatch(changeMusicDetailAction(res.songs[0]));
      // 当前歌曲存到本地
      localStorage.setItem("CURRENT_MUSIC", JSON.stringify(res.songs[0]));
    })
  }
}

// 当前播放面板的详情
const changeCurrentPanelAction = res => ({
  type: actionTypes.CHANGE_CURRENT_PANEL,
  currentPanel: res
})

export const getCurrentPanelAction = ids => {
  return dispatch => {
    getMusicDetail(ids).then(res => {
      dispatch(changeCurrentPanelAction(res.songs[0]))
    })
  }
}

// 获取歌词
const changMusicLyricAction = res => ({
  type: actionTypes.CHANGE_MUSIC_LYRIC,
  musicLyric: res
})

export const getMusicLyricAction = id => {
  return dispatch => {
    getMusicLyric(id).then(res => {
      dispatch(changMusicLyricAction(res.lrc))
    })
  }
}

// 当前音乐评论
const changeMusicCommentAction = res => ({
  type: actionTypes.CHANGE_MUSIC_COMMENT,
  musicComment: res
})

export const getMusicCommentAction = (id, limit, offset) => {
  return dispatch => {
    getMusicComment(id, limit, offset).then(res => {
      dispatch(changeMusicCommentAction(res))
    })
  }
}

// 获取相似歌曲
const changeSimilarMusicAction = res => ({
  type: actionTypes.CHANGE_SIMILAR_MUSIC,
  similarMusic: res
})

export function getSimilarMusicAction(id) {
  return dispatch => {
    getSimilarMusic(id).then(res => {
      dispatch(changeSimilarMusicAction(res.songs))
    })
  }
}

