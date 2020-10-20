import React, {memo, useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {DjRankingWrapper} from "./style";
import {getDjRankingAction} from "../../store/actionCreators";
import {formatImgUrl} from "utils/format-utils";

export default memo(function DjRanking() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDjRankingAction())
  }, [dispatch])

  const {djRanking} = useSelector(state => ({
    djRanking: state.getIn(["djRadio", "djRanking"])
  }), shallowEqual)

  return (
    <DjRankingWrapper>
      <div className="dj_top flex-between">
        <h3>
          <a href="/#">节目排行榜</a>
        </h3>
        <p>更多 ></p>
      </div>
      <ul className="dj_rank_main">
        {
          djRanking.map(item => {
            return (
              <li key={item.program.mainSong.id} className="flex-start dj_rank_item">
                <div className="left">
                  <img src={formatImgUrl(item.program.coverUrl, 40)} title="播放" alt="播放"/>
                  <i title="播放" className="sprite_icon"></i>
                </div>
                <div className="main">
                  <p className="space-1">{item.program.name}</p>
                  <p className="artist space-1">{item.program.radio.name}</p>
                </div>
                <div className="right">{item.program.radio.category}</div>
              </li>
            )
          })
        }
      </ul>
    </DjRankingWrapper>
  )
})