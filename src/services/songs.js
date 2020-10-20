import request from "./request";

// 获取歌单分类标签
export function getCatList() {
  return request({
    url: "/playlist/catlist"
  })
}

// 获取默认歌单
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
