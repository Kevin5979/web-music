import request from "./request";

/**
 * 获取电台分类
 * @returns {AxiosPromise}
 */
export function getDjCateList() {
  return request({
    url: "/dj/catelist"
  })
}

/**
 * 获取推荐电台
 * @returns {AxiosPromise}
 */
export function getDjRecommend() {
  return request({
    url: "/program/recommend"
  })
}

/**
 * 获取电台排行榜
 * @param limit
 * @returns {AxiosPromise}
 */
export function getDjRanking(limit = 10) {
  return request({
    url: "/dj/program/toplist",
    params: {
      limit
    }
  })
}

/**
 * 获取热门电台
 * @param type
 * @returns {AxiosPromise}
 */
export function getDjHotClass(type) {
  return request({
    url: "/dj/recommend/type",
    params: {
      type
    }
  })
}

/**
 * 获取分类电台
 * @param cateId
 * @param offset
 * @param limit
 * @returns {AxiosPromise}
 */
export function getDjRadios(cateId, offset = 0, limit = 20) {
  return request({
    url: "/dj/radio/hot",
    params: {
      cateId,
      offset,
      limit
    }
  })
}
