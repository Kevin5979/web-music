import React, {memo, useEffect} from 'react';
import {connect} from "react-redux";

import {getTopBannerActive} from "./store/actionCreators"

function Recommend(props) {
  const {getBanners, topBanners} = props
  useEffect(() => {
    getBanners()
  }, [getBanners])
  return (
    <div>
      Recommend{topBanners.length}
    </div>
  )
}

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
})

const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannerActive())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));
