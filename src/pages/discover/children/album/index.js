import React, {memo, useCallback, useEffect, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import AppPagination from "components/app-pagination";
import AlbumThemeItem from "components/album-theme-item";
import {AlbumWrapper} from "./style";
import {getNewAlbumsAction} from "../recommend/store/actionCreators";
import {getAllAlbumAction} from "./store/actionCreators";
import {allAlbumClass} from "common/local-data";

export default memo(function Album() {
  const [currIndex, setCurrIndex] = useState(1);
  const [currType, setCurrType] = useState("ALL");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewAlbumsAction());
    dispatch(getAllAlbumAction());
  }, [dispatch])

  const {newAlbums, allAlbum} = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"]),
    allAlbum: state.getIn(["album", "allAlbum"])
  }), shallowEqual)

  const changePage = useCallback((index) => {
    setCurrIndex(index);
    dispatch(getAllAlbumAction(currType, (index - 1) * 35));
  }, [dispatch, currType])

  const changeType = useCallback((type) => {
    setCurrType(type);
    setCurrIndex(1);
    dispatch(getAllAlbumAction(type));
  }, [dispatch])

  const styles = {
    imgSize: 130,
    bgWidth: "153px",
    bgp: "0 -845px",
    iconSize: "28px",
    iconP: "0 -170px",
    iconP2: "0 -170px"
  }

  return (
    <AlbumWrapper className="wrap-v2">
      <h3 className="hot-album">
        <span>热门新碟</span>
      </h3>
      <ul className="flex-between hot">
        {
          newAlbums.length > 0 && newAlbums.slice(0, 10).map(item => {
            return (
              <li key={item.id} className="album-item">
                <AlbumThemeItem item={item} styles={styles}/>
              </li>
            )
          })
        }
      </ul>
      <h3 className="all-album flex-start">
        <span>全部新碟</span>
        <ul className="flex-start">
          {
            allAlbumClass.map(item => {
              return (
                <li key={item.type}>
                  <span className="item" onClick={e => changeType(item.type)}>{item.name}</span>
                  <i>|</i>
                </li>
              )
            })
          }
        </ul>
      </h3>
      <ul className="flex-between hot all">
        {
          allAlbum.length > 0 && allAlbum.map(item => {
            return (
              <li key={item.id} className="album-item">
                <AlbumThemeItem item={item} styles={styles}/>
              </li>
            )
          })
        }
      </ul>
      <AppPagination
        total={500}
        defaultPageSize={35}
        defaultCurrent={1}
        pageSizeOptions={[35]}
        current={currIndex}
        onPageChange={changePage}
      />
    </AlbumWrapper>
  )
})