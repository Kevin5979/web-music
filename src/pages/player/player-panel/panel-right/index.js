import React, {memo, useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {PanelRightWrapper} from "./style";
import {getSimilarMusicAction} from "../../store/actionCreators";
import AppDownload from "components/app-download";
import {checkMusicAndPlay, dispatchCurrentPanel,dispatchLyric} from "utils/player";

export default memo(function PanelRight(props) {
  const {id, history} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSimilarMusicAction(id))
  }, [dispatch, id])

  const {similarMusic = []} = useSelector(state => ({
    similarMusic: state.getIn(["player", "similarMusic"])
  }), shallowEqual)

  const toPlayer = id => {
    checkMusicAndPlay(id, dispatch, history);
    dispatchCurrentPanel(id, dispatch);
    dispatchLyric(id,dispatch);
  }

  const toMusicPanel = id => {
    dispatchCurrentPanel(id, dispatch);
    history.push(`/discover/player?id=${id}`);
  }

  const toArtist = id => {
    history.push(`/discover/artist/detail?id=${id}`);
  }

  return (
    <PanelRightWrapper>
      <h2>相似歌曲</h2>
      <ul className="s-music">
        {
          similarMusic.map(item => {
            return (
              <li key={item.id} className="flex-between">
                <div className="s-music-l">
                  <i className="name fake-a space-1" onClick={e => toMusicPanel(item.id)}>{item.name}</i>
                  <p className="space-1">
                    {
                      item.artists && item.artists.length > 0 && item.artists.map((value, indey) => {
                        if (indey === item.artists.length - 1) {
                          return <i className="fake-a" key={value.name}
                                    onClick={e => toArtist(value.id)}>{value.name}</i>
                        } else {
                          return (
                            <span key={value.name}>
                              <i className="fake-a" onClick={e => toArtist(value.id)}>
                              {value.name}
                              </i>
                              <i> / </i>
                            </span>
                          )
                        }
                      })
                    }
                  </p>
                </div>
                <div className="s-music-r flex-start">
                  <i className="sprite_icon3 player" onClick={e => toPlayer(item.id)}></i>
                  <i className="sprite_icon3 add"></i>
                </div>
              </li>
            )
          })
        }
      </ul>
      <AppDownload/>
    </PanelRightWrapper>
  )
})