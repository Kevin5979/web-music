import React, {memo} from 'react';
import propTypes from "prop-types";

import {SongsThemeItem2Wrapper} from "./style"
import {formatImgUrl, formatPlayCounter} from "utils/format-utils"


function SongsThemeItem2(props) {
  const {item} = props
  const toList = () => {
    console.log("toList")
  }
  return (
    <SongsThemeItem2Wrapper>
      <div className="top" onClick={e => toList(item.id)}>
        <img className="img" src={formatImgUrl(item.coverImgUrl, 140)} alt={item.name}/>
        <div className="cover sprite_cover" title={item.name}></div>
        <div className="detail sprite_cover flex-between">
          <div>
            <i className="left-icon sprite_icon"></i>
            <span>{formatPlayCounter(item.playCount)}</span>
          </div>
          <i className="right-icon sprite_icon" title="播放"></i>
        </div>
      </div>
      <div className="bottom  space-1">
        <a href="/#" className="b-name" title={item.name}>{item.name}</a>
        <div className="space-1">
          <span className="by">by</span>
          <a href="/#" className="b-nickname">{item.creator.nickname}</a>
        </div>
      </div>
    </SongsThemeItem2Wrapper>
  )
}

SongsThemeItem2.propTypes = {
  item: propTypes.object
}

SongsThemeItem2.defaultProps = {
  item: {}
}

export default memo(SongsThemeItem2);
