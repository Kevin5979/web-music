import React, {memo, useEffect, useState} from 'react';
import propTypes from "prop-types";
import {useDispatch} from "react-redux";

import {SongsThemeListWrapper} from "./style";
import {formatMinuteSecond, getArtistsName} from "utils/format-utils";
import EventBus from "utils/eventBus";
import {checkMusicAndPlay} from "utils/player";



function SongsThemeList(props) {
  const {tracks} = props;
  const dispatch = useDispatch()
  const [history, setHistory] = useState({});

  useEffect(() => {
    EventBus.addListener("linkHistory", linkHistory)
    return () => {
      EventBus.removeListener("linkHistory", linkHistory)
    }
  }, [])

  const linkHistory = (linkHistory) => {
    setHistory(linkHistory);
  }

  const toPlayer = id => {
    checkMusicAndPlay(id, dispatch, history);
  }

  return (
    <SongsThemeListWrapper>
      <div className="sec-head">
        <div className="sprite_table"></div>
        <div className="sprite_table">标题</div>
        <div className="sprite_table">时长</div>
        <div className="sprite_table">歌手</div>
      </div>
      <ul className="list">
        {
          tracks && tracks.length > 0 && tracks.map((item, index) => {
            return (
              <li key={item.id} className="item">
                <div className="order">{index + 1}</div>
                <div className="al-name flex-start space-1">
                  <i className="sprite_table play" onClick={e => toPlayer(item.id)}></i>
                  <a href="/#" className="space-1">{item.name}</a>
                  {
                    item.alia.length > 0 ?
                      <span className="alia space-1" title={item.alia[0]}>{" - " + item.alia[0]}</span> : null
                  }
                  {
                    item.mv > 0 ? <i className="sprite_table mv" title="播放mv"></i> : null
                  }
                </div>
                <div className="dt">
                  <p>{formatMinuteSecond(item.dt)}</p>
                  <div className="icons">
                    <i className="sprite_icon2" title="添加到播放列表"></i>
                    <i className="sprite_table" title="收藏"></i>
                    <i className="sprite_table" title="分享"></i>
                    <i className="sprite_table" title="下载"></i>
                  </div>
                </div>
                <div className="songs space-1" title={getArtistsName(item.ar)}>
                  {
                    item.ar && item.ar.length > 0 && item.ar.map((value, indey) => {
                      if (indey === item.ar.length - 1) {
                        return <a href={`/discover/artist/detail?id=${value.id}`} key={value.name}>{value.name}</a>
                      } else {
                        return (
                          <span key={value.name}>
                            <a href={`/discover/artist/detail?id=${value.id}`}>
                              {value.name}
                            </a>
                            <i> / </i>
                          </span>
                        )
                      }
                    })
                  }
                </div>
              </li>
            )
          })
        }
      </ul>
    </SongsThemeListWrapper>
  )
}

SongsThemeList.propTypes = {
  tracks: propTypes.array
}

SongsThemeList.defaultProps = {
  tracks: []
}

export default memo(SongsThemeList);
