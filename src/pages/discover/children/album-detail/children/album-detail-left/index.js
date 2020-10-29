import React, {memo, useCallback, useEffect, useState} from 'react';
import propTypes from "prop-types";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {AlbumDetailLeftWrapper} from "./style";
import {formatImgUrl, formatDate, getDescription} from "utils/format-utils";
import {getAlbumCommentAction} from "../../store/actionCreators";
import SongsThemeMenu from "components/songs-theme-menu";
import SongsTableHead from "components/songs-table-head";
import SongsThemeList from "components/songs-theme-list";
import SongsThemeComm from "components/songs-theme-comm";
import AppCommentItem from "components/app-comment-item";
import AppPagination from "components/app-pagination";


function AlbumDetailLeft(props) {
  const [currIndex, setCurrIndex] = useState(1);
  const {albumDetail = {}, id} = props;
  const {album = {}, songs = []} = albumDetail;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbumCommentAction(id));
  }, [dispatch, id])

  const {albumComment = {}} = useSelector(state => ({
    albumComment: state.getIn(["albumDetail", "albumComment"])
  }), shallowEqual)


  const {hotComments = [], comments = [], total} = albumComment;

  const styles = {
    imgSize: 177,
    bgWidth: "209px",
    bgp: "0 -986px",
  }

  const changeSongsPage = useCallback((index) => {
    setCurrIndex(index)
    dispatch(getAlbumCommentAction(id, 20, (index - 1) * 20));
  }, [dispatch,id])

  return (
    <AlbumDetailLeftWrapper styles={styles}>
      <div className="adl-top">
        <div className="top-l">
          <img src={formatImgUrl(album.picUrl, styles.imgSize)} alt={album.name}/>
          <i className="album-bg sprite_cover"></i>
        </div>
        <div className="top-r">
          <div className="title flex-start">
            <i className="icon sprite_icon2"></i>
            <h3>{album.name}</h3>
          </div>
          <p>歌手： <i className="fake-a">{album && album.artist && album.artist.name}</i></p>
          <p>发行时间：{formatDate(album.publishTime, "yyyy-MM-dd")}</p>
          <p>发行公司：{album.company}</p>
          <div className="menu">
            <SongsThemeMenu shareCount={album && album.info && album.info.shareCount}
                            commentCount={album && album.info && album.info.commentCount}/>
          </div>
        </div>
      </div>
      <div className="adl-desc">
        <p className="desc-title">专辑介绍：</p>
        <div>{getDescription(album.description)}</div>
      </div>
      <SongsTableHead
        title="包含歌曲列表"
        songCount={songs.length}
        isLink={true}
        link={`https://music.163.com/#/outchain/1/${album.id}/`}
      />
      <SongsThemeList tracks={songs}/>
      <SongsThemeComm commCount={album.info && album.info.commentCount}/>
      {
        hotComments.length > 0 && <div className="hot-comm">
          <p className="c-title">精彩评论</p>
          <ul>
            {
              hotComments.map(item => <AppCommentItem comment={item} key={item.commentId}/>)
            }
          </ul>
        </div>
      }
      {
        comments.length > 0 && <div className="hot-comm">
          <p className="c-title">最新评论({total})</p>
          <ul>
            {
              comments.map(item => <AppCommentItem comment={item} key={item.commentId}/>)
            }
          </ul>
        </div>
      }
      <AppPagination
        total={total}
        defaultPageSize={20}
        defaultCurrent={1}
        pageSizeOptions={[20]}
        current={currIndex}
        onPageChange={changeSongsPage}
      />
    </AlbumDetailLeftWrapper>
  )
}

AlbumDetailLeft.propTypes = {
  albumDetail: propTypes.object,
  id: propTypes.string
}

export default memo(AlbumDetailLeft);
