import React, {lazy} from "react";
import {Redirect} from "react-router-dom";

const Discover = lazy(() => import("pages/discover"));
const Friend = lazy(() => import("pages/friend"));
const Mine = lazy(() => import("pages/mine"));
const PlayerPanel = lazy(() => import("pages/player/player-panel"));
const Recommend = lazy(() => import("pages/discover/children/recommend"));
const Ranking = lazy(() => import("pages/discover/children/ranking"));
const Songs = lazy(() => import("pages/discover/children/songs"));
const DjRadio = lazy(() => import("pages/discover/children/djRadio"));
const Artist = lazy(() => import("pages/discover/children/artist"));
const Album = lazy(() => import("pages/discover/children/album"));
const SongsDetail = lazy(() => import("pages/discover/children/songs-detail"));
const ArtistDetail = lazy(() => import("pages/discover/children/artist-detail"));
const AlbumDetail = lazy(() => import("pages/discover/children/album-detail"));

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover"/>
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
          <Redirect to="/discover/recommend"/>
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
        component: Songs,
        exact: true
      },
      {
        path: "/discover/djRadio",
        component: DjRadio
      },
      {
        path: "/discover/artist",
        component: Artist,
        exact: true
      },
      {
        path: "/discover/album",
        component: Album,
        exact: true
      },
      {
        path: "/discover/songs/detail",
        component: SongsDetail
      },
      {
        path: "/discover/artist/detail",
        component: ArtistDetail
      },
      {
        path: "/discover/album/detail",
        component: AlbumDetail
      },
      {
        path: "/discover/player",
        component: PlayerPanel
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
