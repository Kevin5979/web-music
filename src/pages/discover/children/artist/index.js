import React, {memo, useCallback, useState} from 'react';

import {ArtistWrapper} from "./style";
import ArtistLeft from "./children/artist-left";
import ArtistRight from "./children/artist-right";

export default memo(function Artist() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [currentTitle, setCurrentTitle] = useState("推荐歌手");
  const [currentItem, setCurrentItem] = useState({name: "推荐歌手", id: -1});

  const changeArtistType = useCallback((title, item) => {
    setCurrentIndex(item.id);
    setCurrentTitle(title);
    setCurrentItem(item)
  }, [])

  return (
    <ArtistWrapper className="wrap-v2">
      <ArtistLeft currentIndex={currentIndex} changeArtistType={changeArtistType}/>
      <ArtistRight currentTitle={currentTitle} currentItem={currentItem}/>
    </ArtistWrapper>
  )
})