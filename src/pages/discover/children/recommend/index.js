import React, {createContext, memo} from 'react';

import TopBanner from "./children/top-banner";
import MainRecommend from "./children/main-recommend";

import {RecommendWrapper} from "./style";

export const RecommendContext = createContext({});

function Recommend(props) {

  return (
    <RecommendWrapper>
      <RecommendContext.Provider value={props.history}>
        <TopBanner/>
        <MainRecommend/>
      </RecommendContext.Provider>
    </RecommendWrapper>
  )
}

export default memo(Recommend);
