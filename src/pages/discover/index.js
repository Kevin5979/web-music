import React, {memo} from 'react';
import {discoverMenu} from "common/local-data"
import {DiscoverWrapper, TopMenu} from "./style"
import {NavLink} from "react-router-dom";
import {renderRoutes} from "react-router-config";

export default memo(function Discover(props) {
  const {route} = props
  return (
    <DiscoverWrapper>
      <div className="top">
        <div className="wrap-v1">
          <TopMenu className="flex-start">
            {
              discoverMenu.map((item, index) => {
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
    </DiscoverWrapper>
  )
})