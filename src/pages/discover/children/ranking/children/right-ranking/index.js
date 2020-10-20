import React, {memo, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import SongsThemeMenu from "components/songs-theme-menu";
import SongsTableHead from "components/songs-table-head";
import SongsThemeComm from "components/songs-theme-comm";
import AppCommentItem from "components/app-comment-item";
import AppPagination from "components/app-pagination";

import {
  RightRankingWrapper,
  RankingTopWrapper,
  RankingMainWrapper
} from "./style";
import {getRankingDetailAction, getRankingCommentAction} from "../../store/actionCreators";
import {formatImgUrl, formatMonthDay, formatMinuteSecond, getArtistsName} from "utils/format-utils";


export default memo(function RightRanking(props) {
  const {id} = props;
  const [currCommentIndex, setCurrCommentIndex] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRankingDetailAction(id))
    dispatch(getRankingCommentAction(id))
  }, [dispatch, id])

  const {rankingDetail, rankingComment} = useSelector(state => ({
    rankingDetail: state.getIn(["ranking", "rankingDetail"]),
    rankingComment: state.getIn(["ranking", "rankingComment"])
  }), shallowEqual)

  const {
    coverImgUrl,
    name,
    trackUpdateTime,
    description,
    subscribedCount,
    shareCount,
    commentCount,
    trackCount,
    playCount,
    tracks
  } = rankingDetail;

  const {comments = [], total, more} = rankingComment

  const changeCommentPage = useCallback((index) => {
    setCurrCommentIndex(index);
    dispatch(getRankingCommentAction(id, (index - 1) * 20))
  }, [id, dispatch])

  return (
    <RightRankingWrapper>
      <RankingTopWrapper>
        <div className="left">
          <div className="img">
            <img src={formatImgUrl(coverImgUrl, 150)} alt={name}/>
            <i className="cover sprite_cover"></i>
          </div>
        </div>
        <div className="right">
          <h3>{name}</h3>
          <div className="update flex-start">
            <i className="sprite_icon2"></i>
            <span>最近更新: {formatMonthDay(trackUpdateTime)}</span>
          </div>
          <p className="detail space-2" title={description}>{description}</p>
          <SongsThemeMenu
            subscribedCount={subscribedCount}
            shareCount={shareCount}
            commentCount={commentCount}
          />
        </div>
      </RankingTopWrapper>
      <RankingMainWrapper>
        <SongsTableHead songCount={trackCount} playCount={playCount}/>
        <div className="song-list">
          <div className="sec-head">
            <div className="sprite_table"></div>
            <div className="sprite_table">标题</div>
            <div className="sprite_table">时长</div>
            <div className="sprite_table">歌手</div>
          </div>
          <ul className="list">
            {
              tracks && tracks.length > 0 && tracks.map((item, index) => {
                return (
                  <li key={item.id} className="item">
                    <div className="order">{index + 1}</div>
                    <div className="al-name flex-start space-1">
                      <i className="sprite_table play"></i>
                      <a href="/#" className="space-1">{item.al.name}</a>
                      {
                        item.alia.length > 0 ?
                          <span className="alia space-1" title={item.alia[0]}>{" - " + item.alia[0]}</span> : null
                      }
                      {
                        item.mv > 0 ? <i className="sprite_table mv" title="播放mv"></i> : null
                      }
                    </div>
                    <div className="dt">
                      <p>{formatMinuteSecond(item.dt)}</p>
                      <div className="icons">
                        <i className="sprite_icon2" title="添加到播放列表"></i>
                        <i className="sprite_table" title="收藏"></i>
                        <i className="sprite_table" title="分享"></i>
                        <i className="sprite_table" title="下载"></i>
                      </div>
                    </div>
                    <div className="songs space-1" title={getArtistsName(item.ar)}>
                      {
                        item.ar && item.ar.length > 0 && item.ar.map((value, indey) => {
                          if (indey === item.ar.length - 1) {
                            return <a href="/#" key={value.id}>{value.name}</a>
                          } else {
                            return (
                              <a href="/#" key={value.id}>
                                {value.name}
                                <i>/</i>
                              </a>
                            )
                          }
                        })
                      }
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="song-comm">
          <SongsThemeComm commCount={commentCount}/>
          <div className="new-comm">最新评论({total})</div>
          <ul className="comment">
            {
              comments.length > 0 && more && comments.map(item => <AppCommentItem key={item.commentId} comment={item}/>)
            }
          </ul>
        </div>
      </RankingMainWrapper>
      <div className="pages">
        <AppPagination
          total={total}
          defaultPageSize={20}
          defaultCurrent={1}
          pageSizeOptions={[20]}
          current={currCommentIndex}
          onPageChange={changeCommentPage}
        />
      </div>
    </RightRankingWrapper>
  )
})