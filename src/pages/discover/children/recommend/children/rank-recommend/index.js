import React, {memo, useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import RcmThemeNav from "components/rcm-theme-nav";
import RcmThemeRank from "components/rcm-theme-rank";

import {RankRecommendWrapper} from "./style";
import {getTopRankAction} from "../../store/actionCreators";
import {topRankingIds, topRankDetail} from "common/local-data";


export default memo(function RankRecommend() {

  const dispatch = useDispatch();

  useEffect(() => {
    topRankingIds.forEach((item) => {
      dispatch(getTopRankAction(item))
    })
  }, [dispatch])

  const {topSurgeList, topNewList, topOriginalList} = useSelector(state => ({
    topSurgeList: state.getIn(["recommend", "topSurgeList"]),
    topNewList: state.getIn(["recommend", "topNewList"]),
    topOriginalList: state.getIn(["recommend", "topOriginalList"])
  }), shallowEqual)

  return (
    <RankRecommendWrapper>
      <RcmThemeNav title="榜单" link="/discover/ranking?id=19723756"/>
      <div className="top">
        <RcmThemeRank list={topSurgeList} detail={topRankDetail[0]}/>
        <RcmThemeRank list={topNewList} detail={topRankDetail[1]}/>
        <RcmThemeRank list={topOriginalList} detail={topRankDetail[2]}/>
      </div>
    </RankRecommendWrapper>
  )
})