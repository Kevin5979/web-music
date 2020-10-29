import React, {memo} from 'react';
import {NavLink} from "react-router-dom";
import {BackTop} from 'antd';
import {renderRoutes} from "react-router-config";

import {DiscoverWrapper, TopMenu} from "./style";
import {discoverMenu} from "common/local-data";

export default memo(function Discover(props) {
  const {route} = props;

  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#C20C0C',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };

  return (
    <DiscoverWrapper>
      <div className="top">
        <div className="wrap-v1">
          <TopMenu className="flex-start">
            {
              discoverMenu.map(item => {
                return (
                  <div className="item" key={item.title}>
                    <NavLink to={item.link}>
                      <span>{item.title}</span>
                    </NavLink>
                  </div>
                )
              })
            }
          </TopMenu>
        </div>
      </div>
      {renderRoutes(route.children)}
      <BackTop duration={300}>
        <div style={style}>UP</div>
      </BackTop>
    </DiscoverWrapper>
  )
})