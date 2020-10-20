import React, { memo } from 'react';

import FriendUnLogin from "components/friend-unlogin";
import {FriendWrapper} from "./style";

export default memo(function Friend() {
  return (
    <FriendWrapper className="wrap-v2">
      <FriendUnLogin/>
    </FriendWrapper>
  )
})