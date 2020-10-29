import React from "react";

/**
 * 调整图片大小
 * @param url 路径
 * @param sizeW width
 * @param sizeH height
 * @returns {string} url
 */
export const formatImgUrl = (url, sizeW, sizeH) => {
  if (sizeH) {
    return url + `?param=${sizeW}y${sizeH}`;
  }
  return url + `?param=${sizeW}y${sizeW}`;
};

/**
 * 格式化播放数量
 * @param counter player counter
 * @returns {string|*}
 */
export const formatPlayCounter = counter => {
  if (counter < 10000) {
    return counter
  } else if (counter >= 10000 && counter <= 100000000) {
    return Math.floor(counter / 1000) / 10 + "万"
  } else {
    return Math.floor(counter / 10000000) / 10 + "亿"
  }
};

/**
 * 时间格式化
 * @param time stampTime
 * @param fmt formatString
 * @returns {*}
 */
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
;

export function formatMonthDay(time) {
  return formatDate(time, "MM月dd日");
};

export function formatMinuteSecond(time) {
  return formatDate(time, "mm:ss");
};

/**
 * 拿到完整歌手名称
 * @param ar artist array
 * @returns {string}
 */
export function getArtistsName(ar) {
  let artists = "";
  ar.forEach(item => {
    artists += (item.name + "/");
  })
  return artists.substring(0, artists.length - 1);
};


/**
 * 歌单类型分类返回
 * @param sub
 * @returns {[][]}
 */
export function getSongsClassify(sub) {
  let allClassify = [[], [], [], [], []];
  sub.forEach(item => {
    allClassify[item.category].push(item.name);
  })
  return allClassify
};

/**
 * 解析路径取出query
 * @param searchParamsString
 * @returns {{}}
 */
export function parseSearchParams(searchParamsString) {
  return searchParamsString.split('&').reduce((searchParams, curKV) => {
    const [k, v] = curKV.split('=').map(decodeURIComponent);
    searchParams[k] = v;
    return searchParams;
  }, {});
};

/**
 * 格式化描述信息
 * @param desc
 * @returns {*[]}
 */
export function getDescription(desc) {
  if (desc && desc.length > 0) {
    return (
      desc.split("\n").map((item, index) => {
        return (
          <span key={index}>{item}<br/></span>
        )
      })
    )
  }
}

/**
 * 获取路径的id
 * @param props
 * @returns {*}
 */
export function getId(props) {
  return props.location.search.replace("?id=", "");
}

/**
 * 获取歌曲播放链接
 * @param id song id
 * @returns {string}
 */
export function getMusicUrl(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

/**
 * 格式化歌词方法
 * @param lrc lyric
 */
export const parseLyric = (lrc) => {
  let lyrics = lrc.split('\n');
  // [00:00.000] 作曲 : 林俊杰
  // 1.定义正则表达式提取[00:00.000]
  let reg1 = /\[\d*:\d*\.\d*\]/g;
  // 2.定义正则表达式提取 [00
  let reg2 = /\[\d*/i;
  // 3.定义正则表达式提取 :00
  let reg3 = /:\d*/i;
  // 4.定义对象保存处理好的歌词
  let lyricObj = {};
  lyrics.forEach(function (lyric) {
    // 1.提取时间
    let timeStr = lyric.match(reg1);
    if (!timeStr) {
      return;
    }
    timeStr = timeStr[0];
    // 2.提取分钟
    let minStr = timeStr.match(reg2)[0].substr(1);
    // 3.提取秒钟
    let secondStr = timeStr.match(reg3)[0].substr(1);
    // 4.合并时间, 将分钟和秒钟都合并为秒钟
    let time = parseInt(minStr) * 60 + parseInt(secondStr);
    // 5.处理歌词
    let text = lyric.replace(reg1, '').trim();
    if (text !== "") {
      // 6.保存数据
      lyricObj[time] = text;
    }
  })
  return lyricObj;
}

