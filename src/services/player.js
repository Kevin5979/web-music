import request from "./request";

/**
 * 检查当前歌曲是否可用
 * @param id
 * @returns {AxiosPromise}
 */
export function checkMusic(id) {
  return request({
    url: "/check/music",
    params: {
      id
    }
  })
}

/**
 * 获取当前歌曲详情
 * @param ids
 * @returns {AxiosPromise}
 */
export function getMusicDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}

/**
 * 批量获取当前歌曲详情
 * @param ids
 * @returns {AxiosPromise}
 */
export function getMusicsDetail(ids) {
  const idsString = ids.join(",");
  return request({
    url: `/song/detail?ids=${idsString}`
  })
}

/**
 * 歌曲评论
 * @param id
 * @param limit
 * @param offset
 * @returns {AxiosPromise}
 */
export function getMusicComment(id, limit = 20, offset = 0) {
  return request({
    url: "/comment/music",
    params: {
      id,
      limit,
      offset
    }
  })
}

/**
 * 获取歌词
 * @param id
 * @returns {AxiosPromise}
 */
export function getMusicLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id
    }
  })
}

/**
 * 获取相似歌曲
 * @param id
 * @returns {AxiosPromise}
 */
export function getSimilarMusic(id) {
  return request({
    url: "/simi/song",
    params: {
      id
    }
  })
}
