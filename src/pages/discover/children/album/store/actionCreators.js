import * as actionTypes from "./constants";
import {getAllAlbum} from "services/album";

// 获取全部新碟
const changeAllAlbumAction = (albums) => ({
  type: actionTypes.CHANGE_ALL_ALBUM,
  allAlbum: albums
})

export const getAllAlbumAction = (area, offset, limit) => {
  return dispatch => {
    getAllAlbum(area, offset, limit).then(res => {
      dispatch(changeAllAlbumAction(res.albums))
    })
  }
}

