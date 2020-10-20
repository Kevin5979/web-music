import React, {memo, useCallback, useState} from 'react';

import DjClassify from "./children/dj-classify";
import DjRecommend from "./children/dj-recommend";
import DjRanking from "./children/dj-ranking";
import DjHotClass from "./children/dj-hotclass";
import DjRadios from "./children/dj-radios";
import {DjRadioWrapper} from "./style";
import {djHotClass} from "common/local-data";

export default memo(function DjRadio() {
  const [currCate, setCurrCate] = useState(null);
  const changeCate = useCallback((cate) => {
    setCurrCate(cate)
  }, [])

  return (
    <DjRadioWrapper className="wrap-v2">
      <DjClassify changeCate={changeCate}/>
      {
        currCate === null && <div className="flex-evenly middle">
          <DjRecommend/>
          <DjRanking/>
        </div>
      }
      {
        currCate === null && <div className="hot-class">
          {
            djHotClass.map(item => {
              return <DjHotClass key={item.type} item={item}/>
            })
          }
        </div>
      }

      {
        currCate !== null && <DjRadios currCate={currCate} />
      }

    </DjRadioWrapper>
  )
})