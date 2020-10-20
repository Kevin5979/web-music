import React, {memo} from 'react';
import propTypes from "prop-types";

import {SongsThemeItemWrapper} from "./style"
import {formatImgUrl, formatPlayCounter} from "utils/format-utils"

function SongsThemeItem(props) {
  const {item} = props
  const toList = () => {
    console.log("toList")
  }
  return (
    <SongsThemeItemWrapper>
      <div className="top" onClick={e => toList(item.id)}>
        <img className="img" src={formatImgUrl(item.picUrl, 140)} alt={item.name}/>
        <div className="cover sprite_cover" title={item.name}></div>
        <div className="detail sprite_cover flex-between">
          <div>
            <i className="left-icon sprite_icon"></i>
            <span>{formatPlayCounter(item.playCount)}</span>
          </div>
          <i className="right-icon sprite_icon" title="播放"></i>
        </div>
      </div>
      <div className="bottom  space-2">
        <a href="/#" title={item.name}>{item.name}</a>
      </div>
    </SongsThemeItemWrapper>
  )
}

SongsThemeItem.propTypes = {
  item: propTypes.object
}

SongsThemeItem.defaultProps = {
  item: {}
}

export default memo(SongsThemeItem);

