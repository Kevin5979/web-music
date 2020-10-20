import React, {memo} from 'react';
import propTypes from "prop-types";

import AppRepliedItem from "../app-replied-item";
import {AppCommentItemWrapper} from "./style";
import {formatImgUrl, formatDate} from "utils/format-utils";

function AppCommentItem(props) {
  const {comment = {}} = props;
  const {content: text, user, time, beReplied, likedCount} = comment;
  return (
    <AppCommentItemWrapper>
      <div className="comm-left">
        <a href="/#">
          <img src={formatImgUrl(user.avatarUrl, 50)} alt={user.nickname} className="avatar"/>
        </a>
      </div>
      <div className="comm-right">
        <div className="comm-top flex-start">
          <a href="/#" className="nickname">{user.nickname}</a>
          {
            user.vipRights ?
              <img className="vip-rights" src="http://p1.music.126.net/iOnYL-pAvH2LuQfStGOjfQ==/109951163709553273.png"
                   alt="年会员"/> : null
          }

          <span>&nbsp;&nbsp;:&nbsp;&nbsp;</span>
          <p>{text}</p>
        </div>
        <div className="replied">
          {
            beReplied.length > 0 && beReplied.map(item => {
              return <AppRepliedItem replied={item} key={item.beRepliedCommentId}/>
            })
          }
        </div>
        <div className="comm-bottom flex-between">
          <span className="time">{formatDate(time, "yyyy-MM-dd hh:mm:ss")}</span>
          <div className="flex-start">
            <i className="sprite_icon3 dianzan"></i>
            {
              likedCount > 0 ? <span>{"(" + likedCount + ")"}</span> : null
            }
            <span className="sp">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <a href="/#">回复</a>
          </div>
        </div>
      </div>
    </AppCommentItemWrapper>
  )
}

AppCommentItem.propTypes = {
  comment: propTypes.object
}

AppCommentItem.defaultProps = {
  comment: {}
}

export default memo(AppCommentItem)
