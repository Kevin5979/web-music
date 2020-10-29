import React, {memo} from 'react';

import AppDownload from "components/app-download";
import {ArtistDetailRightWrapper} from "./style";


export default memo(function () {

  return (
    <ArtistDetailRightWrapper>
      <AppDownload/>
    </ArtistDetailRightWrapper>
  )
})