import request from "./request";

/**
 * 获取热门歌手
 * @param offset
 * @param limit
 * @returns {AxiosPromise}
 */
export function getHotArtist(offset = 0, limit = 50) {
  return request({
    url: "/top/artists",
    params: {
      offset,
      limit
    }
  })
}

/**
 * 按条件获取歌手
 * @param type
 * @param area
 * @param initial
 * @param offset
 * @param limit
 * @returns {AxiosPromise}
 */
export function getSomeArtist(type, area, initial = -1, offset = 0, limit = 100) {
  return request({
    url: "artist/list",
    params: {
      type,
      area,
      initial,
      offset,
      limit
    }
  })
}

/**
 * 获取歌手前50首歌
 * @param id
 * @returns {AxiosPromise}
 */
export function getArtistTopSongs(id) {
  return request({
    url: "artist/top/song",
    params: {
      id
    }
  })
}

/**
 * 获取歌手专辑
 * @param id
 * @param limit
 * @returns {AxiosPromise}
 */
export function getArtistAlbum(id, limit = 16) {
  return request({
    url: "artist/album",
    params: {
      id,
      limit
    }
  })
}

/**
 * 获取歌手MV
 * @param id
 * @param limit
 * @returns {AxiosPromise}
 */
export function getArtistMV(id, limit = 24) {
  return request({
    url: "artist/mv",
    params: {
      id,
      limit
    }
  })
}

/**
 * 获取歌手描述
 * @param id
 * @returns {AxiosPromise}
 */
export function getArtistDesc(id) {
  return request({
    url: "artist/desc",
    params: {
      id
    }
  })
}
