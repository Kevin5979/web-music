import React, {memo, useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {AlbumDetailWrapper} from "./style";
import {getId} from "utils/format-utils";
import EventBus from "utils/eventBus";
import {getAlbumDetailAction} from "./store/actionCreators";
import AlbumDetailLeft from "./children/album-detail-left";
import AlbumDetailRight from "./children/album-detail-right";


export default memo(function AlbumDetail(props) {
  const {history} = props;
  const id = getId(props);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbumDetailAction(id));
    EventBus.emit("linkHistory", history);
    window.scrollTo(0, 0);
  }, [dispatch, id, history])

  const {albumDetail} = useSelector(state => ({
    albumDetail: state.getIn(["albumDetail", "albumDetail"])
  }), shallowEqual)

  return (
    <AlbumDetailWrapper className="wrap-v2">
      <AlbumDetailLeft albumDetail={albumDetail} id={id}/>
      <AlbumDetailRight/>
    </AlbumDetailWrapper>
  )
})
