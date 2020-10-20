import React, {memo, useEffect, useRef} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {Carousel} from 'antd';


import RcmThemeNav from "components/rcm-theme-nav";
import AlbumThemeItem from "components/album-theme-item";
import {NewRecommendWrapper} from "./style";
import {getNewAlbumsAction} from "../../store/actionCreators";

export default memo(function NewRecommend() {
  const dispatch = useDispatch();
  const carouselRef = useRef();

  useEffect(() => {
    dispatch(getNewAlbumsAction())
  }, [dispatch])

  const {newAlbums} = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual)

  const styles = {
    imgSize: 100,
    bgWidth: "118px",
    bgp: "0 -570px",
    iconSize: "22px",
    iconP:"0 -85px",
    iconP2: "0 -110px"
  }

  return (
    <NewRecommendWrapper>
      <RcmThemeNav title="新碟上架" link="/discover/album"/>
      <div className="new-albums-content">
        <i className="icon icon-left sprite_02" onClick={e=>carouselRef.current.prev()}></i>
        <Carousel dots={false} ref={carouselRef}>
          {
            newAlbums.length > 0 && [0, 1].map(value => {
              return (
                <ul key={value} className="carousel">
                  {
                    newAlbums.slice(value * 5, (value + 1) * 5).map(item => {
                      return (
                        <li key={item.id} className="carousel-item">
                          <AlbumThemeItem item={item} styles={styles}/>
                        </li>
                      )
                    })
                  }
                </ul>
              )
            })
          }
        </Carousel>
        <i className="icon icon-right sprite_02" onClick={e=>carouselRef.current.next()}></i>
      </div>
    </NewRecommendWrapper>
  )
})