import React, {memo, useEffect, useRef, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {Carousel} from 'antd';
import propTypes from "prop-types";

import {DjClassifyWrapper} from "./style";
import {getDjCateListAction} from "../../store/actionCreators";

function DjClassify(props) {
  const {changeCate} = props
  const [currClassify, setCurrClassify] = useState(-1);
  const [, setCurrCate] = useState(-1);
  const djClassRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDjCateListAction())
  }, [dispatch])

  const {djCate} = useSelector(state => ({
    djCate: state.getIn(["djRadio", "djCate"])
  }), shallowEqual)

  const selectItem = (id, index) => {
    changeCate(id)
    if (index !== currClassify) {
      setCurrClassify(index);
      setCurrCate(id)
    }
  };

  return (
    <DjClassifyWrapper>
      {
        djCate.length > 16 ? (<i className="icon-c control-left" onClick={e => djClassRef.current.prev()}></i>) : null
      }
      <Carousel dots={false} ref={djClassRef}>
        {
          djCate.length > 18 ? (<ul className="f-pages">
            {
              djCate.slice(0, 18).map((item, index) => {
                const noActive = {
                  backgroundImage: `url(${item.picWebUrl})`
                }
                const Active = {
                  backgroundImage: `url(${item.picWebUrl})`,
                  backgroundPosition: "-48px 0"
                }
                const isActive = (index === currClassify);

                return (
                  <li key={item.id} className={isActive ? 'active' : ""} onClick={e => selectItem(item.id, index)}>
                    <div>
                      <i className="icon" style={isActive ? Active : noActive}></i>
                      <p className="name">{item.name}</p>
                    </div>
                  </li>
                )
              })
            }
            <li>
              <div>
                <i className="icon matter"></i>
                <p className="name">常见问题</p>
              </div>
            </li>
            <li>
              <div className="l-dodj">
                <i className="icon do-dj"></i>
                <p className="name">我要做主播</p>
              </div>
            </li>
          </ul>) : (<ul className="f-pages">
            {
              djCate.map((item, index) => {
                const noActive = {
                  backgroundImage: `url(${item.picWebUrl})`
                }
                const Active = {
                  backgroundImage: `url(${item.picWebUrl})`,
                  backgroundPosition: "-48px 0"
                }
                const isActive = (index === currClassify);

                return (
                  <li key={item.id} className={isActive ? 'active' : ""} onClick={e => selectItem(item.id, index)}>
                    <div>
                      <i className="icon" style={isActive ? Active : noActive}></i>
                      <p className="name">{item.name}</p>
                    </div>
                  </li>
                )
              })
            }
            <li>
              <div>
                <i className="icon matter"></i>
                <p className="name">常见问题</p>
              </div>
            </li>
            <li>
              <div className="l-dodj">
                <i className="icon do-dj"></i>
                <p className="name">我要做主播</p>
              </div>
            </li>
          </ul>)
        }

        {
          djCate.length > 16 ? (<ul className="f-pages">
            {
              djCate.length > 0 && djCate.slice(18).map((item, index) => {
                index = index + 18;
                const noActive = {
                  backgroundImage: `url(${item.picWebUrl})`
                }
                const Active = {
                  backgroundImage: `url(${item.picWebUrl})`,
                  backgroundPosition: "-48px 0"
                }
                const isActive = (index === currClassify);

                return (
                  <li key={item.id} className={isActive ? 'active' : ""} onClick={e => selectItem(index)}>
                    <div>
                      <i className="icon" style={isActive ? Active : noActive}></i>
                      <p className="name">{item.name}</p>
                    </div>
                  </li>
                )
              })
            }
            <li>
              <div>
                <i className="icon matter"></i>
                <p className="name">常见问题</p>
              </div>
            </li>
            <li>
              <div className="l-dodj">
                <i className="icon do-dj"></i>
                <p className="name">我要做主播</p>
              </div>
            </li>
          </ul>) : null
        }
      </Carousel>
      {
        djCate.length > 16 ? (<i className="icon-c control-right" onClick={e => djClassRef.current.next()}></i>) : null
      }

    </DjClassifyWrapper>
  )
}

DjClassify.propTypes = {
  changeCate: propTypes.func
}

export default memo(DjClassify);

