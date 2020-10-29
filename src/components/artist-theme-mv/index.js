import React, {memo} from 'react';
import propTypes from "prop-types";

import {ArtistThemeMvWrapper} from "./style";
import {formatImgUrl} from "utils/format-utils";

function ArtistThemeMv(props) {
  const {item} = props;
  return (
    <ArtistThemeMvWrapper>
      <div className="img">
        <img src={formatImgUrl(item.imgurl, 137, 103)} alt={item.name}/>
        <i className="sprite_icon"></i>
      </div>
      <p className="space-1 name">{item.name}</p>
    </ArtistThemeMvWrapper>
  )
}

ArtistThemeMv.propTypes = {
  item: propTypes.object
}

ArtistThemeMv.defaultProps = {
  item: {}
}

export default memo(ArtistThemeMv);
