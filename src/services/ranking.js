import request from "./request";

/**
 * 获取全部榜单
 * @returns {AxiosPromise}
 */
export function getAllRankingList() {
  return request({
    url: "/toplist"
  })
}

/**
 * 获取歌单详情
 * @param id
 * @returns {AxiosPromise}
 */
export function getRankingDetail(id = "19723756") {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}

/**
 * 获取歌单评论
 * @param id
 * @param offset
 * @returns {AxiosPromise}
 */
export function getRankingComment(id = "19723756", offset = 0) {
  return request({
    url: "/comment/playlist",
    params: {
      id,
      offset
    }
  })
}


