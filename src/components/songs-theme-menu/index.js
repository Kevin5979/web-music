import React, {memo} from 'react';
import {SongsThemeMenuWrapper} from "./style";
import PropTypes from "prop-types";

function SongsThemeMenu(props) {
  const {subscribedCount, shareCount, commentCount} = props;
  return (
    <SongsThemeMenuWrapper>
      <ul className="operate flex-start">
        <li className="player flex-start">
          <div className="p-left sprite_button flex-start" title="播放">
            <i className="sprite_button"></i>
            <span>播放</span>
          </div>
          <div className="p-right" title="添加到播放列表">
            <i className="sprite_button"></i>
          </div>
        </li>
        <li className="item flex-start">
          <i className="sprite_button"></i>
          <span>{"(" + subscribedCount + ")"}</span>
        </li>
        <li className="share item flex-start">
          <i className="sprite_button"></i>
          <span>{"(" + shareCount + ")"}</span>
        </li>
        <li className="download item flex-start">
          <i className="sprite_button"></i>
          <span>下载</span>
        </li>
        <li className="comment item flex-start">
          <i className="sprite_button"></i>
          <span>{"(" + commentCount + ")"}</span>
        </li>
      </ul>
    </SongsThemeMenuWrapper>
  )
}

SongsThemeMenu.propTypes = {
  subscribedCount: PropTypes.number,
  shareCount: PropTypes.number,
  commentCount: PropTypes.number
};

SongsThemeMenu.defaultProps = {
  subscribedCount: 0,
  shareCount: 0,
  commentCount: 0
};

export default memo(SongsThemeMenu);