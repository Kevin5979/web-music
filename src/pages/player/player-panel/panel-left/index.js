import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import propTypes from "prop-types";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {PanelLeftWrapper} from "./style";
import {dispatchCurrentPanel, checkMusicAndPlay} from "utils/player";
import {formatImgUrl, parseLyric} from "utils/format-utils";
import EventBus from "utils/eventBus";
import SongsThemeMenu from "components/songs-theme-menu";
import {getMusicCommentAction, getMusicLyricAction} from "../../store/actionCreators";
import SongsThemeComm from "components/songs-theme-comm";
import AppCommentItem from "components/app-comment-item";
import AppPagination from "components/app-pagination";

function PanelLeft(props) {
  const {id, history} = props;
  const dispatch = useDispatch();
  const lyricRef = useRef();

  const [currIndex, setCurrIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicTime, setMusicTime] = useState(0);
  const [passLyric, setPassLyric] = useState(0);

  useEffect(() => {
    dispatchCurrentPanel(id, dispatch);
    dispatch(getMusicCommentAction(id));
    dispatch(getMusicLyricAction(id));
  }, [id, dispatch])

  const {currentPanel = {}, musicComment = {}, musicLyric = {}} = useSelector(state => ({
    currentPanel: state.getIn(["player", "currentPanel"]),
    musicComment: state.getIn(["player", "musicComment"]),
    musicLyric: state.getIn(["player", "musicLyric"])
  }), shallowEqual)

  const lyric = musicLyric.lyric ? parseLyric(musicLyric.lyric) : {};
  const lyricKeys = Object.keys(lyric).map(item => parseInt(item));
  const len = lyricKeys.length;
  const lyricValues = Object.values(lyric);
  const {hotComments = [], comments = [], total} = musicComment;
  const musicPic = currentPanel.al ?
    formatImgUrl(currentPanel.al.picUrl, 130) :
    "http://s4.music.126.net/style/web2/img/default/default_album.jpg";
  const album = currentPanel.al ? currentPanel.al.name : "未知专辑";

  // 播放
  const toPlayer = (id) => {
    checkMusicAndPlay(id, dispatch, history);
  }

  // 切换评论页
  const changePageIndex = useCallback((index) => {
    setCurrIndex(index);
    dispatch(getMusicCommentAction(id, 20, (index - 1) * 20));
  }, [dispatch, id])

  // 音乐时间改变
  const timeChange = useCallback(time => {
    setIsPlaying(true);
    setMusicTime(time);
    for (let i = 0; i < len; i++) {
      if (lyricKeys[i] > time) {
        if (i >= passLyric + 1 && isPlaying) {
          setPassLyric(i)
          if (i > 10) {
            lyricRef.current.style.transform = `translateY(${-24.8 * (i - 7)}px)`;
          } else {
            lyricRef.current.style.transform = `translateY(${0}px)`;
          }
        }
        break;
      } else {
        // 回调
        setPassLyric(i)
      }
    }
  }, [lyricKeys, passLyric, isPlaying, len])

  // 音乐暂停
  const musicPause = () => {
    setIsPlaying(false);
  };

  // listener eventBus
  useEffect(() => {
    EventBus.addListener("musicChange", timeChange);
    EventBus.addListener("musicPause", musicPause);
    return () => {
      EventBus.removeListener("musicChange", timeChange);
      EventBus.removeListener("musicPause", musicPause);
    }
  }, [timeChange])

  // 歌词样式
  const checkLyric = (item, index) => {
    return item <= musicTime && lyricKeys[index + 1] > musicTime;
  }

  // 返回
  const toBack = () => {
    window.history.back();
  }

  return (
    <PanelLeftWrapper>
      <div className="p-top">
        <div className="pl-left">
          <div className={"cover-img"}>
            <img className="img" src={musicPic} alt=""/>
            <i className="sprite_cover mask"></i>
          </div>
          <p className="link flex-start">
            <i className="sprite_icon2 icon"></i>
            <a href={`https://music.163.com/#/outchain/2/${id}/`}>生成外链播放器</a>
          </p>
          <div className="menu">
            <SongsThemeMenu playerAction={e => toPlayer(currentPanel.id)} commentCount={total}/>
          </div>
        </div>
        <div className="pl-right">
          <div className="v1 flex-start">
            <i className="sprite_icon2 icon"></i>
            <h2><em>{currentPanel.name}</em></h2>
            <img src={require("assets/img/back.png")} className="back" onClick={toBack} alt="缩小" title="缩小"/>
          </div>
          <div className="v2 flex-start">
            <span className="title">歌手：</span>
            <p className="artists">
              {
                currentPanel.ar && currentPanel.ar.length > 0 && currentPanel.ar.map((value, indey) => {
                  if (indey === currentPanel.ar.length - 1) {
                    return <a href={`/discover/artist/detail?id=${value.id}`} key={value.name}>{value.name}</a>
                  } else {
                    return (
                      <span key={value.name}>
                      <a href={`/discover/artist/detail?id=${value.id}`}>
                        {value.name}
                      </a>
                      <i> / </i>
                    </span>
                    )
                  }
                })
              }
            </p>
          </div>
          <div className="v3 flex-start">
            <span className="title">所属专辑：</span>
            <a href="#/" className="album">{album}</a>
          </div>
          <div className="lyric">
            <ul ref={lyricRef}>
              {
                lyricKeys.map((item, index) => {
                  return (
                    <li key={item}
                        className={checkLyric(item, index) ? "active" : ""}>
                      {lyricValues[index]}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="p-bottom">
        <SongsThemeComm commCount={total} width="700px"/>
        {
          hotComments.length > 0 && <div className="hot-comm">
            <p className="c-title">精彩评论</p>
            <ul>
              {
                hotComments.map(item => <AppCommentItem comment={item} width="730px" key={item.commentId}/>)
              }
            </ul>
          </div>
        }
        {
          comments.length > 0 && <div className="hot-comm">
            <p className="c-title">最新评论({total})</p>
            <ul>
              {
                comments.map(item => <AppCommentItem comment={item} width="730px" key={item.commentId}/>)
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
          onPageChange={changePageIndex}
        />
      </div>
    </PanelLeftWrapper>
  )
}

PanelLeft.propTypes = {
  id: propTypes.string
}

export default memo(PanelLeft);
