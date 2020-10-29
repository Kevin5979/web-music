import React, {memo, useCallback, useEffect, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import propTypes from "prop-types";

import AppPagination from "components/app-pagination";
import {DjRadiosWrapper} from "./style";
import {getDjRadiosAction} from "../../store/actionCreators";
import {formatImgUrl} from "utils/format-utils";


function DjRadios(props) {
  const {currCate} = props;
  const [currCommentIndex, setCurrCommentIndex] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDjRadiosAction(currCate));
    setCurrCommentIndex(1);
  }, [dispatch, currCate])

  const {djRadios} = useSelector(state => ({
    djRadios: state.getIn(["djRadio", "djRadios"])
  }), shallowEqual)

  const changeCommentPage = useCallback((index) => {
    setCurrCommentIndex(index)
    dispatch(getDjRadiosAction(currCate, (index - 1) * 30))
  }, [dispatch, currCate])

  return (
    <DjRadiosWrapper>
      <h2 className="title">电台排行榜</h2>
      <ul className="dj-radios flex-evenly">
        {
          djRadios.length > 0 && djRadios.slice(0, 20).map(item => {
            return (
              <li key={item.id}>
                <img src={formatImgUrl(item.picUrl, 120)} alt={item.name}/>
                <div className="detail">
                  <p className="name space-1">{item.name}</p>
                  <div className="names flex-start">
                    <i className="sprite_icon2 left"></i>
                    <span className="nickname space-1">{item.dj.nickname}</span>
                    <i className="sprite_icon3 right"></i>
                  </div>
                  <p className="bottom">
                    <span>共{item.programCount}期</span>
                    <span>订阅{item.subCount}次</span>
                  </p>
                </div>
              </li>
            )
          })
        }
      </ul>
      <AppPagination
        total={300}
        defaultPageSize={20}
        defaultCurrent={1}
        pageSizeOptions={[20]}
        current={currCommentIndex}
        onPageChange={changeCommentPage}
      />
    </DjRadiosWrapper>
  )
}

DjRadios.propTypes = {
  currCate: propTypes.number
}

DjRadios.defaultProps = {
  currCate: 2001
}

export default memo(DjRadios);
