import React, {memo, useEffect} from 'react';

import RcmThemeNav from "components/rcm-theme-nav";
import SongsThemeItem from "components/songs-theme-item";

import {HotRecommendWrapper} from "./style"
import {recommendList} from "common/local-data"
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getHotRecommendAction} from "../../store/actionCreators";

export default memo(function HotRecommend() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  }, [dispatch])

  const {hotRecommends} = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)

  return (
    <HotRecommendWrapper>
      <RcmThemeNav title="热门推荐" list={recommendList} link="/discover/songs"/>
      <ul className="hot-rcm">
        {
          hotRecommends.map(item => {
            return(
              <li key={item.id} className="hot-item" >
                <SongsThemeItem item={item}/>
              </li>
            )
          })
        }
      </ul>
    </HotRecommendWrapper>
  )
})