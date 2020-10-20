import React, {memo} from 'react';
import HotRecommend from "../hot-recommend";
import NewRecommend from "../new-recommend";
import RankRecommend from "../rank-recommend";

export default memo(function LeftRecommend() {

  return (
    <div>
      <HotRecommend/>
      <NewRecommend/>
      <RankRecommend/>
    </div>
  )
})