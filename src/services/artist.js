import request from "./request";

// 获取热门歌手
export function getHotArtist(offset = 0, limit = 50) {
  return request({
    url: "/top/artists",
    params: {
      offset,
      limit
    }
  })
}

// 按条件获取歌手
export function getSomeArtist(type, area, initial = -1, offset = 0,limit=100) {
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
