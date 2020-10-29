import request from "./request";

/**
 * 获取全部新碟
 * @param area
 * @param offset
 * @param limit
 * @returns {AxiosPromise}
 */
export function getAllAlbum(area = "ALL", offset = 0, limit = 35) {
  return request({
    url: "/top/album",
    params: {
      area,
      offset,
      limit
    }
  })
}

/**
 * 获取专辑详情
 * @param id
 * @returns {AxiosPromise}
 */
export function getAlbumDetail(id) {
  return request({
    url: "album",
    params: {
      id
    }
  })
}

/**
 * 获取专辑评论
 * @param id
 * @param limit
 * @param offset
 * @returns {AxiosPromise}
 */
export function getAlbumComment(id, limit = 20, offset = 0) {
  return request({
    url: "/comment/album",
    params: {
      id,
      limit,
      offset
    }
  })
}
