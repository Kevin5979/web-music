import React, {memo} from 'react';
import PropTypes from "prop-types";
import {SongsTableHeadWrapper} from "./style";

function SongsTableHead(props) {
  const {title, songCount, playCount, isLink, link} = props;

  return (
    <SongsTableHeadWrapper className="flex-between">
      <h4>{title}</h4>
      <div className="flex-between">
        <p className="counter">{songCount}首歌</p>
        {
          isLink ?
            (
              <div className="to-link flex-start">
                <span>
                  <i className="sprite_icon2 icon"></i>
                  <a href={link}>生成外链播放器</a>
                </span>
                {
                  playCount > 0 && <span>播放：<i>{playCount}</i>次</span>
                }
              </div>
            )
            :
            <span>播放：<i>{playCount}</i>次</span>
        }
      </div>
    </SongsTableHeadWrapper>
  )
}

SongsTableHead.propTypes = {
  title: PropTypes.string,
  songCount: PropTypes.number,
  playCount: PropTypes.number,
  isLink: PropTypes.bool,
  link: PropTypes.string
}

SongsTableHead.defaultProps = {
  title: "歌曲列表",
  songCount: 0,
  playCount: 0,
  isLink: false,
  link: "/#"
}

export default memo(SongsTableHead);
