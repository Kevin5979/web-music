import React, { memo } from 'react';
import {MineUnLoginWrapper} from "./style";

export default memo(function MineUnLogin() {
  return (
    <MineUnLoginWrapper>
      <h2>登录网易云</h2>
      <a href="/#">登录</a>
    </MineUnLoginWrapper>
  )
})