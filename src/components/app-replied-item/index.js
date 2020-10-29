import React, {memo} from 'react';
import propTypes from "prop-types";
import {AppRepliedItemWrapper} from "./style";
import {formatImgUrl} from "utils/format-utils";

function AppRepliedItem(props) {
  const {replied} = props;
  return (
    <AppRepliedItemWrapper>
      <div className="rep-left">
        <img src={formatImgUrl(replied.user.avatarUrl, 40)} alt={replied.user.nickname} className="avatar"/>
      </div>
      <div className="rep-right">
        <div className="rep-top flex-start">
          <a href="/#" className="nickname">{replied.user.nickname}</a>
          {
            replied.user.vipRights ?
              <img className="vip-rights" src="http://p1.music.126.net/iOnYL-pAvH2LuQfStGOjfQ==/109951163709553273.png"
                   alt="年会员"/> : null
          }
          <span>&nbsp;&nbsp;:&nbsp;&nbsp;</span>
          <p>{replied.content}</p>
          <div className="replied">
          </div>
        </div>
      </div>
    </AppRepliedItemWrapper>
  )
}

AppRepliedItem.propTypes = {
  replied: propTypes.object
}

AppRepliedItem.defaultProps = {
  replied: {}
}

export default memo(AppRepliedItem);
