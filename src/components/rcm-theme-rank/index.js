import React, {memo} from 'react';

import {RcmThemeRankWrapper} from "./style"

export default memo(function RcmThemeRank(props) {
  const {list, detail} = props
  return (
    <RcmThemeRankWrapper>
      <div className="rcm-rank-top">
        <div className="img">
          <a className="sprite_cover" href={"/discover/ranking?id=" + detail.id} title={detail.title}> </a>
          <img src={detail.img} alt={detail.title}/>
        </div>
        <div className="title">
          <a href={"/discover/ranking?id=" + detail.id}>
            {detail.title}
          </a>
          <div className="btm">
            <i className="play sprite_02" title="播放"></i>
            <i className="collect sprite_02" title="收藏"></i>
          </div>
        </div>
      </div>
      <ul className="rcm-rank-list">
        {
          list.slice(0, 10).map((item, index) => {
            return (
              <li className="song-item flex-start" key={item.id}>
                <span className={"order " + (index < 3 ? "active" : "")}>{index + 1}</span>
                <div className="content">
                  <a href="todo" className="space-1" title={item.name}>{item.name}</a>
                  <div className="icons">
                    <i className="play sprite_02" title="播放"></i>
                    <i className="add sprite_icon2" title="添加到播放列表"></i>
                    <i className="collect sprite_02" title="收藏"></i>
                  </div>
                </div>
              </li>
            )
          })
        }
        <p className="more">
          <a href="/todo">查看更多 &gt;</a>
        </p>
      </ul>
    </RcmThemeRankWrapper>
  )
})