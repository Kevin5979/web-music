import React, {memo} from 'react';
import PropTypes from 'prop-types';

import {RcmThemeNavWrapper} from "./style";
import {NavLink} from "react-router-dom";

function RcmThemeNav(props) {
  const {title, list, link} = props
  return (
    <RcmThemeNavWrapper className="flex-between">
      <div className="left flex-start">
        <i className="icon sprite_02"></i>
        <h3><NavLink to={link}>{title}</NavLink></h3>
        <ul className="flex-start">
          {
            list.map(item => {
              return (
                <li key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="right">
        <a href={link}>
          <span>更多</span>
          <i className="sprite_02"></i>
        </a>
      </div>
    </RcmThemeNavWrapper>
  )
}

RcmThemeNav.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
  link: PropTypes.string
};

RcmThemeNav.defaultProps = {
  title: "",
  list: [],
  link: ""
};

export default memo(RcmThemeNav);
