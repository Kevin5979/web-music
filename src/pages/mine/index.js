import React, { memo } from 'react';

import MineUnLogin from "components/mine-unlogin";
import {MineWrapper} from "./style";

export default memo(function Mine() {
  return (
    <MineWrapper className="wrap-v2">
      <MineUnLogin />
    </MineWrapper>
  )
})