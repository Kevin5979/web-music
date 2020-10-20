import React, {memo} from 'react';

import LeftRanking from "./children/left-ranking";
import RightRanking from "./children/right-ranking";

import {RankingWrapper} from "./style";

export default memo(function Ranking(props) {
  const currentId = props.location.search.replace("?id=", "") || "19723756";
  const selectRanking = (id) => {
    if (currentId !== String(id)) {
      window.location.replace(`/discover/ranking?id=${id}`);
    }
  }

  return (
    <RankingWrapper className="wrap-v2">
      <LeftRanking id={currentId} selectRanking={selectRanking}/>
      <RightRanking id={currentId}/>
    </RankingWrapper>
  )
})