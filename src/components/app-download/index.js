import React, { memo } from 'react';
import {AppDownloadWrapper} from "./style";

export default memo(function AppDownload() {
  return (
    <AppDownloadWrapper>
      <div className="app-download">
        <h3>网易云音乐多端下载</h3>
        <div className="dl sprite_icon4"></div>
        <p>同步歌单，随时畅听320k好音乐</p>
      </div>
    </AppDownloadWrapper>
  )
})