import * as actionTypes from "./constants";
import {
  getArtistTopSongs,
  getArtistAlbum,
  getArtistMV,
  getArtistDesc
} from "services/artist";


// 获取歌手top50歌曲
const changeArtistTopSongsAction = res => ({
  type: actionTypes.CHANGE_ARTIST_TOP,
  artistTopSongs: res
})

export const getActionTopSongsAction = id => {
  return dispatch => {
    getArtistTopSongs(id).then(res => {
      dispatch(changeArtistTopSongsAction(res.songs))
    })
  }
}

// 获取歌手专辑
const changeArtistAlbumAction = res => ({
  type: actionTypes.CHANGE_ARTIST_ALBUM,
  artistAlbum: res
})

export const getArtistAlbumAction = (id, limit) => {
  return dispatch => {
    getArtistAlbum(id, limit).then(res => {
      dispatch(changeArtistAlbumAction(res))
    })
  }
}

// 获取歌手MV
const changeArtistMVAction = res => ({
  type: actionTypes.CHANGE_ARTIST_MV,
  artistMV: res
})

export const getArtistMVAction = (id, limit) => {
  return dispatch => {
    getArtistMV(id, limit).then(res => {
      dispatch(changeArtistMVAction(res.mvs))
    })
  }
}

// 获取歌手描述信息
const changeArtistDescAction = res => ({
  type: actionTypes.CHANGE_ARTIST_DESC,
  artistDesc: res
})

export const getArtistDescAction = id => {
  return dispatch => {
    getArtistDesc(id).then(res => {
      dispatch(changeArtistDescAction(res))
    })
  }
}


