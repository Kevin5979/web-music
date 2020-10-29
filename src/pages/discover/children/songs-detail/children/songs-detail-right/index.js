import React, {memo} from 'react';
import propTypes from "prop-types";

import {SongsDetailRightWrapper} from "./style";
import {formatImgUrl} from "utils/format-utils";
import AppSubscribe from "components/app-subscribe";
import AppDownload from "components/app-download";

function SongsDetailRight(props) {
  const {subscribers = [], songsRelated = [], skip} = props;

  return (
    <SongsDetailRightWrapper>
      <AppSubscribe title="喜欢这个歌单的人" list={subscribers}/>
      <div className="r2">
        <h3>相关推荐</h3>
        <ul className="rel">
          {
            songsRelated.length > 0 && songsRelated.map(item => {
              return (
                <li key={item.id} onClick={e => skip(`/discover/songs/detail?id=${item.id}`)}>
                  <div className="left">
                    <img src={formatImgUrl(item.coverImgUrl, 50)} alt={item.name} title={item.name}/>
                  </div>
                  <div className="right">
                    <p className="space-1">
                      <i className="name fake-a">{item.name}</i>
                    </p>
                    <p className="space-1">
                      <span>by</span>
                      <i className="nickname fake-a">{item.creator.nickname}</i>
                    </p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <AppDownload />
    </SongsDetailRightWrapper>
  )
}

SongsDetailRight.propTypes = {
  subscribers: propTypes.array,
  songsRelated: propTypes.array,
  skip: propTypes.func
}

SongsDetailRight.defaultProps = {
  subscribers: [],
  songsRelated: []
}

export default memo(SongsDetailRight);
