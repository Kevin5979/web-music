import React, {memo, useCallback, useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {SongsDetailWrapper} from "./style";
import {
  getSongsDetailAction,
  getSongsRelatedAction
} from "./store/actionCreators";
import SongsDetailLeft from "./children/songs-detail-left";
import SongsDetailRight from "./children/songs-detail-right";
import {getId} from "utils/format-utils";
import EventBus from "utils/eventBus";

export default memo(function (props) {
  const id = getId(props);
  const {history} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsDetailAction(id))
    dispatch(getSongsRelatedAction(id))
    EventBus.emit("linkHistory", history);
    window.scrollTo(0, 0);
  }, [props, dispatch, id, history]);

  const {songsDetail, songsRelated} = useSelector(state => ({
    songsDetail: state.getIn(["songsDetail", "songsDetail"]),
    songsRelated: state.getIn(["songsDetail", "songsRelated"])
  }), shallowEqual);

  const {subscribers} = songsDetail;

  const skip = useCallback(link => {
    history.push(link)
  }, [history])

  return (
    <SongsDetailWrapper className="wrap-v2">
      <SongsDetailLeft id={id} songsDetail={songsDetail}/>
      <SongsDetailRight subscribers={subscribers} songsRelated={songsRelated} skip={skip}/>
    </SongsDetailWrapper>
  )
})