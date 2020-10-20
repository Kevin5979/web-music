import React, { memo } from 'react';
import RcmLoginCpn from "components/rcm-login-cpn";
import RcmSettledArtist from "components/rcm-settled-artist";
import RcmHotAnchor from "components/rcm-hot-anchor";
import {RightRecommendWrapper} from "./style";

export default memo(function RightRecommend() {
  return (
    <RightRecommendWrapper>
      <RcmLoginCpn />
      <RcmSettledArtist />
      <RcmHotAnchor />
    </RightRecommendWrapper>
  )
})