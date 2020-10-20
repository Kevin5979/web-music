import React, { memo } from 'react';
import {FriendUnLoginWrapper} from "./style";

export default memo(function FriendUnLogin() {
  return (
    <FriendUnLoginWrapper>
      <div className="f-cover">
        <h2>登录网易云</h2>
        <p>
          你可以关注明星和好友品味他们的私房歌单
          <br/>
          通过他们的动态发现更多精彩音乐
        </p>
        <a href="/#">登录</a>
      </div>
    </FriendUnLoginWrapper>
  )
})