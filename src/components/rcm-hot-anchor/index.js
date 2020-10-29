import React, { memo } from 'react';

import {RcmHotAnchorWrapper} from "./style";
import {HotAnchor} from "common/local-data";

export default memo(function RcmHotAnchor() {
  return (
    <RcmHotAnchorWrapper>
      <div className="header">热门主播</div>
      <ul className="rcm-anchor">
        {
          HotAnchor.map(item=>{
            return (
              <li key={item.id} className="item flex-start">
                <img className="img" src={item.img} alt={item.name}/>
                <div className="desc">
                  <a className="name" href="/#">
                    <span>{item.name}</span>
                    <i className="sprite_icon2"></i>
                  </a>
                  <p className="space-1" title={item.desc}>{item.desc}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </RcmHotAnchorWrapper>
  )
})