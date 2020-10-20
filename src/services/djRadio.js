import request from "./request";

// 获取电台分类
export function getDjCateList() {
  return request({
    url: "/dj/catelist"
  })
}

// 获取推荐电台
export function getDjRecommend() {
  return request({
    url: "/program/recommend"
  })
}

// 获取电台排行榜
export function getDjRanking(limit = 10) {
  return request({
    url: "/dj/program/toplist",
    params: {
      limit
    }
  })
}

// 获取热门电台
export function getDjHotClass(type) {
  return request({
    url: "/dj/recommend/type",
    params: {
      type
    }
  })
}

// 获取分类电台
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
