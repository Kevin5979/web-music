import React, {memo, useCallback} from 'react';

import LeftRanking from "./children/left-ranking";
import RightRanking from "./children/right-ranking";
import {RankingWrapper} from "./style";
import {getId} from "utils/format-utils";

export default memo(function Ranking(props) {
  const currentId = getId(props) || "19723756";
  const {history} = props;

  const selectRanking = useCallback((id) => {
    if (currentId !== String(id)) {
      history.push(`/discover/ranking?id=${id}`)
    }
  }, [history, currentId])

  return (
    <RankingWrapper className="wrap-v2">
      <LeftRanking id={currentId} selectRanking={selectRanking}/>
      <RightRanking id={currentId}/>
    </RankingWrapper>
  )
})