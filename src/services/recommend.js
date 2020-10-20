import request from "./request"

// 轮播图数据
export function getTopBanners() {
  return request({
    url: "/banner"
  })
}

// 热门歌单推荐
export function getHotRecommend(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

// 新碟上架
export function getNewAlbums() {
  return request({
    url: "/album/newest"
  })
}

// 推荐排行榜
export function getTopRankList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}
