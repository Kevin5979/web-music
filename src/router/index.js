import React from "react";
import {Redirect} from "react-router-dom";

import Discover from "pages/discover";
import Friend from "pages/friend";
import Mine from "pages/mine";

import Recommend from "pages/discover/children/recommend";
import Ranking from "pages/discover/children/ranking";
import Songs from "pages/discover/children/songs";
import DjRadio from "pages/discover/children/djRadio";
import Artist from "pages/discover/children/artist";
import Album from "pages/discover/children/album";


const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover"/>
      // <Redirect to="/mine"/>
    )
  },
  {
    path: "/discover",
    component: Discover,
    children: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          // <Redirect to="/discover/recommend"/>
          <Redirect to="/discover/album"/>
        )
      },
      {
        path: "/discover/recommend",
        component: Recommend
      },
      {
        path: "/discover/ranking",
        component: Ranking
      },
      {
        path: "/discover/songs",
        component: Songs
      },
      {
        path: "/discover/djRadio",
        component: DjRadio
      },
      {
        path: "/discover/artist",
        component: Artist
      },
      {
        path: "/discover/album",
        component: Album
      }
    ]
  },
  {
    path: "/mine",
    component: Mine
  },
  {
    path: "/friend",
    component: Friend
  }
];

export default routes;