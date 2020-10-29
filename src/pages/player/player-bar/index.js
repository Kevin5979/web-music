import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {Progress, Slider} from 'antd';
import {shallowEqual, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import {PlayerWrapper} from "./style";
import EventBus from "utils/eventBus";
import {getMusicUrl, formatImgUrl, formatDate, getArtistsName} from "utils/format-utils";

export default memo(function Player() {
  const audioRef = useRef();
  const soundRef = useRef();

  const isShowBar = localStorage.getItem("SHOW_BAR") || false
  const [showBar, setShowBar] = useState(isShowBar === "true");

  const [currentMusicId, setCurrentMusicId] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSound, setCurrentSound] = useState(50);
  const [currentLoop, setCurrentLoop] = useState("sequence");
  let timer = null;

  const toggleBar = (flag) => {
    setShowBar(flag);
    localStorage.setItem("SHOW_BAR", flag);
  }

  const getCurrentMusicId = (id) => {
    setCurrentMusicId(id)
  }

  useEffect(() => {
    EventBus.addListener("toPlayer", getCurrentMusicId);
    return () => {
      EventBus.removeListener("toPlayer", getCurrentMusicId);
    }
  }, [])

  let {currentMusic = {}} = useSelector(state => ({
    currentMusic: state.getIn(["player", "currentMusic"])
  }), shallowEqual)

  if (!currentMusic.name) {
    currentMusic = JSON.parse(localStorage.getItem("CURRENT_MUSIC"));
  }


  const musicPic = (currentMusic && currentMusic.al) ?
    formatImgUrl(currentMusic.al.picUrl, 35) :
    "http://s4.music.126.net/style/web2/img/default/default_album.jpg";
  const musicName = (currentMusic && currentMusic.name) ? (currentMusic.name + " - " + getArtistsName(currentMusic.ar)) : "暂无歌曲";
  const duration = (currentMusic && currentMusic.dt) || 0;
  const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTime = formatDate(currentTime, "mm:ss") || "00.00";

  useEffect(() => {
    const loop = localStorage.getItem("CURRENT_LOOP");
    if (loop) {
      setCurrentLoop(loop);
    }

    if (currentMusicId !== 0) {
      audioRef.current.src = getMusicUrl(currentMusicId)
      document.title = musicName;
      audioRef.current.play().then(res => {
        setIsPlaying(true)
      }).catch(err => {
        setIsPlaying(false)
      })
    }
  }, [currentMusicId, currentMusic, musicName])

  // 播放音乐
  const playMusic = useCallback(() => {
    if (currentMusicId === 0) {
      audioRef.current.src = getMusicUrl(currentMusic && currentMusic.id)
    }
    if (isPlaying) {
      audioRef.current.pause();
      EventBus.emit("musicPause")
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying, setIsPlaying, currentMusic, currentMusicId])

  // 监听播放
  const timeUpdate = (e) => {
    if (!isChanging) {
      EventBus.emit("musicChange", Math.floor(e.target.currentTime))
      setCurrentTime(e.target.currentTime * 1000);
      setProgress(currentTime / duration * 100);
    }
  }

  // 滑动
  const sliderChange = useCallback(value => {
    setIsChanging(true);
    const currentTime = value / 100 * duration;
    setCurrentTime(currentTime);
    setProgress(value);
  }, [duration])

  // 滑动结束
  const sliderAfterChange = useCallback(value => {
    const currentTime = value / 100 * duration / 1000;
    audioRef.current.currentTime = currentTime;
    setCurrentTime(currentTime * 1000)
    setIsChanging(false);
    if (!isPlaying) {
      playMusic();
    }
  }, [duration, isPlaying, playMusic])

  // 播放结束
  const musicEnd = () => {
    console.log("播放结束");
    // if(currentLoop === "one"){
    sliderChange(0);
    audioRef.current.play();
    // }
  }


  // 音量控制
  const trimSound = () => {
    soundRef.current.className = "sound active";
    if (currentSound >= 100) {
      setCurrentSound(0)
      audioRef.current.volume = 0
    } else {
      audioRef.current.volume = (currentSound + 10) / 100;
      setCurrentSound(currentSound + 10)
    }
    clearTimeout(timer)
    timer = setTimeout(() => {
      soundRef.current.className = "sound";
    }, 5000)
  }

  // 歌曲循环
  const changeLoop = (loop) => {
    switch (loop) {
      case "sequence":
        localStorage.setItem("CURRENT_LOOP", "one");
        setCurrentLoop("one");
        break;
      case "one":
        localStorage.setItem("CURRENT_LOOP", "random");
        setCurrentLoop("random");
        break;
      default :
        localStorage.setItem("CURRENT_LOOP", "sequence");
        setCurrentLoop("sequence");
    }
  }

  return (
    <PlayerWrapper>
      <div className={"bar" + (showBar ? "" : " un-bar")}>
        <div className="bg sprite_playbar">
          <div className="wrapper wrap-v2">
            <div className="left flex-start">
              <i className="sprite_playbar prev" title="上一首"></i>
              <i
                className={"sprite_playbar play" + (isPlaying ? " pause" : "")}
                title="播放/暂停"
                onClick={e => playMusic()}
              >
              </i>
              <i className="sprite_playbar next" title="下一首"></i>
            </div>
            <div className="middle flex-start">
              <NavLink to={`/discover/player?id=${currentMusic && currentMusic.id}`} className="head">
                <img src={musicPic} alt={(currentMusic && currentMusic.name) || "暂无歌曲"}/>
                <i className="mask sprite_playbar"></i>
              </NavLink>
              <div className="m2">
                <div className="song flex-start">
                  <span>{musicName}</span>
                </div>
                <div className="progress flex-start">
                  <Slider
                    step={0.2}
                    value={progress}
                    tipFormatter={null}
                    onChange={sliderChange}
                    onAfterChange={sliderAfterChange}
                  />
                  <div className="play-timer flex-start">
                    <span className="older">{showCurrentTime}</span>
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                    <span className="all">{showDuration}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right flex-start">
              <div className="l flex-start">
                <i className="collect sprite_playbar"></i>
                <i className="share sprite_playbar"></i>
              </div>
              <div className="r flex-start">
                <div className="sound" ref={soundRef} onClick={trimSound}>
                  <Progress
                    className="progress"
                    type="circle"
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': '#c20c0c',
                    }}
                    percent={currentSound}
                    format={percent => `${percent}`}
                  />
                  <i className="icon sprite_playbar"></i>
                </div>
                <div className="mode" onClick={e => changeLoop(currentLoop)}>
                  <i className={"sprite_playbar " + currentLoop}></i>
                </div>
                <div className="s-list">
                  <i className="icon sprite_playbar">
                    <span>1</span>
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="up">
          <div className="up-top sprite_playbar">
            <i className="sprite_playbar lock" onClick={e => toggleBar(!showBar)}></i>
          </div>
        </div>
      </div>
      <audio ref={audioRef} autoPlay onTimeUpdate={timeUpdate} onEnded={musicEnd}/>
    </PlayerWrapper>
  )
})
