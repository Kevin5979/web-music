import request from "./request"

/**
 * 获取轮播图数据
 * @returns {AxiosPromise}
 */
export function getTopBanners() {
  return request({
    url: "/banner"
  })
}

/**
 * 获取热门歌单推荐
 * @param limit
 * @returns {AxiosPromise}
 */
export function getHotRecommend(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

/**
 * 新碟上架
 * @returns {AxiosPromise}
 */
export function getNewAlbums() {
  return request({
    url: "/album/newest"
  })
}

/**
 * 推荐排行榜
 * @param id
 * @returns {AxiosPromise}
 */
export function getTopRankList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}
