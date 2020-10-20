import React, {memo} from 'react';
import LeftRecommend from "../left-recommend";
import RightRecommend from "../right-recommend";

import {
  RecommendWrapper,
  RecommendWrapperLeft,
  RecommendWrapperRight
} from "./style"

export default memo(function MainRecommend() {
  return (
    <RecommendWrapper className="wrap-v2">
      <RecommendWrapperLeft>
        <LeftRecommend/>
      </RecommendWrapperLeft>
      <RecommendWrapperRight>
        <RightRecommend/>
      </RecommendWrapperRight>
    </RecommendWrapper>
  )
})