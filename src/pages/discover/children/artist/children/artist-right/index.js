import React, {memo, useEffect, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import propTypes from "prop-types";

import {ArtistRightWrapper} from "./style";
import {formatImgUrl} from "utils/format-utils";
import {getHotArtistAction, getSomeArtistAction} from "../../store/actionCreators";
import {letters} from "common/local-data";

function ArtistRight(props) {
  const {currentTitle, currentItem, skip} = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    currentItem.id === -1 && dispatch(getHotArtistAction())
    currentItem.id !== -1 && dispatch(getSomeArtistAction(currentItem.type, currentItem.area))
    setCurrentIndex(0);
  }, [dispatch, currentItem.type, currentItem.area, currentItem.id])

  const artists = useSelector(state => {
    return currentItem.id === -1 ? state.getIn(["artist", "hotArtist"]) : state.getIn(["artist", "someArtist"])
  }, shallowEqual);

  const changeIndex = (index, initial) => {
    setCurrentIndex(index);
    dispatch(getSomeArtistAction(currentItem.type, currentItem.area, initial))
  };

  return (
    <ArtistRightWrapper>
      <h3 className="title">{currentTitle}</h3>
      {
        currentItem.id !== -1 && <ul className="letters flex-start">
          {
            letters.map((item, index) => {
              return (
                <li key={item.name}
                    className={currentIndex === index ? "active" : ""}
                    onClick={e => changeIndex(index, item.initial)}
                >{item.name}</li>
              )
            })
          }
        </ul>
      }

      <ul className="artists">
        {
          artists.map(item => {
            return (
              <li key={item.id} className="right-item" onClick={e => skip(`/discover/artist/detail?id=${item.id}`)}>
                <div className="top">
                  <img src={formatImgUrl(item.img1v1Url, 130)} alt={item.name + "的音乐"} title={item.name + "的音乐"}/>
                  <i
                    className="sprite_cover cover fake-a"
                    title={item.name + "的音乐"}
                  ></i>
                </div>
                <div className="bottom flex-between">
                  <span title={item.name + "的音乐"} className="space-1 fake-a">{item.name}</span>
                  {
                    item.accountId ? <i className="sprite_icon2 fake-a" title={item.name + "的个人主页"}></i> : null
                  }
                </div>
              </li>
            )
          })
        }
      </ul>
    </ArtistRightWrapper>
  )
}

ArtistRight.propTypes = {
  currentTitle: propTypes.string,
  currentItem: propTypes.object,
  skip: propTypes.func
}

ArtistRight.defaultProps = {
  currentTitle: "推荐歌手",
  currentItem: {}
}

export default memo(ArtistRight);
