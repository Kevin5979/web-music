import React, {memo, useEffect} from 'react';

import {PlayerPanelWrapper} from "./style";
import {getId} from "utils/format-utils";
import PanelLeft from "./panel-left";
import PanelRight from "./panel-right";

export default memo(function PlayerPanel(props) {
  const id = getId(props);
  const {history} = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PlayerPanelWrapper className="wrap-v1">
      <PanelLeft id={id} history={history}/>
      <PanelRight id={id} history={history}/>
    </PlayerPanelWrapper>
  )
})