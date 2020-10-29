import React, {memo} from 'react';
import propTypes from "prop-types";

import {AlbumThemeItemWrapper} from "./style"
import {formatImgUrl, formatDate} from "utils/format-utils";

function AlbumThemeItem(props) {
  const {item, styles, isTime, skip} = props;

  return (
    <AlbumThemeItemWrapper styles={styles}>
      <i className="album-link fake-a" onClick={e => skip(`/discover/album/detail?id=${item.id}`)}>
        <img src={formatImgUrl(item.picUrl, styles.imgSize)} alt={item.name}/>
        <i className="album-bg sprite_cover" title={item.name}></i>
        <i className="album-icon sprite_icon" title="播放"></i>
      </i>
      <div className="bottom">
        <i className="space-1 name fake-a" onClick={e => skip(`/discover/album/detail?id=${item.id}`)}>{item.name}</i>
        {
          isTime ?
            <span className="space-1 timer">{formatDate(item.publishTime, "yyyy.MM.dd")}</span>
            :
            <i
              className="space-1 artist fake-a"
              onClick={e => skip(`/discover/artist/detail?id=${item.artist.id}`)}>{item.artist.name}</i>
        }
      </div>
    </AlbumThemeItemWrapper>
  )
}

AlbumThemeItem.propTypes = {
  item: propTypes.object,
  styles: propTypes.object,
  isTime: propTypes.bool,
  skip: propTypes.func
}

AlbumThemeItem.defaultProps = {
  item: {},
  styles: {},
  isTime: false
}

export default memo(AlbumThemeItem);
