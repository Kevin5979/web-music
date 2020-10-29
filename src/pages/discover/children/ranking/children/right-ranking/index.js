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
import {formatImgUrl, formatMonthDay} from "utils/format-utils";
import SongsThemeList from "components/songs-theme-list";


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

  const {comments = [], total} = rankingComment

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
        <SongsThemeList tracks={tracks}/>
        <div className="song-comm">
          <SongsThemeComm commCount={commentCount}/>
          <div className="new-comm">最新评论({total})</div>
          <ul className="comment">
            {
              comments.length > 0 && comments.map(item => <AppCommentItem key={item.commentId} comment={item}/>)
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