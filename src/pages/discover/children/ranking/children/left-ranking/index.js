import React, {memo, useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {LeftRankingWrapper} from "./style";
import {getAllRankingAction} from "../../store/actionCreators";
import {formatImgUrl} from "utils/format-utils"

export default memo(function LeftRanking(props) {
  const {id, selectRanking} = props
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRankingAction())
  }, [dispatch])

  const {allRanking} = useSelector(state => ({
    allRanking: state.getIn(["ranking", "allRanking"])
  }), shallowEqual)

  const itemClick = id => {
    selectRanking(id)
  }

  return (
    <LeftRankingWrapper>
      <div className="main">
        <h3 className="title">云音乐特色榜</h3>
        <ul>
          {
            allRanking.length > 0 && allRanking.slice(0, 4).map((item, index) => {
              return (
                <li
                  onClick={e => itemClick(item.id)}
                  className={"item flex-start" + ((id === String(item.id) || (id === "" && index === 0)) ? " active" : "")}
                  key={item.id}>
                  <img className="img" src={formatImgUrl(item.coverImgUrl, 40)} alt={item.name}/>
                  <div className="right">
                    <p className="name">{item.name}</p>
                    <p className="update">{item.updateFrequency}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <h3 className="title world">全球媒体榜</h3>
        <ul>
          {
            allRanking.length > 0 && allRanking.slice(4).map((item, index) => {
              return (
                <li
                  onClick={e => itemClick(item.id)}
                  className={"item flex-start" + (id === String(item.id) ? " active" : "")}
                  key={item.id}>
                  <img className="img" src={formatImgUrl(item.coverImgUrl, 40)} alt={item.name}/>
                  <div className="right">
                    <p className="name">{item.name}</p>
                    <p className="update">{item.updateFrequency}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>

    </LeftRankingWrapper>
  )
})