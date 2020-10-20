import * as actionTypes from "./constants";
import {
  getTopBanners,
  getHotRecommend,
  getNewAlbums,
  getTopRankList
} from "services/recommend";

// 顶部轮播图
const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

// 热门推荐
const changeHotRecommendAction = res => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommend(limit).then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

// 新碟上架
const changeNewAlbumsAction = res => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums
})

export const getNewAlbumsAction = () => {
  return dispatch => {
    getNewAlbums().then(res => {
      dispatch(changeNewAlbumsAction(res))
    })
  }
}

// 榜单
const changeTopRankAction = (res, id) => {
  switch (id) {
    case "19723756":
      return {
        type: actionTypes.CHANGE_SURGE_RANK,
        topSurgeList: res.tracks
      }
    case "3779629":
      return {
        type: actionTypes.CHANGE_NEW_RANK,
        topNewList: res.tracks
      }
    case "2884035":
      return {
        type: actionTypes.CHANGE_ORIGINAL_RANK,
        topOriginalList: res.tracks
      }
    default:
      return;
  }
}

export const getTopRankAction = (id) => {
  return dispatch => {
    getTopRankList(id).then(res => {
      dispatch(changeTopRankAction(res.playlist, id))
    })
  }
}


