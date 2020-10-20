import React, {memo} from 'react';
import PropTypes from "prop-types";
import {SongsTableHeadWrapper} from "./style";

function SongsTableHead(props) {
  const {title, songCount, playCount} = props
  return (
    <SongsTableHeadWrapper className="flex-between">
      <h4>{title}</h4>
      <div className="flex-between">
        <p className="counter">{songCount}首歌</p>
        <span>播放：<i>{playCount}</i>次</span>
      </div>
    </SongsTableHeadWrapper>
  )
}

SongsTableHead.propTypes = {
  title: PropTypes.string,
  songCount: PropTypes.number,
  playCount: PropTypes.number
}

SongsTableHead.defaultProps = {
  title: "歌曲列表",
  songCount: 0,
  playCount: 0
}

export default memo(SongsTableHead);
