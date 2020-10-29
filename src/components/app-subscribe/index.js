import React, {memo} from 'react';
import propTypes from "prop-types";

import {AppSubscribeWrapper} from "./style";
import {formatImgUrl} from "utils/format-utils";

function AppSubscribe(props) {
  const {title = "", list = []} = props;
  return (
    <AppSubscribeWrapper>
      <div className="app-sub">
        <h3>{title}</h3>
        <ul className="sub">
          {
            list.length > 0 && list.map(item => {
              return (
                <li key={item.userId}>
                  <img src={formatImgUrl(item.avatarUrl, 40)} alt={item.nickname} title={item.nickname}/>
                </li>
              )
            })
          }
        </ul>
      </div>
    </AppSubscribeWrapper>
  )
}

AppSubscribe.propTypes = {
  title: propTypes.string,
  list: propTypes.array
}

AppSubscribe.defaultProps = {
  title: "",
  list: []
}

export default memo(AppSubscribe);
