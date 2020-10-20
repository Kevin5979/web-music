import React, {memo} from 'react';
import {AlbumThemeItemWrapper} from "./style"

import {formatImgUrl} from "utils/format-utils";

export default memo(function AlbumThemeItem(props) {
  const {item, styles} = props;
  return (
    <AlbumThemeItemWrapper styles={styles}>
      <a href="/todo" className="album-link">
        <img src={formatImgUrl(item.picUrl, styles.imgSize)} alt={item.name}/>
        <i className="album-bg sprite_cover" title={item.name} ></i>
        <i className="album-icon sprite_icon" title="播放"></i>
      </a>
      <div className="bottom">
        <a href="/todo" className="space-1 name">{item.name}</a>
        <a href="/todo" className="space-1 artist">{item.artist.name}</a>
      </div>
    </AlbumThemeItemWrapper>
  )
})