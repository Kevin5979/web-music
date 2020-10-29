import React, {memo, useEffect, useContext, useCallback} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import propTypes from "prop-types";
import {Tabs} from 'antd';

import {
  getActionTopSongsAction,
  getArtistAlbumAction,
  getArtistMVAction,
  getArtistDescAction
} from "../../store/actionCreators";
import {ArtistDetailLeftWrapper} from "./style";
import {formatImgUrl} from "utils/format-utils";
import SongsThemeList from "components/songs-theme-list";
import AlbumThemeItem from "components/album-theme-item";
import ArtistThemeMv from "components/artist-theme-mv";
import {getDescription} from "utils/format-utils";

import {ArtistDetailContext} from '../../index';

function ArtistDetailLeft(props) {
  const {id} = props
  const {TabPane} = Tabs;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActionTopSongsAction(id))
    dispatch(getArtistAlbumAction(id))
    dispatch(getArtistMVAction(id))
    dispatch(getArtistDescAction(id))
  }, [dispatch, id])

  const {
    artistTopSongs = [],
    artistAlbum = {},
    artistMV = [],
    artistDesc = {}
  } = useSelector(state => ({
    artistTopSongs: state.getIn(["artistDetail", "artistTopSongs"]),
    artistAlbum: state.getIn(["artistDetail", "artistAlbum"]),
    artistMV: state.getIn(["artistDetail", "artistMV"]),
    artistDesc: state.getIn(["artistDetail", "artistDesc"])
  }), shallowEqual)

  const {artist = {}, hotAlbums = []} = artistAlbum;

  const styles = {
    imgSize: 120,
    bgWidth: "145px",
    bgp: "-170px -850px",
    iconSize: "28px",
    iconP: "0 -170px",
    iconP2: "0 -170px"
  }

  const history = useContext(ArtistDetailContext);
  const skip = useCallback(link => {
    history.push(link)
  }, [history])

  return (
    <ArtistDetailLeftWrapper>
      {
        artist.name ? <div className="adl-top">
          <h2 className="title">{artist.name}</h2>
          <div className="img">
            <img src={formatImgUrl(artist.picUrl, 640, 300)} alt={artist.name}/>
            <div className="mask"></div>
            <div className="profile sprite_icon"></div>
            <div className="collect sprite_icon"></div>
          </div>
        </div> : null
      }
      <div className="tabs">
        <Tabs defaultActiveKey="1">
          <TabPane tab="热门作品" key="1">
            <div className="player flex-start">
              <div className="p-left sprite_button flex-start" title="播放全部">
                <i className="sprite_button"></i>
                <span>播放全部</span>
              </div>
              <div className="p-right" title="添加到播放列表">
                <i className="sprite_button"></i>
              </div>
            </div>
            <SongsThemeList tracks={artistTopSongs}/>
          </TabPane>
          <TabPane tab="所有专辑" key="2">
            <ul className="hot-album">
              {
                hotAlbums.length > 0 && hotAlbums.map(item => {
                  return (
                    <li key={item.id} className="album-item">
                      <AlbumThemeItem item={item} styles={styles} isTime={true} skip={skip}/>
                    </li>
                  )
                })
              }
            </ul>
          </TabPane>
          <TabPane tab="相关MV" key="3">
            <ul className="all-mv">
              {
                artistMV.length > 0 && artistMV.map(item => {
                  return <ArtistThemeMv key={item.id} item={item}/>
                })
              }
            </ul>
          </TabPane>
          <TabPane tab="艺人介绍" key="4">
            <div className="a-desc">
              <h2 className="flex-start">
                <i></i>
                <span className="title">{artist.name}简介</span>
              </h2>
              <p className="t-desc">{artistDesc.briefDesc}</p>
              <ul className="decs">
                {
                  artistDesc.introduction && artistDesc.introduction.length > 0 && artistDesc.introduction.map(item => {
                    return (
                      <li key={item.ti}>
                        <h3 className="ti">{item.ti}</h3>
                        <p className="txt">{getDescription(item.txt)}</p>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </ArtistDetailLeftWrapper>
  )
}

ArtistDetailLeft.propTypes = {
  id: propTypes.string
}

export default memo(ArtistDetailLeft);
