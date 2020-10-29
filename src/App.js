import React, {memo, Suspense} from 'react';
import {BrowserRouter} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import {Provider} from "react-redux";
import {Spin} from "antd";

import routes from "./router";
import store from "./store";

import AppHeader from "components/app-header";
import AppFooter from "components/app-footer";
import AppPlayerBar from "pages/player/player-bar";


export default memo(function () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppHeader/>
        <Suspense
          fallback={<Spin className="spin-loading" size="large" tip="Loading..."/>}>
          {renderRoutes(routes)}
        </Suspense>
        <AppFooter/>
        <AppPlayerBar/>
      </BrowserRouter>
    </Provider>
  )
})