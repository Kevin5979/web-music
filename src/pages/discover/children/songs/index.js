import React, {memo, useCallback, useEffect, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {Modal} from 'antd';

import {
  getTopPlayListAction,
  getCatListAction
} from "./store/actionCreators";
import SongsThemeItem2 from "components/songs-theme-item2";
import AppPagination from "components/app-pagination";
import {ModalWrapper, SongsMainWrapper, SongsWrapper} from "./style";

import {getSongsClassify} from "utils/format-utils";
import {categories, iconPositions} from "common/local-data";

export default memo(function Songs(props) {
  // State hooks
  const [currType, setCurrType] = useState("hot");
  const [visible, setVisible] = useState(false);
  const [currIndex, setCurrIndex] = useState(1);
  const [currCat, setCurrCat] = useState("选择分类");

  const dispatch = useDispatch();

  // dispatch数据
  useEffect(() => {
    dispatch(getCatListAction());
    dispatch(getTopPlayListAction(currType));
  }, [dispatch, currType])

  // 获取数据
  const {topPlayList, catList} = useSelector(state => ({
    topPlayList: state.getIn(["songs", "topPlayList"]),
    catList: state.getIn(["songs", "catList"])
  }), shallowEqual)

  const {playlists = [], total, cat} = topPlayList;
  const {sub = []} = catList;

  // 展示弹窗
  const showModal = () => {
    setVisible(!visible);
  }

  const songsClassify = getSongsClassify(sub);

  // 切换歌单类型
  const selectItem = (value) => {
    if (value === "全部") {
      setCurrCat("选择分类");
    } else {
      setCurrCat(value)
    }
    setCurrIndex(1);
    dispatch(getTopPlayListAction(currType, value));
    setVisible(false);
  };

  // 切换页数
  const changeSongsPage = useCallback((index) => {
    setCurrIndex(index);
    dispatch(getTopPlayListAction(currType, cat, 35, (index - 1) * 35));
  }, [dispatch, currType, cat])

  // 切换类型 new / hot
  const changeType = useCallback((typeName) => {
    setCurrType(typeName);
    setCurrIndex(1);
    dispatch(getTopPlayListAction(typeName));
  }, [dispatch])

  const skip = useCallback((id) => {
    props.history.push(`/discover/songs/detail?id=${id}`)
  },[props.history])

  const handlerCancel = useCallback(()=>{
    setVisible(false)
  },[])

  return (
    <SongsWrapper className="wrap-v2">
      <div className="header flex-between">
        <div className="h-l flex-start">
          <h4 className="all">全部</h4>
          <div onClick={showModal} className="flex-start sel-class space-1">
            {currCat}
            <i className="sprite_icon2"></i>
          </div>
        </div>
        <div className="h-r flex-start">
          <span className={currType === "new" ? "active" : ""} onClick={e => changeType("new")}>
            新上
          </span>
          <span className={currType === "hot" ? "active" : ""} onClick={e => changeType("hot")}>
            热门
          </span>
        </div>
        <Modal
          visible={visible}
          width={1000}
          footer={null}
          onCancel={handlerCancel}
        >
          <ModalWrapper iconPositions={iconPositions}>
            <h3 className={(currCat === "选择分类" || currCat === "全部") ? "active" : ""} onClick={e => selectItem("全部")}>
              全部风格
            </h3>
            {
              categories && categories.map((item, index) => {
                return (
                  <div key={item} className="classes">
                    <div className="title flex-start">
                      <i className="sprite_icon2 icon"></i>
                      <p>{item}</p>
                    </div>
                    <ul className="flex-start">
                      {
                        songsClassify[index].map(value => {
                          return (
                            <li key={value} className="class-item">
                              <span className={value === currCat ? "active" : ""}
                                    onClick={e => selectItem(value)}>{value}</span>
                              <i>|</i>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                )
              })
            }
          </ModalWrapper>
        </Modal>
      </div>
      <SongsMainWrapper>
        {
          playlists.length > 0 && playlists.map(item => {
            return (
              <li key={item.id} className="item">
                <SongsThemeItem2 item={item} skip={skip}/>
              </li>
            )
          })
        }
      </SongsMainWrapper>
      <AppPagination
        total={total}
        defaultPageSize={35}
        defaultCurrent={1}
        pageSizeOptions={[35]}
        current={currIndex}
        onPageChange={changeSongsPage}
      />
    </SongsWrapper>
  )
})

