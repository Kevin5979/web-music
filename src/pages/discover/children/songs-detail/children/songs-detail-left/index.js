import React, {memo, useCallback, useEffect, useState} from 'react';
import propTypes from "prop-types";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {SongsDetailLeftWrapper} from "./style";
import {formatImgUrl, formatDate, getDescription} from "utils/format-utils";

import SongsThemeMenu from "components/songs-theme-menu";
import SongsTableHead from "components/songs-table-head";
import SongsThemeList from "components/songs-theme-list";
import SongsThemeComm from "components/songs-theme-comm";
import AppCommentItem from "components/app-comment-item";
import AppPagination from "components/app-pagination";

import {getSongsCommentAction, getSongsDetailAction} from "../../store/actionCreators";

function SongsDetailLeft(props) {
  const [currIndex, setCurrIndex] = useState(1);

  const {songsDetail = {}, id} = props;
  const {creator = {}, tags = [], tracks = [], commentCount} = songsDetail;
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSongsCommentAction(id))
    dispatch(getSongsDetailAction(id))
  }, [dispatch, id])

  const {songsComment = {}} = useSelector(state => ({
    songsComment: state.getIn(["songsDetail", "songsComment"])
  }), shallowEqual)

  const {hotComments = [], comments = [], total} = songsComment;

  const changeSongsPage = useCallback((index) => {
    setCurrIndex(index)
    dispatch(getSongsCommentAction(id, 20, (index - 1) * 20))
  }, [dispatch, id]);

  return (
    <SongsDetailLeftWrapper>
      <div className="sd-top">
        <div className="left">
          <img src={formatImgUrl(songsDetail.coverImgUrl, 200)} alt={songsDetail.name}/>
        </div>
        <div className="right">
          <div className="sd-top-1 flex-start">
            <i className="sprite_icon2 icon"></i>
            <h2 className="title">{songsDetail.name}</h2>
          </div>
          <div className="sd-top-2 flex-start">
            <img src={formatImgUrl(creator.avatarUrl, 35)} alt={creator.nickname}/>
            <a href="/#">{creator.nickname}</a>
            <i className="sprite_icon2 icon"></i>
            <p className="c-time">{formatDate(songsDetail.createTime, "yyyy-MM-dd")} 创建</p>
          </div>
          <div className="sd-top-3">
            <SongsThemeMenu
              commentCount={songsDetail.commentCount}
              shareCount={songsDetail.shareCount}
              subscribedCount={songsDetail.subscribedCount}
            />
          </div>
          <div className="sd-top-4 flex-start">
            <span>标签: </span>
            <ul className="flex-start">
              {
                tags.map(item => {
                  return (
                    <li key={item} className="tag">
                      {item}
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="sd-top-5">
            <span>介绍: </span>
            <span className="section">
              {
                getDescription(songsDetail.description)
              }
            </span>
          </div>
        </div>
      </div>
      <div className="sd-list">
        <SongsTableHead
          songCount={songsDetail.trackCount}
          playCount={songsDetail.playCount}
          isLink={true}
          link={`https://music.163.com/#/outchain/0/${songsDetail.id}/`}
        />
        <SongsThemeList tracks={tracks} className="st-l"/>
      </div>
      <div className="sd-more">
        <p>查看更多内容，请下载客户端</p>
        <a href="/#" className="download">立即下载</a>
      </div>
      <div className="song-comm">
        <SongsThemeComm commCount={commentCount}/>
        {
          hotComments.length > 0 &&
          <div>
            <div className="new-comm">精彩评论</div>
            <ul className="comment">
              {
                hotComments.map(item => <AppCommentItem key={item.commentId} comment={item}/>)
              }
            </ul>
          </div>
        }
        {
          comments.length > 0 &&
          <div>
            <div className="new-comm">最新评论({total})</div>
            <ul className="comment">
              {
                comments.map(item => <AppCommentItem key={item.commentId} comment={item}/>)
              }
            </ul>
          </div>
        }
      </div>
      <AppPagination
        total={total}
        defaultPageSize={20}
        defaultCurrent={1}
        pageSizeOptions={[20]}
        current={currIndex}
        onPageChange={changeSongsPage}
      />
    </SongsDetailLeftWrapper>
  )
}

SongsDetailLeft.propTypes = {
  songsDetail: propTypes.object.isRequired,
  id: propTypes.string
}

export default memo(SongsDetailLeft);
