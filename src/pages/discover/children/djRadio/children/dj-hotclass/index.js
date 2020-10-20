import React, {memo, useEffect, useState} from 'react';
import propTypes from "prop-types"

import {DjHotClassWrapper} from "./style";
import {formatImgUrl} from "utils/format-utils";
import {getDjHotClass} from "services/djRadio";


function DjHotClass(props) {
  const {name, type} = props.item;

  const [djHotClassData, setDjHotClassData] = useState([]);
  useEffect(() => {
    getDjHotClass(type).then(res => {
      setDjHotClassData(res.djRadios);
    })
  }, [type])

  return (
    <DjHotClassWrapper>
      <h2 className="flex-between">
        <div>
          <a href="/#" className="title">{name}</a>
          <span className="title o"> · </span>
          <span className="title">电台</span>
        </div>
        <span className="more">更多 &gt;</span>
      </h2>
      <ul className="dj-hot-item flex-evenly">
        {
          djHotClassData.length > 0 && djHotClassData.slice(0, 8).map(item => {
            return (
              <li key={item.id} className="dj_hot">
                <img src={formatImgUrl(item.picUrl, 120)} alt={item.name}/>
                <p>{item.name}</p>
              </li>
            )
          })
        }
      </ul>
    </DjHotClassWrapper>
  )
}

DjHotClass.propTypes = {
  item: propTypes.object
}


DjHotClass.defaultProps = {
  item: {}
}

export default memo(DjHotClass)
