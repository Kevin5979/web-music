import request from "./request";

// 获取全部新碟
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