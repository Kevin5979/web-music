import React, {memo, useContext} from 'react';

import {RcmSettledArtistWrapper} from "./style";
import {SettledArtist} from "common/local-data";
import {RecommendContext} from "pages/discover/children/recommend";

export default memo(function RcmSettledArtist() {

  const history = useContext(RecommendContext);

  const skip = link => history.push(link);

  return (
    <RcmSettledArtistWrapper>
      <div className="header flex-between">
        <span>入驻歌手</span>
        <i className="fake-a" onClick={e => skip("/discover/artist")}>查看全部&gt;</i>
      </div>
      <ul className="artists">
        {
          SettledArtist.map(item => {
            return (
              <li key={item.id} className="item flex-start"
                  onClick={e => skip(`/discover/artist/detail?id=${item.id}`)}>
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
        <a
          href="https://music.163.com/nmusician/web/index#/"
          target="_blank"
          rel="noopener noreferrer"
          className="sprite_button">
          <i className="sprite_button">申请成为网易音乐人</i>
        </a>
      </div>
    </RcmSettledArtistWrapper>
  )
})