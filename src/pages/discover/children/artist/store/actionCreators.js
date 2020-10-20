import {getHotArtist, getSomeArtist} from "services/artist";
import * as actionTypes from "./constants";

// 获取热门歌手
const changeArtistAction = (res) => ({
  type: actionTypes.CHANGE_HOT_ARTIST,
  hotArtist: res.artists
})

export const getHotArtistAction = () => {
  return dispatch => {
    getHotArtist().then(res => {
      dispatch(changeArtistAction(res))
    })
  }
}

// 分类获取歌手
const changeSomeArtistAction = (res) => ({
  type: actionTypes.CHANGE_SOME_ARTIST,
  someArtist: res.artists
})

export const getSomeArtistAction = (type, area, initial, offset, limit) => {
  return dispatch => {
    getSomeArtist(type, area, initial, offset, limit).then(res => {
      dispatch(changeSomeArtistAction(res))
    })
  }
}


