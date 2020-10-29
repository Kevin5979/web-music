import React, {memo, useContext} from 'react';
import propTypes from "prop-types";

import {SongsThemeItemWrapper} from "./style";
import {formatImgUrl, formatPlayCounter} from "utils/format-utils";
import {RecommendContext} from "pages/discover/children/recommend";

function SongsThemeItem(props) {
  const {item} = props;

  const history = useContext(RecommendContext);
  const skip = id => history.push(`/discover/songs/detail?id=${id}`);

  return (
    <SongsThemeItemWrapper>
      <div className="top" onClick={e => skip(item.id)}>
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
        <i className="fake-a" onClick={e => skip(item.id)} title={item.name}>{item.name}</i>
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
