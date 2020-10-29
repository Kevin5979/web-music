import React, { memo } from 'react';

import AppDownload from "components/app-download";
import {AlbumDetailRightWrapper} from "./style";

export default memo(function AlbumDetailRight() {
  return (
    <AlbumDetailRightWrapper>
      <AppDownload />
    </AlbumDetailRightWrapper>
  )
})