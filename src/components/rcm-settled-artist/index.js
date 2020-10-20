import React, { memo } from 'react';
import {RcmSettledArtistWrapper} from "./style";

import {SettledArtist} from "common/local-data";

export default memo(function RcmSettledArtist() {
  return (
    <RcmSettledArtistWrapper>
      <div className="header flex-between">
        <span>入驻歌手</span>
        <a href="/#">查看全部&gt;</a>
      </div>
      <ul className="artists">
        {
          SettledArtist.map(item=>{
            return (
              <li key={item.id} className="item flex-start">
                <img className="img" src={item.img} alt={item.name}/>
                <div className="desc">
                  <p className="name">{item.name}</p>
                  <p className="space-1" title={item.desc}>{item.desc}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
      <div className="add-artist">
        <a href="/#" className="sprite_button">
          <i className="sprite_button">申请成为网易音乐人</i>
        </a>
      </div>
    </RcmSettledArtistWrapper>
  )
})