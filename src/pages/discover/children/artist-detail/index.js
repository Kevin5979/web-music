import React, {createContext, memo, useEffect} from 'react';

import {ArtistDetailWrapper} from "./style";
import ArtistDetailLeft from "./children/artist-detail-left";
import ArtistDetailRight from "./children/artist-detail-right";
import {getId} from "utils/format-utils";
import EventBus from "utils/eventBus";

export const ArtistDetailContext = createContext({});

export default memo(function (props) {
  const id = getId(props);
  const {history} = props;

  useEffect(() => {
    EventBus.emit("linkHistory", history);
    window.scrollTo(0, 0);
  }, [history])

  return (
    <ArtistDetailWrapper className="wrap-v2">
      <ArtistDetailContext.Provider value={history}>
        <ArtistDetailLeft id={id}/>
        <ArtistDetailRight/>
      </ArtistDetailContext.Provider>
    </ArtistDetailWrapper>
  )
})