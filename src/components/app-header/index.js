import React, {memo} from 'react';

import {NavLink} from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons"

import {HeaderWrapper} from "./style";
import {headerLinks} from "common/local-data";

export default memo(function AppHeader() {

  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <div className="left flex-start">
          <h1 className="logo">
            <a href="/" className="logo sprite_01" alt="网易云音乐">网易云音乐</a>
          </h1>
          <ul className="select-list flex-start">
            {headerLinks.map((item, index) => {
              return (
                <li key={item.title}>
                  {showSelectItem(item, index)}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="right flex-start">
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={ <SearchOutlined />} />
          <button className="center">创作者中心</button>
          <a href="/#" className="login">登录</a>
        </div>
      </div>
      <div className="divider">
      </div>
    </HeaderWrapper>
  )
})