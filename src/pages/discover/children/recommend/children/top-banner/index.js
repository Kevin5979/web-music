import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {Carousel} from 'antd';
import {
  BannerWrapper,
  BannerLeft,
  BannerRight
} from "./style";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getTopBannerAction} from "../../store/actionCreators";

export default memo(function TopBanner() {

  const [currIndex, setCurrIndex] = useState(0);

  const bannerRef = useRef();

  // 组件和redux关联,获取数据进行操作
  // 拿到dispatch
  const dispatch = useDispatch();
  // 拿到state
  const {topBanners} = useSelector(state => ({
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual);

  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch])

  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrIndex(to);
    }, 0);
  }, [])

  const bgImage = topBanners.length > 0 && (topBanners[currIndex].imageUrl + "?imageView&blur=40x20")

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="wrap-v2 banner flex-start">
        <i className="control-left" onClick={e => bannerRef.current.prev()}></i>
        <BannerLeft>
          <Carousel effect="fade" dots={{className: "dots-active"}} autoplay ref={bannerRef} beforeChange={bannerChange}>
            {topBanners.map(item => {
              return (
                <div className="banner-item" key={item.encodeId}>
                  <img src={item.imageUrl} alt={item.typeTitle}/>
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <a href="https://music.163.com/#/download" className="download"> </a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </BannerRight>
        <i className="control-right" onClick={e => bannerRef.current.next()}></i>
      </div>
    </BannerWrapper>
  )
});