// 调整图片大小
export const formatImgUrl = (url, size) => url + `?param=${size}y${size}`;

// 格式化播放数量
export const formatPlayCounter = counter => {
  if (counter < 10000) {
    return counter
  } else if (counter >= 10000 && counter <= 100000000) {
    return Math.floor(counter / 1000) / 10 + "万"
  } else {
    return Math.floor(counter / 10000000) / 10 + "亿"
  }
}

// 时间格式化
export function formatDate(time, fmt) {
  let date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};

export function formatMonthDay(time) {
  return formatDate(time, "MM月dd日");
}

export function formatMinuteSecond(time) {
  return formatDate(time, "mm:ss");
}

// 拿到完整歌手名称
export function getArtistsName(ar) {
  let artists = "";
  ar.forEach(item => {
    artists += (item.name + "/");
  })
  return artists.substring(0, artists.length - 1);
}

// 歌单类型分类返回
export function getSongsClassify(sub) {
  let allClassify = [[], [], [], [], []];
  sub.forEach(item => {
    allClassify[item.category].push(item.name);
  })
  return allClassify
}

// 解析路径取出query
export function parseSearchParams(searchParamsString) {
  return searchParamsString.split('&').reduce((searchParams, curKV) => {
    const [k, v] = curKV.split('=').map(decodeURIComponent);
    searchParams[k] = v;
    return searchParams;
  }, {});
}

