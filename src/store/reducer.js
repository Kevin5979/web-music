import {combineReducers} from "redux-immutable";

import recommendReducer from "../pages/discover/children/recommend/store";
import rankingReducer from "../pages/discover/children/ranking/store";
import songsReducer from "../pages/discover/children/songs/store";
import djRadioReducer from "../pages/discover/children/djRadio/store";
import albumReducer from "../pages/discover/children/album/store";
import artistReducer from "../pages/discover/children/artist/store";

// 合并reducer
const Reducer = combineReducers({
  recommend: recommendReducer,
  ranking: rankingReducer,
  songs: songsReducer,
  djRadio: djRadioReducer,
  album: albumReducer,
  artist: artistReducer
})

export default Reducer;
