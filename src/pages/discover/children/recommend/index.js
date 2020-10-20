import React, {memo} from 'react';

import TopBanner from "./children/top-banner";
import MainRecommend from "./children/main-recommend";

import {RecommendWrapper} from "./style";

function Recommend(props) {
  return (
    <RecommendWrapper>
      <TopBanner />
      <MainRecommend/>
    </RecommendWrapper>
  )
}

export default memo(Recommend);
