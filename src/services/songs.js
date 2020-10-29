import request from "./request";

/**
 * 获取歌单分类标签
 * @returns {AxiosPromise}
 */
export function getCatList() {
  return request({
    url: "/playlist/catlist"
  })
}

/**
 * 获取默认歌单
 * @param order
 * @param cat
 * @param limit
 * @param offset
 * @returns {AxiosPromise}
 */
export function getTopPlayList(order = "hot", cat = "全部", limit = 35, offset = 0) {
  return request({
    url: "/top/playlist",
    params: {
      order,
      cat,
      limit,
      offset
    }
  })
}

/**
 * 获取歌单详情
 * @param id
 * @returns {AxiosPromise}
 */
export function getSongsDetail(id) {
  return request({
    url: "playlist/detail",
    params: {
      id
    }
  })
}

/**
 * 获取歌单评论
 * @param id
 * @param limit
 * @param offset
 * @returns {AxiosPromise}
 */
export function getSongsComment(id, limit = 20, offset = 0) {
  return request({
    url: "/comment/playlist",
    params: {
      id,
      limit,
      offset
    }
  })
}

/**
 * 相关歌单推荐
 * @param id
 * @returns {AxiosPromise}
 */
export function getSongsRelated(id) {
  return request({
    url: "/related/playlist",
    params: {
      id
    }
  })
}
