import request from "./request";

// 全部榜单
export function getAllRankingList() {
  return request({
    url: "/toplist"
  })
}

// 歌单详情
export function getRankingDetail(id = "19723756") {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}

// 歌单评论
export function getRankingComment(id = "19723756", offset = 0) {
  return request({
    url: "/comment/playlist",
    params: {
      id,
      offset
    }
  })
}


