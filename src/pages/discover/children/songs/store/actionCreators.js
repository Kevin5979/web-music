import * as actionTypes from "./constants";
import {getTopPlayList, getCatList} from "services/songs";

// 获取歌单标签
const changeCatListAction = res => ({
  type: actionTypes.CHANGE_CAT_LIST,
  catList: res
})

export const getCatListAction = () => {
  return dispatch => {
    getCatList().then(res => {
      dispatch(changeCatListAction(res))
    })
  }
}

// 获取默认歌单
const changeTopPlayListAction = (res) => ({
  type: actionTypes.CHANGE_TOP_PLAYLIST,
  topPlayList: res
})

export const getTopPlayListAction = (order,cat, limit, offset) => {
  return dispatch => {
    getTopPlayList(order,cat, limit, offset).then(res => {
      dispatch(changeTopPlayListAction(res))
    })
  }
}

