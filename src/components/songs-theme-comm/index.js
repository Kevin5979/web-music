import React, {memo} from 'react';
import PropTypes from "prop-types";

import {SongsThemeCommWrapper} from "./style"

function SongsThemeComm(props) {
  const {commCount,width} = props;

  return (
    <SongsThemeCommWrapper width={width}>
      <div className="comm-top flex-start">
        <h4>评论</h4>
        <p className="count">共{commCount}条评论</p>
      </div>
      <div className="comment">
        <div className="left">
          <img className="avatar" src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50x50" alt=""/>
        </div>
        <div className="right">
          <textarea className="text-input" placeholder="评论"/>
          <div className="bottom flex-between">
            <div className="r-left flex-start">
              <i className="sprite_icon2 exp"></i>
              <i className="sprite_icon2 at"></i>
            </div>
            <div className="r-right flex-start">
              <span>140</span>
              <button className="sprite_button2">评论</button>
            </div>
          </div>
        </div>
      </div>
    </SongsThemeCommWrapper>
  )
}

SongsThemeComm.propTypes = {
  commCount: PropTypes.number,
  width: PropTypes.string
}

SongsThemeComm.defaultProps = {
  commCount: 0,
  width: "560px"
}

export default memo(SongsThemeComm);