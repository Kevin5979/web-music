import React, {memo, useContext} from 'react';
import propTypes from "prop-types";

import {RecommendContext} from "pages/discover/children/recommend";
import {RcmThemeRankWrapper} from "./style";
import {toPlay, dispatchCurrentPanel} from "utils/player";
import {useDispatch} from "react-redux";
import {checkMusic} from "services/player";
import {message} from "antd";

function RcmThemeRank(props) {
  const {list, detail} = props;
  const history = useContext(RecommendContext);
  const skip = link => history.push(link);

  const dispatch = useDispatch();
  const playCurrentMusic = (id) => {
    checkMusic(id).then(res => {
      if (res.success && res.message === "ok") {
        toPlay(id, dispatch, history)
      }
    }).catch(err => {
      console.log(err)
      message.warning("暂时不能播放哦~~")
    })
  }

  const toMusicPanel = id => {
    dispatchCurrentPanel(id, dispatch);
    history.push(`/discover/player?id=${id}`);
  }

  return (
    <RcmThemeRankWrapper>
      <div className="rcm-rank-top">
        <div className="img fake-a" onClick={e => skip(`/discover/ranking?id=${detail.id}`)}>
          <i className="sprite_cover fake-a" title={detail.title}></i>
          <img src={detail.img} alt={detail.title}/>
        </div>
        <div className="title">
          <i className="fake-a" onClick={e => skip(`/discover/ranking?id=${detail.id}`)}>
            {detail.title}
          </i>
          <div className="btm">
            <i className="play sprite_02" title="播放"></i>
            <i className="collect sprite_02" title="收藏"></i>
          </div>
        </div>
      </div>
      <ul className="rcm-rank-list">
        {
          list.slice(0, 10).map((item, index) => {
            return (
              <li className="song-item flex-start" key={item.id}>
                <span className={"order " + (index < 3 ? "active" : "")}>{index + 1}</span>
                <div className="content">
                  <i className="space-1 fake-a" onClick={e => toMusicPanel(item.id)} title={item.name}>{item.name}</i>
                  <div className="icons">
                    <i className="play sprite_02" title="播放" onClick={e => playCurrentMusic(item.id)}></i>
                    <i className="add sprite_icon2" title="添加到播放列表"></i>
                    <i className="collect sprite_02" title="收藏"></i>
                  </div>
                </div>
              </li>
            )
          })
        }
        <p className="more">
          <i
            className="fake-a"
            onClick={e => skip(`/discover/ranking?id=${detail.id}`)}>查看更多 &gt;</i>
        </p>
      </ul>
    </RcmThemeRankWrapper>
  )
}

RcmThemeRank.propTypes = {
  list: propTypes.array,
  detail: propTypes.object
}

RcmThemeRank.defaultProps = {
  list: [],
  detail: {}
}

export default memo(RcmThemeRank);
