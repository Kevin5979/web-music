import React, {memo, useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {DjRecommendWrapper} from "./style";
import {getDjRecommendAction} from "../../store/actionCreators";
import {formatImgUrl} from "utils/format-utils";

export default memo(function DjRecommend() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDjRecommendAction())
  }, [dispatch])

  const {djRecommend} = useSelector(state => ({
    djRecommend: state.getIn(["djRadio", "djRecommend"])
  }), shallowEqual)

  return (
    <DjRecommendWrapper>
      <div className="dj_top flex-between">
        <h3>
          <a href="/#">推荐节目</a>
        </h3>
        <p>更多 ></p>
      </div>
      <ul className="dj_rcm_main">
        {
          djRecommend.map(item => {
            return (
              <li key={item.mainSong.id} className="flex-start dj_rcm_item">
                <div className="left">
                  <img src={formatImgUrl(item.coverUrl, 40)} title="播放" alt="播放"/>
                  <i title="播放" className="sprite_icon"></i>
                </div>
                <div className="main">
                  <p className="space-1">{item.name}</p>
                  <p className="artist space-1">{item.radio.name}</p>
                </div>
                <div className="right">{item.radio.category}</div>
              </li>
            )
          })
        }
      </ul>
    </DjRecommendWrapper>
  )
})